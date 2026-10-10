/**
 * Browser Tab Favicon Sync Utility
 * Ensures that the owner's uploaded brand logo is dynamically displayed
 * as the original browser tab icon (favicon and apple-touch-icon) across all devices and tabs.
 */

export function getFaviconMimeType(url: string): string | undefined {
  if (!url) return undefined;
  const clean = url.split('?')[0].toLowerCase();
  if (clean.endsWith('.svg') || url.startsWith('data:image/svg')) return 'image/svg+xml';
  if (clean.endsWith('.png') || url.startsWith('data:image/png')) return 'image/png';
  if (clean.endsWith('.jpg') || clean.endsWith('.jpeg') || url.startsWith('data:image/jpeg')) return 'image/jpeg';
  if (clean.endsWith('.webp') || url.startsWith('data:image/webp')) return 'image/webp';
  if (clean.endsWith('.ico') || url.startsWith('data:image/x-icon')) return 'image/x-icon';
  return undefined;
}

export function updateBrowserFavicon(url?: string | null) {
  if (typeof document === 'undefined') return;

  const targetUrl = url && url.trim() ? url.trim() : '/favicon.svg';
  const mimeType = getFaviconMimeType(targetUrl);

  // Remove existing favicon and shortcut icon links to bypass browser cache and force re-rendering
  const existingIcons = document.querySelectorAll<HTMLLinkElement>(
    "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']"
  );
  existingIcons.forEach((el) => el.remove());

  // Create primary favicon link
  const link = document.createElement('link');
  link.id = 'dynamic-favicon';
  link.rel = 'icon';
  if (mimeType) {
    link.type = mimeType;
  }
  link.href = targetUrl;
  document.head.appendChild(link);

  // Create apple-touch-icon for mobile Safari, iOS, and Android home-screen bookmarks
  const appleLink = document.createElement('link');
  appleLink.id = 'dynamic-apple-icon';
  appleLink.rel = 'apple-touch-icon';
  appleLink.href = targetUrl;
  document.head.appendChild(appleLink);
}
