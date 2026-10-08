-- ==============================================================================
-- PATEL COOL TECH - SUPABASE INITIAL SCHEMA & RLS POLICIES
-- ==============================================================================

-- 1. Create site_settings table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id TEXT PRIMARY KEY DEFAULT 'default',
  business_name TEXT NOT NULL DEFAULT 'Patel Cool Tech',
  tagline TEXT DEFAULT 'AC Installation, Repair & Service',
  phone_primary TEXT DEFAULT '+91 95756 64203',
  phone_secondary TEXT DEFAULT '+91 94251 66191',
  whatsapp_number TEXT DEFAULT '+919575664203',
  email TEXT DEFAULT 'patelcooltech@gmail.com',
  logo_url TEXT DEFAULT '',
  hero_media_type TEXT DEFAULT 'image', -- 'image' or 'video'
  hero_media_url TEXT DEFAULT '/images/hero/hero-technician.jpg',
  hero_poster_url TEXT DEFAULT '/images/hero/hero-technician.jpg',
  hero_heading TEXT DEFAULT 'AC Installation, Repair & Service in Indore',
  hero_description TEXT DEFAULT 'Professional AC installation, repair, servicing, gas refilling and AMC support for homes and businesses across Indore and nearby areas. Direct communication and on-site assistance by technicians Mahendra Patel & Satyam Patel.',
  service_areas TEXT DEFAULT 'Indore, Rau, Pithampur',
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Create work_items table
CREATE TABLE IF NOT EXISTS public.work_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Installation', 'Repair', 'AC Service', 'Maintenance / AMC', 'Gas Refilling', 'Other')),
  description TEXT,
  media_type TEXT NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video')),
  image_url TEXT NOT NULL,
  video_url TEXT,
  thumbnail_url TEXT,
  alt_text TEXT,
  service_url TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Create site_media table for media management
CREATE TABLE IF NOT EXISTS public.site_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL CHECK (file_type IN ('image', 'video')),
  category TEXT DEFAULT 'general' CHECK (category IN ('work', 'hero', 'logo', 'general')),
  file_size BIGINT,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.work_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_media ENABLE ROW LEVEL SECURITY;

-- ==============================================================================
-- RLS POLICIES
-- ==============================================================================

-- SITE SETTINGS POLICIES:
-- Public can read site settings
CREATE POLICY "Public can view site settings"
  ON public.site_settings
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated owner can update settings
CREATE POLICY "Owner can update site settings"
  ON public.site_settings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- WORK ITEMS POLICIES:
-- Public can only view published work items
CREATE POLICY "Public can view published work items"
  ON public.work_items
  FOR SELECT
  TO anon
  USING (published = true);

-- Owner can view all work items (including drafts)
CREATE POLICY "Owner can view all work items"
  ON public.work_items
  FOR SELECT
  TO authenticated
  USING (true);

-- Owner can insert, update, delete work items
CREATE POLICY "Owner can mutate work items"
  ON public.work_items
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- SITE MEDIA POLICIES:
-- Public can view media records
CREATE POLICY "Public can view media"
  ON public.site_media
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Owner can insert and delete media records
CREATE POLICY "Owner can mutate media"
  ON public.site_media
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ==============================================================================
-- STORAGE BUCKETS SETUP
-- ==============================================================================

-- Create buckets for work media and site assets
INSERT INTO storage.buckets (id, name, public)
VALUES ('work-media', 'work-media', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('site-assets', 'site-assets', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies: Public can read
CREATE POLICY "Public can read work-media"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'work-media');

CREATE POLICY "Public can read site-assets"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'site-assets');

-- Storage policies: Authenticated owner can upload, update, delete
CREATE POLICY "Owner can upload to work-media"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'work-media');

CREATE POLICY "Owner can update work-media"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'work-media');

CREATE POLICY "Owner can delete from work-media"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'work-media');

CREATE POLICY "Owner can upload to site-assets"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'site-assets');

CREATE POLICY "Owner can update site-assets"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'site-assets');

CREATE POLICY "Owner can delete from site-assets"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'site-assets');

-- ==============================================================================
-- SEED DATA
-- ==============================================================================

-- Seed default site settings
INSERT INTO public.site_settings (
  id, business_name, tagline, phone_primary, phone_secondary,
  whatsapp_number, email, hero_media_type, hero_media_url,
  hero_poster_url, hero_heading, hero_description, service_areas
) VALUES (
  'default',
  'Patel Cool Tech',
  'AC Installation, Repair & Service',
  '+91 95756 64203',
  '+91 94251 66191',
  '+919575664203',
  'patelcooltech@gmail.com',
  'image',
  '/images/hero/hero-technician.jpg',
  '/images/hero/hero-technician.jpg',
  'AC Installation, Repair & Service in Indore',
  'Professional AC installation, repair, servicing, gas refilling and AMC support for homes and businesses across Indore and nearby areas. Direct communication and on-site assistance by technicians Mahendra Patel & Satyam Patel.',
  'Indore, Rau, Pithampur'
) ON CONFLICT (id) DO NOTHING;

-- Seed default work items
INSERT INTO public.work_items (
  title, category, description, media_type, image_url, thumbnail_url,
  alt_text, service_url, featured, published, sort_order
) VALUES
  (
    'AC Installation & Precise Mounting',
    'Installation',
    'Precision wall mounting, vibration-isolated outdoor bracket placement, and leak-tested copper piping for split and window units.',
    'image',
    '/images/work/ac-installation.jpg',
    '/images/work/ac-installation.jpg',
    'Professional split AC indoor unit installation with level alignment in Indore',
    '/services/ac-installation/',
    true,
    true,
    1
  ),
  (
    'AC Repair & Electrical Diagnostics',
    'Repair',
    'On-site troubleshooting for non-cooling units, unexpected tripping, sensor faults, PCB board diagnostics, and fan motor problems.',
    'image',
    '/images/work/ac-repair.jpg',
    '/images/work/ac-repair.jpg',
    'HVAC technician testing electronic PCB control board with digital multimeter',
    '/services/ac-repair/',
    true,
    true,
    2
  ),
  (
    'High-Pressure Jet Spray Deep Servicing',
    'AC Service',
    'High-pressure wet jet coil wash, indoor blower cleaning, and drain tray flush to restore proper cooling airflow and peak hygiene.',
    'image',
    '/images/work/ac-service.jpg',
    '/images/work/ac-service.jpg',
    'High pressure water jet power wash on outdoor air conditioner condenser coils',
    '/services/ac-service/',
    true,
    true,
    3
  ),
  (
    'Refrigerant Pressure Testing & Gas Charging',
    'Gas Refilling',
    'Precision manifold gauge leak detection, nitrogen pressure testing, flare joint seals, and genuine R32 / R410A / R22 gas recharging.',
    'image',
    '/images/work/ac-gas-charging.jpg',
    '/images/work/ac-gas-charging.jpg',
    'Technician charging refrigerant gas with brass manifold pressure gauge set',
    '/services/ac-gas-refilling/',
    true,
    true,
    4
  ),
  (
    'Preventive Maintenance & Commercial AMC',
    'Maintenance / AMC',
    'Scheduled system checkups, refrigerant pressure evaluations, electrical terminal inspections, and customized residential and commercial AMC contracts.',
    'image',
    '/images/work/ac-installation.jpg',
    '/images/work/ac-installation.jpg',
    'Preventive air conditioner maintenance and multi-unit inspection',
    '/services/ac-amc/',
    false,
    true,
    5
  );
