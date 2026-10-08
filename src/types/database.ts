export type WorkCategory =
  | 'Installation'
  | 'Repair'
  | 'AC Service'
  | 'Maintenance / AMC'
  | 'Gas Refilling'
  | 'Other';

export type MediaType = 'image' | 'video';

export interface WorkItemDB {
  id: string;
  title: string;
  category: WorkCategory;
  description: string;
  media_type: MediaType;
  image_url: string;
  video_url?: string | null;
  thumbnail_url?: string | null;
  alt_text?: string;
  service_url?: string;
  featured: boolean;
  published: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface SiteSettingsDB {
  id: string;
  business_name: string;
  tagline: string;
  phone_primary: string;
  phone_secondary: string;
  whatsapp_number: string;
  email: string;
  logo_url: string;
  hero_media_type: MediaType;
  hero_media_url: string;
  hero_poster_url: string;
  hero_heading: string;
  hero_description: string;
  service_areas: string;
  updated_at?: string;
}

export interface SiteMediaDB {
  id: string;
  file_name: string;
  file_url: string;
  file_type: MediaType;
  category: 'work' | 'hero' | 'logo' | 'general';
  file_size?: number;
  created_at?: string;
}
