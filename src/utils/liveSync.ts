import type { SiteSettingsDB, WorkItemDB } from '../types/database';
import { defaultSiteSettings } from '../data/defaults';
import { updateBrowserFavicon } from './favicon';

// Storage keys
export const SETTINGS_KEY = 'pct_site_settings';
export const WORK_ITEMS_KEY = 'pct_work_items';
export const LOGO_KEY = 'pct_custom_logo';

let isInitialized = false;
let broadcastChannel: BroadcastChannel | null = null;
let lastFetchTimestamp = 0;
const FETCH_THROTTLE_MS = 15 * 60 * 1000; // 15-minute throttle for background tab focus

if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    broadcastChannel = new BroadcastChannel('pct_sync_channel');
  } catch (_) {}
}

/**
 * Fast O(1) in-memory / localStorage settings retrieval
 */
export function getStoredSettings(): SiteSettingsDB | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return null;
}

/**
 * Fast O(1) custom logo lookup
 */
export function getStoredLogo(): string {
  if (typeof window === 'undefined') return '';
  try {
    const cachedLogo = localStorage.getItem(LOGO_KEY);
    if (cachedLogo) return cachedLogo;
    const settings = getStoredSettings();
    if (settings?.logo_url) return settings.logo_url;
  } catch (_) {}
  return '/images/brand-logo-512.png';
}

/**
 * Fast O(1) work items retrieval
 */
export function getStoredWorkItems(): WorkItemDB[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(WORK_ITEMS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return null;
}

/**
 * Broadcast local settings update across tabs in O(1) time
 */
export function broadcastSettingsUpdate(settings: Partial<SiteSettingsDB>) {
  if (typeof window === 'undefined') return;
  try {
    const existing = getStoredSettings() || defaultSiteSettings;
    const merged = { ...existing, ...settings };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(merged));
    if (typeof settings.logo_url === 'string') {
      if (settings.logo_url) {
        localStorage.setItem(LOGO_KEY, settings.logo_url);
      } else {
        localStorage.removeItem(LOGO_KEY);
      }
      updateBrowserFavicon(settings.logo_url);
    }
    window.dispatchEvent(new CustomEvent('pct:settings-updated', { detail: merged }));
    if (typeof settings.logo_url === 'string') {
      window.dispatchEvent(new CustomEvent('pct:logo-updated', { detail: { logoUrl: settings.logo_url } }));
    }
    broadcastChannel?.postMessage({ type: 'SETTINGS_UPDATE', data: merged });
  } catch (_) {}
}

/**
 * Broadcast local work items update across tabs in O(1) time
 */
export function broadcastWorkItemsUpdate(items: WorkItemDB[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(WORK_ITEMS_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('pct:work-updated', { detail: items }));
    broadcastChannel?.postMessage({ type: 'WORK_ITEMS_UPDATE', data: items });
  } catch (_) {}
}

/**
 * Lazy Supabase loader: only loads the 227KB Supabase SDK on demand, keeping it off the critical path
 */
async function getSupabaseInstance() {
  try {
    const { supabase, isSupabaseConfigured } = await import('./supabase');
    if (isSupabaseConfigured && supabase) {
      return supabase;
    }
  } catch (err) {
    console.warn('Supabase lazy import failed:', err);
  }
  return null;
}

export async function fetchLiveSettings(): Promise<SiteSettingsDB | null> {
  const supabase = await getSupabaseInstance();
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('id', 'default')
      .single();
    if (!error && data) {
      broadcastSettingsUpdate(data as SiteSettingsDB);
      lastFetchTimestamp = Date.now();
      return data as SiteSettingsDB;
    }
  } catch (err) {
    console.warn('Failed to fetch live settings:', err);
  }
  return null;
}

export async function fetchLiveWorkItems(): Promise<WorkItemDB[] | null> {
  const supabase = await getSupabaseInstance();
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('work_items')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });
    if (!error && data) {
      broadcastWorkItemsUpdate(data as WorkItemDB[]);
      lastFetchTimestamp = Date.now();
      return data as WorkItemDB[];
    }
  } catch (err) {
    console.warn('Failed to fetch live work items:', err);
  }
  return null;
}

