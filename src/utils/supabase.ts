import { createClient } from '@supabase/supabase-js';
import type { WorkItemDB, SiteSettingsDB, SiteMediaDB } from '../types/database';
import { workItems as fallbackWorkItems } from '../data/work';
import { business } from '../data/business';

// Environment variables
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export const OWNER_EMAIL = 'patelcooltech@gmail.com';

export function isAuthorizedOwner(email?: string | null): boolean {
  if (!email) return false;
  return email.trim().toLowerCase() === OWNER_EMAIL.toLowerCase();
}

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('http') &&
  supabaseAnonKey.length > 20
);

// Public client for site visitors (zero background auth requests, zero token refresh, no 400 errors)
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null;

// Isolated storage key for owner admin authentication
export const ADMIN_AUTH_KEY = 'pct_admin_auth_session';

// Admin authenticated client with session persistence for owner dashboard
export const adminSupabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: ADMIN_AUTH_KEY,
      },
    })
  : null;

// Re-export defaults from dedicated data file
export { defaultFallbackWork, defaultSiteSettings } from '../data/defaults';

// In-memory single-flight promise cache to guarantee O(1) network fetch time complexity across components during build
let cachedWorkItemsPromise: Promise<WorkItemDB[]> | null = null;
let cachedSiteSettingsPromise: Promise<SiteSettingsDB> | null = null;

export function clearServerCache(): void {
  cachedWorkItemsPromise = null;
  cachedSiteSettingsPromise = null;
}

/**
 * Fetch published work items for public pages.
 * Falls back safely to defaultFallbackWork if Supabase is unconfigured or fails.
 * Cached in-memory during static build to prevent duplicate network requests across components.
 */
export async function getPublishedWorkItems(): Promise<WorkItemDB[]> {
  if (!supabase) {
    return defaultFallbackWork;
  }

  if (import.meta.env.DEV) {
    try {
      const { data, error } = await supabase
        .from('work_items')
        .select('*')
        .eq('published', true)
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (error || !data || data.length === 0) {
        return defaultFallbackWork;
      }
      return data as WorkItemDB[];
    } catch (err) {
      console.warn('Could not fetch work items from Supabase, using fallback:', err);
      return defaultFallbackWork;
    }
  }

  if (!cachedWorkItemsPromise) {
    cachedWorkItemsPromise = (async () => {
      try {
        const { data, error } = await supabase
          .from('work_items')
          .select('*')
          .eq('published', true)
          .order('sort_order', { ascending: true })
          .order('created_at', { ascending: false });

        if (error || !data || data.length === 0) {
          return defaultFallbackWork;
        }

        return data as WorkItemDB[];
      } catch (err) {
        console.warn('Could not fetch work items from Supabase, using fallback:', err);
        return defaultFallbackWork;
      }
    })();
  }

  return cachedWorkItemsPromise;
}

/**
 * Fetch site settings.
 * Cached in-memory during static build to guarantee O(1) time complexity across header, footer, hero, and pages.
 */
export async function getSiteSettings(): Promise<SiteSettingsDB> {
  if (!supabase) {
    return defaultSiteSettings;
  }

  if (import.meta.env.DEV) {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .eq('id', 'default')
        .single();

      if (error || !data) {
        return defaultSiteSettings;
      }
      return data as SiteSettingsDB;
    } catch (err) {
      console.warn('Could not fetch settings from Supabase, using fallback:', err);
      return defaultSiteSettings;
    }
  }

  if (!cachedSiteSettingsPromise) {
    cachedSiteSettingsPromise = (async () => {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .select('*')
          .eq('id', 'default')
          .single();

        if (error || !data) {
          return defaultSiteSettings;
        }

        return data as SiteSettingsDB;
      } catch (err) {
        console.warn('Could not fetch settings from Supabase, using fallback:', err);
        return defaultSiteSettings;
      }
    })();
  }

  return cachedSiteSettingsPromise;
}

