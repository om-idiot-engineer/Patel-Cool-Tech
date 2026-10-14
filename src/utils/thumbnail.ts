/**
 * Utility to extract a high-quality thumbnail image frame from any video.
 * Captures a representative frame (avoiding initial black frame) using HTML5 Canvas
 * and exports it as a lightweight JPEG Blob and dataURL.
 */

export interface VideoThumbnailResult {
  blob: Blob;
  dataUrl: string;
  width: number;
  height: number;
}

/**
 * Checks if a given URL or filename is a video format.
 */
export function isVideoUrl(url?: string | null): boolean {
  if (!url) return false;
  return /\.(mp4|webm|mov|m4v|ogg)$/i.test(url.split('?')[0]);
}

/**
 * Extracts a safe image thumbnail URL for any work item.
 * Guarantees that the returned URL is an image, never a raw video stream.
 */
export function getSafeThumbnailUrl(
  thumbnailUrl?: string | null,
  imageUrl?: string | null
): string | null {
  if (thumbnailUrl && !isVideoUrl(thumbnailUrl)) {
    return thumbnailUrl;
  }
  if (imageUrl && !isVideoUrl(imageUrl)) {
    return imageUrl;
  }
  return null;
}

/**
 * Captures a video frame from a File object or video URL.
 * Automatically seeks past 0s to avoid pure black opening frames.
 */
export function captureVideoThumbnail(
  fileOrUrl: File | string,
  preferredTime = 0.5
): Promise<VideoThumbnailResult> {
  return new Promise((resolve, reject) => {
    // Only run in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return reject(new Error('Video thumbnail extraction is only supported in browser environments.'));
    }

    const video = document.createElement('video');
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = 'anonymous';

    let isResolved = false;
    let objectUrl = '';

    if (typeof fileOrUrl === 'string') {
      video.src = fileOrUrl;
    } else {
      objectUrl = URL.createObjectURL(fileOrUrl);
      video.src = objectUrl;
    }

    // Safety timeout in case video codec or network hangs
    const timeoutId = setTimeout(() => {
      if (!isResolved) {
        cleanup();
        reject(new Error('Thumbnail extraction timed out after 12 seconds.'));
      }
    }, 12000);

    function cleanup() {
      clearTimeout(timeoutId);
      if (objectUrl) {
        try {
          URL.revokeObjectURL(objectUrl);
        } catch (_) {}
      }
      video.removeAttribute('src');
      try {
        video.load();
      } catch (_) {}
      video.remove();
    }

    video.onloadedmetadata = () => {
      let targetTime = preferredTime;
      if (video.duration && Number.isFinite(video.duration) && video.duration > 0) {
        // Sample at 15% of duration or preferredTime, bounded between 0.1s and 2.0s
        targetTime = Math.min(Math.max(0.1, video.duration * 0.15), 2.0);
      }
      try {
        video.currentTime = targetTime;
      } catch (err) {
        // Some browsers might throw if not yet seekable
        setTimeout(() => {
          try { video.currentTime = targetTime; } catch (_) {}
        }, 100);
      }
    };

    video.onseeked = () => {
      if (isResolved) return;
      isResolved = true;

      try {
        const origW = video.videoWidth || 640;
        const origH = video.videoHeight || 360;

        // Downscale to max 960px width/height for fast loading (< 80KB)
        const maxDim = 960;
        let targetW = origW;
        let targetH = origH;
        if (origW > maxDim || origH > maxDim) {
          if (origW > origH) {
            targetH = Math.round((origH * maxDim) / origW);
            targetW = maxDim;
          } else {
            targetW = Math.round((origW * maxDim) / origH);
            targetH = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Could not get 2D canvas context');

        ctx.drawImage(video, 0, 0, targetW, targetH);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        canvas.toBlob(
          (blob) => {
            cleanup();
            if (blob) {
              resolve({
                blob,
                dataUrl,
                width: targetW,
                height: targetH,
              });
            } else {
              reject(new Error('Failed to create JPEG blob from video canvas.'));
            }
          },
          'image/jpeg',
          0.85
        );
      } catch (err) {
        cleanup();
        reject(err);
      }
    };

    video.onerror = () => {
      cleanup();
      reject(new Error('Video could not be loaded for thumbnail generation.'));
    };
  });
}
