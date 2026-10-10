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

// Create client if configured, otherwise null
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Map local fallback items to WorkItemDB format
export const defaultFallbackWork: WorkItemDB[] = [
  {
    id: 'work-installation',
    title: 'AC Installation & Precise Mounting',
    category: 'Installation',
    description: 'Precision wall mounting, vibration-isolated outdoor bracket placement, and leak-tested copper piping for split and window units.',
    media_type: 'image',
    image_url: '/images/work/ac-installation.webp',
    thumbnail_url: '/images/work/ac-installation.webp',
    alt_text: 'Professional split AC indoor unit installation with level alignment in Indore',
    service_url: '/services/ac-installation/',
    featured: true,
    published: true,
    sort_order: 1,
    row_position: 'top',
    created_at: new Date().toISOString(),
  },
  {
    id: 'work-repair',
    title: 'AC Repair & Electrical Diagnostics',
    category: 'Repair',
    description: 'On-site troubleshooting for non-cooling units, unexpected tripping, sensor faults, PCB board diagnostics, and fan motor problems.',
    media_type: 'video',
    image_url: '/images/work/ac-repair.webp',
    thumbnail_url: '/images/work/ac-repair.webp',
    alt_text: 'HVAC technician testing electronic PCB control board with digital multimeter',
    service_url: '/services/ac-repair/',
    featured: true,
    published: true,
    sort_order: 2,
    row_position: 'top',
    created_at: new Date().toISOString(),
  },
  {
    id: 'work-service',
    title: 'High-Pressure Jet Spray Deep Servicing',
    category: 'AC Service',
    description: 'High-pressure wet jet coil wash, indoor blower cleaning, and drain tray flush to restore proper cooling airflow and peak hygiene.',
    media_type: 'video',
    image_url: '/images/work/ac-service.webp',
    thumbnail_url: '/images/work/ac-service.webp',
    alt_text: 'High pressure water jet power wash on outdoor air conditioner condenser coils',
    service_url: '/services/ac-service/',
    featured: true,
    published: true,
    sort_order: 3,
    row_position: 'bottom',
    created_at: new Date().toISOString(),
  },
  {
    id: 'work-gas-refilling',
    title: 'Refrigerant Pressure Testing & Gas Charging',
    category: 'Gas Refilling',
    description: 'Precision manifold gauge leak detection, nitrogen pressure testing, flare joint seals, and genuine R32 / R410A / R22 gas recharging.',
    media_type: 'image',
    image_url: '/images/work/ac-gas-charging.webp',
    thumbnail_url: '/images/work/ac-gas-charging.webp',
    alt_text: 'Technician charging refrigerant gas with brass manifold pressure gauge set',
    service_url: '/services/ac-gas-refilling/',
    featured: true,
    published: true,
    sort_order: 4,
    row_position: 'bottom',
    created_at: new Date().toISOString(),
  },
  {
    id: 'work-maintenance',
    title: 'Preventive Maintenance & Commercial AMC',
    category: 'Maintenance / AMC',
    description: 'Scheduled system checkups, refrigerant pressure evaluations, electrical terminal inspections, and customized residential and commercial AMC contracts.',
    media_type: 'image',
    image_url: '/images/work/ac-installation.webp',
    thumbnail_url: '/images/work/ac-installation.webp',
    alt_text: 'Preventive air conditioner maintenance and multi-unit inspection',
    service_url: '/services/ac-amc/',
    featured: false,
    published: true,
    sort_order: 5,
    row_position: 'bottom',
    created_at: new Date().toISOString(),
  },
];

// Default site settings
export const defaultSiteSettings: SiteSettingsDB = {
  id: 'default',
  business_name: business.name,
  tagline: business.tagline,
  phone_primary: business.phones.primaryFormatted,
  phone_secondary: business.phones.secondaryFormatted,
  whatsapp_number: business.phones.whatsappNumber,
  email: business.email,
  logo_url: '',
  hero_media_type: 'image',
  hero_media_url: '/images/hero/hero-technician.webp',
  hero_poster_url: '/images/hero/hero-technician.webp',
  hero_heading: 'Fast Doorstep AC Repair & Installations',
  hero_description: 'Doorstep technician visit across Indore & Rau. 100% genuine spares, upfront pricing & direct support.',
  service_areas: business.serviceAreas.core.join(', '),
  tech_mahendra_photo_url: '',
  tech_satyam_photo_url: '',
};

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

