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
 * After the first jump it sticks to the top of the screen as a single scrollable
 * row, and the ✕ lets them unpin it again. Each tab's arrow points toward its section.
 */
export function SectionNav({ container, pageKey }: { container: RefObject<HTMLElement | null>; pageKey?: string }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const found: Section[] = [];
    root.querySelectorAll<HTMLElement>(':scope > section').forEach((el) => {
      const heading = el.querySelector(':scope > h2');
      const label = heading?.textContent?.trim();
      if (!label) return;
      el.id ||= slug(label);
      // Leaves room for the pinned bar when jumping to a section.
      el.style.scrollMarginTop = '5.5rem';
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
      let current: string | null = null;
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= 120) current = s.id;
      }
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

  // On narrow screens, keep the current tab visible in the pinned row.
  useEffect(() => {
    const list = listRef.current;
    const tab = list?.querySelector<HTMLElement>('[aria-current]');
    if (!list || !tab || !pinned) return;
    const left = tab.offsetLeft - list.offsetLeft;
    if (left < list.scrollLeft || left + tab.offsetWidth > list.scrollLeft + list.clientWidth) {
      list.scrollTo({ left: left - 16, behavior: 'smooth' });
    }
  }, [active, pinned]);

  if (sections.length < 2) return null;

  const activeIndex = sections.findIndex((s) => s.id === active);

  const jump = (s: Section) => {
    setPinned(true);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    s.el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    // Images that load during the scroll can push the section down, so settle on it once the scroll stops.
    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      window.removeEventListener('scrollend', settle);
      s.el.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    window.addEventListener('scrollend', settle);
    window.setTimeout(settle, 1500);
  };

  return (
    <nav
      aria-label="Jump to section"
      className={`mb-8 -mx-4 sm:mx-0 ${
        pinned
          ? 'sticky top-0 z-30 border-y sm:border border-border bg-card/85 shadow-lg backdrop-blur-md sm:rounded-xl'
          : ''
      }`}
    >
      <div className="flex items-center gap-2 px-4 py-2 sm:px-2">
        <ul
          ref={listRef}
          className={`flex flex-1 gap-1.5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] ${
            pinned ? '' : 'sm:flex-wrap sm:overflow-visible'
          }`}
        >
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
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    isActive
                      ? 'border-brand bg-brand text-black'
                      : 'border-border bg-card/70 text-foreground hover:border-brand hover:text-brand'
                  }`}
                >
                  <span aria-hidden>{isActive ? '→' : isAbove ? '↑' : '↓'}</span>
                  {s.label}
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
