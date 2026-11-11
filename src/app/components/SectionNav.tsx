import { useEffect, useRef, useState, type RefObject } from 'react';

type Section = { id: string; label: string; el: HTMLElement };

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/**
 * Jump-to tabs for a long case study. It finds every `section` with an `h2` directly
 * inside `container`, so new sections show up without extra setup.
 *
 * The bar scrolls away with the page like normal content until a visitor uses it.
 * After the first jump it sticks to the top of the screen, and the ✕ lets them
 * unpin it again. Every tab stays visible: two columns on phones, wrapping rows
 * on wider screens. Each tab's arrow points toward its section.
 */
export function SectionNav({ container, pageKey }: { container: RefObject<HTMLElement | null>; pageKey?: string }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const found: Section[] = [];
    root.querySelectorAll<HTMLElement>(':scope > section').forEach((el) => {
      const heading = el.querySelector(':scope > h2');
      const label = heading?.textContent?.trim();
      if (!label) return;
      el.id ||= slug(label);
      found.push({ id: el.id, label, el });
    });
    setSections(found);
    setPinned(false);
  }, [container, pageKey]);

  // Track which section is on screen, so its tab is highlighted and the arrows point the right way.
  useEffect(() => {
    if (!sections.length) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      // A section counts as current once its top reaches just under the bar.
      const line = Math.max(120, (navRef.current?.offsetHeight ?? 0) + 40);
      let current: string | null = null;
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= line) current = s.id;
      }
      // The last section can't scroll up to the bar, so the bottom of the page counts as reaching it.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = sections[sections.length - 1].id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sections]);

  if (sections.length < 2) return null;

  const activeIndex = sections.findIndex((s) => s.id === active);

  const jump = (s: Section) => {
    setPinned(true);
    // Leave room for the pinned bar, which can be several rows tall on small screens.
    const room = (navRef.current?.offsetHeight ?? 56) + 24;
    for (const section of sections) section.el.style.scrollMarginTop = `${room}px`;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Start loading the images above the section now, so they don't push it down as they appear.
    container.current?.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      if (img.compareDocumentPosition(s.el) & Node.DOCUMENT_POSITION_FOLLOWING) (img as HTMLImageElement).loading = 'eager';
    });
    s.el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });

    // Once the scroll stops, keep the section lined up while late images finish loading.
    // Stops after 4 seconds, or as soon as the visitor scrolls on their own.
    let stopped = false;
    const stop = () => {
      stopped = true;
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', stop);
    };
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('keydown', stop);
    const startedAt = performance.now();
    const realign = () => {
      if (stopped) return;
      const margin = parseFloat(s.el.style.scrollMarginTop) || 0;
      const offBy = s.el.getBoundingClientRect().top - margin;
      if (Math.abs(offBy) > 4) window.scrollBy({ top: offBy, behavior: 'auto' });
      if (performance.now() - startedAt < 4000) window.setTimeout(realign, 250);
      else stop();
    };
    let begun = false;
    const begin = () => {
      if (begun) return;
      begun = true;
      window.removeEventListener('scrollend', begin);
      realign();
    };
    window.addEventListener('scrollend', begin);
    window.setTimeout(begin, reduceMotion ? 0 : 1200);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Jump to section"
      className={`mb-8 -mx-4 sm:mx-0 ${
        pinned
          ? 'sticky top-0 z-30 border-y sm:border border-border bg-card/85 shadow-lg backdrop-blur-md sm:rounded-xl'
          : ''
      }`}
    >
      <div className="flex items-start gap-2 px-4 py-2 sm:items-center sm:px-2">
        <ul className="grid flex-1 grid-cols-2 gap-1.5 sm:flex sm:flex-wrap">
          {sections.map((s, index) => {
            const isActive = s.id === active;
            const isAbove = index < activeIndex;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    jump(s);
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex w-full items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium sm:inline-flex sm:w-auto sm:text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    isActive
                      ? 'border-brand bg-brand text-black'
                      : 'border-border bg-card/70 text-foreground hover:border-brand hover:text-brand'
                  }`}
                >
                  <span aria-hidden>{isActive ? '→' : isAbove ? '↑' : '↓'}</span>
                  <span className="truncate">{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        {pinned ? (
          <button
            type="button"
            onClick={() => setPinned(false)}
            className="shrink-0 rounded-lg px-2 py-1.5 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Unpin section tabs"
            title="Unpin"
          >
            ✕
          </button>
        ) : null}
      </div>
    </nav>
  );
}
