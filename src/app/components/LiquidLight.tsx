import { useEffect, useRef } from 'react';

/**
 * Animated purple light on a dark canvas for the home page.
 *
 * The light starts at the element marked `data-light-source` (the portrait).
 * Each element marked `data-light` gets its own blobs of light. They leave the
 * portrait shortly before that element's reveal time (`data-light-at`, ms), so
 * the light is already pooled behind it when it fades in. Each blob keeps a
 * fixed spot behind its element and moves with the page when it scrolls, lagging
 * just a little.
 */

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  phase: number;
  speed: number;
  /** Element this blob sits behind, or null to drift around the portrait. */
  target: Element | null;
  /** Where behind the target it sits, as fractions of the target's width and height. */
  offX: number;
  offY: number;
  launchAt: number;
  launched: boolean;
  alpha: number;
};

const BUFFER_SCALE = 0.4; // Draw at low resolution; the CSS blur hides it and keeps it fast.
const LEAD_MS = 1000; // How long before an element appears its light sets off from the portrait.
const SCROLL_FOLLOW = 0.88; // Share of a scroll the light moves with at once; the rest catches up softly.

function sourcePoint(el: Element | null) {
  if (!el) return { x: window.innerWidth * 0.25, y: window.innerHeight * 0.4 };
  const r = el.getBoundingClientRect();
  // Chest height, where the light glows behind the portrait.
  return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.38 };
}