async function initAdminRealtime() {
  const supabase = await getSupabaseInstance();
  if (!supabase) return;

  fetchLiveSettings();
  fetchLiveWorkItems();

  try {
    supabase
      .channel('public:site_settings_realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'site_settings' }, (payload) => {
        if (payload.new && typeof payload.new === 'object') {
          broadcastSettingsUpdate(payload.new as SiteSettingsDB);
        } else {
          fetchLiveSettings();
        }
      })
      .subscribe();

    supabase
      .channel('public:work_items_realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'work_items' }, () => {
        fetchLiveWorkItems();
      })
      .subscribe();
  } catch (e) {
    console.warn('Realtime subscription error:', e);
  }
}

export function initLiveSync() {
  // Clean up any stale or corrupted Supabase auth tokens from localStorage that trigger 400 Bad Request
  if (typeof window !== 'undefined') {
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith('sb-') && key.endsWith('-auth-token')) {
          localStorage.removeItem(key);
        }
      }
    } catch (_) {}
  }

  // Sync browser favicon immediately on every execution (including view transitions) - O(1) synchronous
  const currentLogo = getStoredLogo();
  if (currentLogo) {
    updateBrowserFavicon(currentLogo);
  }

  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;

  // Listen to custom logo & settings events - O(1) in-memory
  window.addEventListener('pct:logo-updated', (e: any) => {
    updateBrowserFavicon(e.detail?.logoUrl);
  });
  window.addEventListener('pct:settings-updated', (e: any) => {
    if (typeof e.detail?.logo_url === 'string') {
      updateBrowserFavicon(e.detail.logo_url);
    }
  });

  // Listen to BroadcastChannel messages from other tabs/admin - O(1) in-memory
  if (broadcastChannel) {
    broadcastChannel.onmessage = (event) => {
      const { type, data } = event.data || {};
      if (type === 'SETTINGS_UPDATE' && data) {
        window.dispatchEvent(new CustomEvent('pct:settings-updated', { detail: data }));
        if (typeof data.logo_url === 'string') {
          updateBrowserFavicon(data.logo_url);
          window.dispatchEvent(new CustomEvent('pct:logo-updated', { detail: { logoUrl: data.logo_url } }));
        }
      } else if (type === 'WORK_ITEMS_UPDATE' && data) {
        window.dispatchEvent(new CustomEvent('pct:work-updated', { detail: data }));
      }
    };
  }

  // Window storage event (for cross-tab storage sync fallback) - O(1) in-memory
  window.addEventListener('storage', (e) => {
    if (e.key === SETTINGS_KEY && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        window.dispatchEvent(new CustomEvent('pct:settings-updated', { detail: parsed }));
        if (parsed.logo_url) {
          updateBrowserFavicon(parsed.logo_url);
          window.dispatchEvent(new CustomEvent('pct:logo-updated', { detail: { logoUrl: parsed.logo_url } }));
        }
      } catch (_) {}
    } else if (e.key === LOGO_KEY) {
      updateBrowserFavicon(e.newValue || '');
      window.dispatchEvent(new CustomEvent('pct:logo-updated', { detail: { logoUrl: e.newValue || '' } }));
    } else if (e.key === WORK_ITEMS_KEY && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        window.dispatchEvent(new CustomEvent('pct:work-updated', { detail: parsed }));
      } catch (_) {}
    }
  });

  const isAdmin = Boolean(
    window.location.pathname.startsWith('/admin') ||
    sessionStorage.getItem('pct_admin_authenticated') === 'true'
  );

  if (isAdmin) {
    initAdminRealtime();
  } else {
    // For public visitors: schedule non-blocking background check during browser idle time
    const scheduleIdleCheck = () => {
      const performFetch = () => {
        const now = Date.now();
        if (now - lastFetchTimestamp > FETCH_THROTTLE_MS) {
          fetchLiveSettings();
          fetchLiveWorkItems();
        }
      };

      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(performFetch, { timeout: 4000 });
      } else {
        setTimeout(performFetch, 2500);
      }
    };

    scheduleIdleCheck();

    // Throttled re-check on tab focus only if at least 15 minutes have passed
    const handleThrottledFocus = () => {
      if (document.visibilityState === 'visible') {
        const now = Date.now();
        if (now - lastFetchTimestamp > FETCH_THROTTLE_MS) {
          scheduleIdleCheck();
        }
      }
    };

    document.addEventListener('visibilitychange', handleThrottledFocus);
  }
}
