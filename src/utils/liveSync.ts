import { supabase, isSupabaseConfigured, defaultSiteSettings } from './supabase';
import type { SiteSettingsDB, WorkItemDB } from '../types/database';

// Storage keys
export const SETTINGS_KEY = 'pct_site_settings';
export const WORK_ITEMS_KEY = 'pct_work_items';
export const LOGO_KEY = 'pct_custom_logo';

let isInitialized = false;
let broadcastChannel: BroadcastChannel | null = null;

if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    broadcastChannel = new BroadcastChannel('pct_sync_channel');
  } catch (_) {}
}

export function getStoredSettings(): SiteSettingsDB | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return null;
}

export function getStoredLogo(): string {
  if (typeof window === 'undefined') return '';
  try {
    const cachedLogo = localStorage.getItem(LOGO_KEY);
    if (cachedLogo) return cachedLogo;
    const settings = getStoredSettings();
    if (settings?.logo_url) return settings.logo_url;
  } catch (_) {}
  return '';
}

export function getStoredWorkItems(): WorkItemDB[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(WORK_ITEMS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return null;
}

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
    }
    window.dispatchEvent(new CustomEvent('pct:settings-updated', { detail: merged }));
    if (typeof settings.logo_url === 'string') {
      window.dispatchEvent(new CustomEvent('pct:logo-updated', { detail: { logoUrl: settings.logo_url } }));
    }
    broadcastChannel?.postMessage({ type: 'SETTINGS_UPDATE', data: merged });
  } catch (_) {}
}

export function broadcastWorkItemsUpdate(items: WorkItemDB[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(WORK_ITEMS_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('pct:work-updated', { detail: items }));
    broadcastChannel?.postMessage({ type: 'WORK_ITEMS_UPDATE', data: items });
  } catch (_) {}
}

export async function fetchLiveSettings(): Promise<SiteSettingsDB | null> {
  if (!isSupabaseConfigured || !supabase) return null;
  try {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('id', 'default')
      .single();
    if (!error && data) {
      broadcastSettingsUpdate(data as SiteSettingsDB);
      return data as SiteSettingsDB;
    }
  } catch (err) {
    console.warn('Failed to fetch live settings:', err);
  }
  return null;
}

export async function fetchLiveWorkItems(): Promise<WorkItemDB[] | null> {
  if (!isSupabaseConfigured || !supabase) return null;
  try {
    const { data, error } = await supabase
      .from('work_items')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });
    if (!error && data) {
      broadcastWorkItemsUpdate(data as WorkItemDB[]);
      return data as WorkItemDB[];
    }
  } catch (err) {
    console.warn('Failed to fetch live work items:', err);
  }
  return null;
}

export function initLiveSync() {
  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;

  // Listen to BroadcastChannel messages from other tabs/admin
  if (broadcastChannel) {
    broadcastChannel.onmessage = (event) => {
      const { type, data } = event.data || {};
      if (type === 'SETTINGS_UPDATE' && data) {
        window.dispatchEvent(new CustomEvent('pct:settings-updated', { detail: data }));
        if (typeof data.logo_url === 'string') {
          window.dispatchEvent(new CustomEvent('pct:logo-updated', { detail: { logoUrl: data.logo_url } }));
        }
      } else if (type === 'WORK_ITEMS_UPDATE' && data) {
        window.dispatchEvent(new CustomEvent('pct:work-updated', { detail: data }));
      }
    };
  }

  // Window storage event (for cross-tab storage sync fallback)
  window.addEventListener('storage', (e) => {
    if (e.key === SETTINGS_KEY && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        window.dispatchEvent(new CustomEvent('pct:settings-updated', { detail: parsed }));
        if (parsed.logo_url) {
          window.dispatchEvent(new CustomEvent('pct:logo-updated', { detail: { logoUrl: parsed.logo_url } }));
        }
      } catch (_) {}
    } else if (e.key === LOGO_KEY) {
      window.dispatchEvent(new CustomEvent('pct:logo-updated', { detail: { logoUrl: e.newValue || '' } }));
    } else if (e.key === WORK_ITEMS_KEY && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        window.dispatchEvent(new CustomEvent('pct:work-updated', { detail: parsed }));
      } catch (_) {}
    }
  });

  // Re-fetch on visibility change and focus
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      fetchLiveSettings();
      fetchLiveWorkItems();
    }
  });
  window.addEventListener('focus', () => {
    fetchLiveSettings();
    fetchLiveWorkItems();
  });

  // Supabase Realtime Channels
  if (isSupabaseConfigured && supabase) {
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

  // Initial background fetch
  fetchLiveSettings();
  fetchLiveWorkItems();
}
