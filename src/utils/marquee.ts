export interface MarqueeController {
  destroy: () => void;
  recalc: () => void;
}

export interface MarqueeOptions {
  direction?: 'left' | 'right';
  cycleSeconds?: number;
  onDragStateChange?: (isDragging: boolean) => void;
  onDragEnd?: () => void;
}

/**
 * Initializes an optimized, hardware-accelerated continuous auto-scrolling marquee
 * with interactive touch/drag sliding and viewport-aware power management.
 * 
 * Performance & Complexity Optimizations:
 * - O(0) CPU when off-screen: IntersectionObserver pauses requestAnimationFrame loop when not visible
 * - O(1) mathematical modulo wrap instead of unbounded while loops
 * - Passive event listeners to prevent compositor thread blockage
 * - Hardware-accelerated GPU translation via translate3d
 */
export function initInteractiveMarquee(
  track: HTMLElement,
  options: MarqueeOptions = {}
): MarqueeController {
  const container = track.parentElement;
  if (!container) {
    return { destroy: () => {}, recalc: () => {} };
  }

  const direction = options.direction ?? 'left';
  const cycleSeconds = options.cycleSeconds ?? 34;

  let halfWidth = track.scrollWidth / 2;
  const updateHalfWidth = () => {
    const sw = track.scrollWidth;
    if (sw > 0) {
      halfWidth = sw / 2;
    }
  };
  updateHalfWidth();

  // Read current matrix transform for seamless takeover from CSS
  let offset = 0;
  const computedStyle = window.getComputedStyle(track);
  if (computedStyle.transform && computedStyle.transform !== 'none') {
    try {
      const matrix = new DOMMatrixReadOnly(computedStyle.transform);
      offset = matrix.m41;
    } catch (_) {
      offset = 0;
    }
  }

  // Remove CSS animation to give JS transform full control
  track.classList.remove('animate-marquee-left', 'animate-marquee-right');
  track.style.animation = 'none';

  // O(1) modulo wrap function
  const wrap = (val: number) => {
    if (halfWidth <= 0) return 0;
    val = val % halfWidth;
    if (val > 0) val -= halfWidth;
    return val;
  };

  offset = wrap(offset);
  track.style.transform = `translate3d(${offset}px, 0, 0)`;

  const getBaseSpeed = () => {
    const pxPerSec = (halfWidth > 0 ? halfWidth : 1200) / cycleSeconds;
    return direction === 'left' ? -pxPerSec : pxPerSec;
  };

  let isPointerDown = false;
  let isDragging = false;
  let hasDirectionLock = false;
  let startX = 0;
  let startY = 0;
  let lastX = 0;
  let velocity = 0;
  let coastVelocity = 0;
  let isCoasting = false;
  let isHovered = false;
  let isVisible = true;
  let lastFrameTime = performance.now();
  let rafId = 0;
  let isRunning = false;

  const step = (now: number) => {
    if (!isRunning) return;

    const dt = Math.min((now - lastFrameTime) / 1000, 0.1);
    lastFrameTime = now;

    if (!isPointerDown) {
      if (isCoasting) {
        offset += coastVelocity * dt;
        offset = wrap(offset);
        track.style.transform = `translate3d(${offset}px, 0, 0)`;

        // Decay velocity with exponential friction
        coastVelocity *= Math.pow(0.92, dt * 60);

        const baseSpd = getBaseSpeed();
        if (Math.abs(coastVelocity) <= Math.abs(baseSpd)) {
          isCoasting = false;
        }
      } else if (!isHovered) {
        const baseSpd = getBaseSpeed();
        offset += baseSpd * dt;
        offset = wrap(offset);
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
    }

    if (isVisible) {
      rafId = requestAnimationFrame(step);
    } else {
      isRunning = false;
    }
  };

  const startLoop = () => {
    if (!isRunning && isVisible) {
      isRunning = true;
      lastFrameTime = performance.now();
      rafId = requestAnimationFrame(step);
    }
  };

  const stopLoop = () => {
    if (isRunning) {
      cancelAnimationFrame(rafId);
      isRunning = false;
    }
  };

  // Viewport Intersection Observer: Halts animation loop when scrolled offscreen (O(0) CPU)
  let io: IntersectionObserver | null = null;
  if (typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            startLoop();
          } else {
            stopLoop();
          }
        }
      },
      { rootMargin: '100px 0px' }
    );
    io.observe(container);
  } else {
    startLoop();
  }

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    isPointerDown = true;
    isDragging = false;
    hasDirectionLock = false;
    isCoasting = false;
    coastVelocity = 0;
    startX = e.clientX;
    startY = e.clientY;
    lastX = e.clientX;
    velocity = 0;
    lastFrameTime = performance.now();
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!isPointerDown) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (!hasDirectionLock) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 7) {
        isPointerDown = false;
        isDragging = false;
        return;
      }
      if (Math.abs(dx) > 7) {
        hasDirectionLock = true;
        isDragging = true;
        lastX = e.clientX;
        container.style.cursor = 'grabbing';
        options.onDragStateChange?.(true);
        try {
          container.setPointerCapture(e.pointerId);
        } catch (_) {}
      }
    }

    if (isDragging) {
      const now = performance.now();
      const dt = (now - lastFrameTime) / 1000;
      const moveDelta = e.clientX - lastX;

      if (dt > 0.004) {
        const instVel = moveDelta / dt;
        velocity = velocity * 0.35 + instVel * 0.65;
        lastFrameTime = now;
      }

      lastX = e.clientX;
      offset = wrap(offset + moveDelta);
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    }
  };

  const onPointerUp = (e: PointerEvent) => {
    if (!isPointerDown && !isDragging) return;
    isPointerDown = false;
    container.style.cursor = '';

    try {
      if (container.hasPointerCapture(e.pointerId)) {
        container.releasePointerCapture(e.pointerId);
      }
    } catch (_) {}

    if (isDragging) {
      options.onDragEnd?.();
      options.onDragStateChange?.(false);
      if (Math.abs(velocity) > 60) {
        isCoasting = true;
        coastVelocity = Math.max(Math.min(velocity, 2500), -2500);
      }
    }

    isDragging = false;
    hasDirectionLock = false;
  };

  const onMouseEnter = (e: MouseEvent) => {
    if ((e as any).pointerType !== 'touch') {
      isHovered = true;
    }
  };

  const onMouseLeave = () => {
    isHovered = false;
  };

  const onWheel = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2) {
      offset = wrap(offset - e.deltaX);
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      isCoasting = false;
    }
  };

  container.addEventListener('pointerdown', onPointerDown, { passive: true });
  container.addEventListener('pointermove', onPointerMove, { passive: true });
  container.addEventListener('pointerup', onPointerUp, { passive: true });
  container.addEventListener('pointercancel', onPointerUp, { passive: true });
  container.addEventListener('mouseenter', onMouseEnter, { passive: true });
  container.addEventListener('mouseleave', onMouseLeave, { passive: true });
  container.addEventListener('wheel', onWheel, { passive: true });

  let ro: ResizeObserver | null = null;
  if (typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(() => {
      updateHalfWidth();
    });
    ro.observe(track);
  }

  return {
    destroy: () => {
      stopLoop();
      if (io) io.disconnect();
      if (ro) ro.disconnect();
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointercancel', onPointerUp);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('wheel', onWheel);
    },
    recalc: () => {
      updateHalfWidth();
    }
  };
}