export function LiquidLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const source = document.querySelector('[data-light-source]');
    const start = performance.now();
    const blobs: Blob[] = [];

    // A slow, dim wash that drifts across the whole canvas, so the dark reads as liquid.
    const wash = Array.from({ length: 5 }, (_, i) => ({
      fx: 0.05 + Math.random() * 0.06,
      fy: 0.04 + Math.random() * 0.05,
      phase: i * 1.7,
      radius: 320 + Math.random() * 180,
      hue: 260 + Math.random() * 24
    }));

    // Light that pools around the portrait from the start.
    for (let i = 0; i < 7; i++) {
      blobs.push({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 120 + Math.random() * 90,
        hue: 262 + Math.random() * 28,
        phase: Math.random(),
        speed: 0.05 + Math.random() * 0.05,
        target: null,
        offX: 0,
        offY: 0,
        launchAt: i * 120,
        launched: false,
        alpha: 0
      });
    }

    // Light that travels out to each element as it appears.
    document.querySelectorAll('[data-light]').forEach((el) => {
      const at = Number(el.getAttribute('data-light-at') ?? 0);
      const count = Number(el.getAttribute('data-light') || 2);
      for (let i = 0; i < count; i++) {
        blobs.push({
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          radius: 0,
          hue: 256 + Math.random() * 24,
          phase: i / count + Math.random() * 0.1,
          speed: (0.025 + Math.random() * 0.03) * (i % 2 ? -1 : 1),
          target: el,
          offX: (i + 0.5) / count,
          offY: count > 1 ? 0.5 + (i % 2 ? 0.18 : -0.18) : 0.5,
          launchAt: Math.max(0, at - LEAD_MS) + i * 70,
          launched: false,
          alpha: 0
        });
      }
    });

    let width = 0;
    let height = 0;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.max(1, Math.round(width * BUFFER_SCALE));
      canvas.height = Math.max(1, Math.round(height * BUFFER_SCALE));
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    let last = start;
    let lastScroll = window.scrollY;

    const draw = (now: number) => {
      const elapsed = now - start;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const seconds = elapsed / 1000;
      const src = sourcePoint(source);

      // Carry the light (and its trail) along with the page when it scrolls.
      const scrollDelta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      if (scrollDelta !== 0) {
        if (!reduceMotion) {
          ctx.globalCompositeOperation = 'copy';
          ctx.drawImage(canvas, 0, -scrollDelta * BUFFER_SCALE);
        }
        for (const b of blobs) if (b.launched) b.y -= scrollDelta * SCROLL_FOLLOW;
      }

      // Fade the last frame instead of clearing it, so moving light leaves a soft liquid trail.
      if (reduceMotion) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.globalCompositeOperation = 'lighter';

      for (const w of wash) {
        const t = reduceMotion ? 0 : seconds;
        const x = (0.5 + Math.sin(t * w.fx * 2 + w.phase) * 0.45) * width * BUFFER_SCALE;
        const y = (0.5 + Math.cos(t * w.fy * 2 + w.phase * 1.3) * 0.45) * height * BUFFER_SCALE;
        const rad = w.radius * BUFFER_SCALE;
        const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
        g.addColorStop(0, `hsla(${w.hue}, 70%, 45%, 0.035)`);
        g.addColorStop(1, `hsla(${w.hue}, 70%, 30%, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
      }

      for (const b of blobs) {
        if (!b.launched) {
          if (elapsed < b.launchAt && !reduceMotion) continue;
          b.launched = true;
          b.x = src.x;
          b.y = src.y;
        }

        let tx: number;
        let ty: number;
        let size: number;
        if (b.target) {
          // A fixed spot behind the element, drifting only a few pixels.
          const r = b.target.getBoundingClientRect();
          const drift = reduceMotion ? 0 : seconds * 0.35 + b.phase * 6;
          tx = r.left + r.width * b.offX + Math.sin(drift) * Math.min(18, r.width * 0.05);
          ty = r.top + r.height * b.offY + Math.cos(drift * 1.2) * Math.min(12, r.height * 0.1);
          const count = Number(b.target.getAttribute('data-light') || 2);
          size = Math.min(240, Math.max(70, Math.max(r.width / count, r.height) * 0.75));
        } else {
          // Slow orbit behind the portrait, like light pooling in liquid.
          const angle = (b.phase + seconds * b.speed) * Math.PI * 2;
          tx = src.x + Math.cos(angle) * 90 + Math.sin(seconds * 0.7 + b.phase * 9) * 30;
          ty = src.y + Math.sin(angle * 1.3) * 160;
          size = b.radius;
        }

        if (reduceMotion) {
          b.x = tx;
          b.y = ty;
          b.alpha = 0.5;
        } else {
          // Spring toward the target, with a little wobble so the path looks fluid.
          const wobble = b.target ? 6 : 26;
          const ax = (tx + Math.sin(seconds * 1.3 + b.phase * 11) * wobble - b.x) * 9 - b.vx * 5;
          const ay = (ty + Math.cos(seconds * 1.1 + b.phase * 7) * wobble - b.y) * 9 - b.vy * 5;
          b.vx += ax * dt;
          b.vy += ay * dt;
          b.x += b.vx * dt;
          b.y += b.vy * dt;
          const breathe = (b.target ? 0.075 : 0.1) + Math.sin(seconds * 0.9 + b.phase * 6) * 0.02;
          b.alpha += (breathe - b.alpha) * Math.min(1, dt * 2.5);
        }
        b.radius = b.target ? b.radius + (size - b.radius) * Math.min(1, dt * 3) : size;
        if (reduceMotion) b.radius = size;

        const x = b.x * BUFFER_SCALE;
        const y = b.y * BUFFER_SCALE;
        const rad = Math.max(1, b.radius * BUFFER_SCALE);
        if (y + rad < 0 || y - rad > canvas.height) continue;
        const speed = Math.hypot(b.vx, b.vy);
        const stretch = 1 + Math.min(1.6, speed / 500);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.atan2(b.vy, b.vx));
        ctx.scale(stretch, 1 / Math.sqrt(stretch));
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rad);
        g.addColorStop(0, `hsla(${b.hue}, 88%, 64%, ${b.alpha})`);
        g.addColorStop(0.45, `hsla(${b.hue + 6}, 85%, 50%, ${b.alpha * 0.45})`);
        g.addColorStop(1, `hsla(${b.hue + 12}, 85%, 38%, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(-rad, -rad, rad * 2, rad * 2);
        ctx.restore();
      }

      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#07050c]" aria-hidden>
      <canvas ref={canvasRef} className="liquid-light absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
