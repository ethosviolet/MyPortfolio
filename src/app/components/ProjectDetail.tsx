import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import hubsubLogo from '../../imports/Hubsub_logo_full.webp';
import hubsubDigitalWireframes from '../../imports/hubsub_digital_wireframes.png';
import furwoodCover from '../../imports/furwood_cover_test.png';
import hotSauceImage from '../../imports/hot_sauce_customized.png';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
  story: {
    challenge: string;
    approach: string;
    impact: string;
  };
  development: {
    research: string;
    wireframes: string;
    iterations: string;
  };
  prototype: {
    description: string;
    features: string[];
    link: string;
  };
}

const projectsData: Record<string, ProjectData> = {
  Hubsub: {
    id: 1,
    title: 'Conceptualize and Refine a Small Business Subscription Platform',
    description:
      'Concept and UX work for a subscription platform that helps small businesses launch, manage, and grow recurring revenue offerings.',
    tags: ['Product Design', 'UX Research', 'Figma'],
    color: 'from-brand-light to-brand',
    image: hubsubLogo,
    story: {
      challenge:
        'Small businesses want a way to connect with their most loyal customers that increases interaction with the business via subscription model. We aim to make all of the associated services and business side data easily accessible for both customers and business owners, while adding other features that make the app more engaging for users who want to support their favorite businesses.',
      approach:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      impact:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    development: {
      research:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      wireframes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iterations:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
    },
    prototype: {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Excepteur sint occaecat cupidatat non proident.'
      ],
      link: 'https://www.figma.com/proto/U1grg4qK5GhwzIWzysZT9M/Hub-Sub-Design--Hi-Fi-?node-id=0-1&t=cDJc4XMAo4QKh95W-1'
    }
  },
  'furwood-campout': {
    id: 2,
    title: 'Launch a Community Camping Event Website',
    description:
      'End-to-end website design for a community camping event, making registration, schedules, and campsite information easy to access on any device.',
    tags: ['Event UX', 'Information Architecture', 'Figma'],
    color: 'from-violet-400 to-brand',
    image: furwoodCover,
    story: {
      challenge:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      approach:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      impact:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    development: {
      research:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      wireframes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iterations:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
    },
    prototype: {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Excepteur sint occaecat cupidatat non proident.'
      ],
      link: '#'
    }
  },
  'custom-caliente': {
    id: 3,
    title: 'Designing an Interactive E-Commerce Platform for Hot Sauce Sales',
    description: 'Interactive e-commerce experience for discovering, comparing, and purchasing craft hot sauces with confidence.',
    tags: ['E-commerce UX', 'Figma', 'Conversion Design'],
    color: 'from-brand to-brand-deep',
    image: hotSauceImage,
    story: {
      challenge:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      approach:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      impact:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    development: {
      research:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      wireframes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iterations:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
    },
    prototype: {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Excepteur sint occaecat cupidatat non proident.'
      ],
      link:
        'https://www.figma.com/proto/n0afnUokY6boq5y7giF6d6/Custom-Caliente-Wireframes--Mockups?node-id=232-19&t=dZtYkok3wvROlGDR-1'
    }
  }
};

interface HubsubWireframeSlide {
  id: string;
  src: string;
  label: string;
  alt: string;
}

/** Import paper wireframe images into `src/imports` and push more entries here. */
const HUBSUB_WIREFRAME_SLIDES: HubsubWireframeSlide[] = [
  {
    id: 'digital',
    src: hubsubDigitalWireframes,
    label: 'Digital wireframe',
    alt:
      'HubSub mobile app digital wireframes: login, feed, subscriptions, merch, profile, perks, cart, checkout, and events'
  }
];

function HubsubWireframeCarousel() {
  const slides = HUBSUB_WIREFRAME_SLIDES;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const slide = slides[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + count) % count);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
        return;
      }
      if (count <= 1) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxOpen, count]);

  return (
    <>
      <div
        className="rounded-xl border border-border bg-gradient-to-b from-muted to-card/90 shadow-sm p-4 sm:p-6"
        role="region"
        aria-roledescription="carousel"
        aria-label="HubSub wireframes"
      >
        <div className="flex items-center justify-center gap-1 sm:gap-3">
          {count > 1 ? (
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Previous wireframe"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-expanded={lightboxOpen}
            aria-controls="hubsub-wireframe-lightbox"
            className="group mx-auto flex max-w-full flex-col items-center gap-2 rounded-xl px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            <div className="rounded-xl border-2 border-border/80 bg-card p-2 shadow-md ring-1 ring-white/[0.08] sm:p-3">
              <div className="flex min-h-[88px] items-center justify-center rounded-lg bg-muted px-4 py-3 sm:min-h-[100px] sm:px-5 sm:py-4">
                <img
                  src={slide.src}
                  alt=""
                  className="max-h-24 w-auto max-w-[min(42vw,9.5rem)] object-contain opacity-95 transition-opacity group-hover:opacity-100 sm:max-h-28 sm:max-w-[10.5rem]"
                />
              </div>
            </div>
            <span className="text-center text-sm font-medium text-foreground">{slide.label}</span>
            <span className="text-center text-xs text-muted-foreground">Click frame to view full screen</span>
          </button>

          {count > 1 ? (
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Next wireframe"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : null}
        </div>

        {count > 1 ? (
          <div className="mt-4 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Wireframe slides">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={
                  i === index
                    ? 'h-2.5 w-2.5 rounded-full bg-brand shadow-sm'
                    : 'h-2.5 w-2.5 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60'
                }
                aria-label={`Show: ${s.label}`}
              />
            ))}
          </div>
        ) : null}
      </div>

      {lightboxOpen ? (
        <div
          id="hubsub-wireframe-lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${slide.label} full screen`}
        >
          <div className="relative flex h-full w-full max-h-[100dvh] max-w-[100vw] items-center justify-center">
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute left-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-card/95 text-foreground shadow-md hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Close full screen wireframe"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-foreground shadow-md hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:left-3"
                  aria-label="Previous wireframe"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-foreground shadow-md hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:right-3"
                  aria-label="Next wireframe"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            ) : null}

            <img src={slide.src} alt={slide.alt} className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;
  /** Hubsub logo: full mark on white. Custom Caliente: text must stay visible; red frame fills the card. */
  const isHubsubHero = projectId === 'Hubsub';
  const hasPrototypeLink = project?.prototype.link && project.prototype.link !== '#';
  const figmaEmbedUrl =
    hasPrototypeLink && project?.prototype.link.includes('figma.com')
      ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.prototype.link)}`
      : null;

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
        <Link to="/projects" className="text-brand hover:text-brand-hover">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/projects" className="text-brand hover:text-brand-hover mb-6 inline-block">
        ← Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="mb-12">
        <div className={`h-2 bg-gradient-to-r ${project.color} rounded-full mb-6`} />
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-card text-muted-foreground rounded-lg shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {projectId === 'custom-caliente' ? (
          <div
            className={`overflow-hidden rounded-xl shadow-lg ring-1 ring-white/[0.1] bg-gradient-to-r ${project.color}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto block w-full max-h-[min(68vh,48rem)] object-contain p-1.5 sm:p-2.5"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className={
              isHubsubHero
                ? 'w-full max-h-[min(70vh,52rem)] object-contain rounded-xl shadow-lg bg-card p-6 sm:p-10 mx-auto'
                : 'w-full h-96 object-cover rounded-xl shadow-lg'
            }
          />
        )}
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">The Story</h2>
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-3">The Challenge</h3>
            <p className="text-muted-foreground leading-relaxed">{project.story.challenge}</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-3">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed">{project.story.approach}</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-3">The Impact</h3>
            <p className="text-muted-foreground leading-relaxed">{project.story.impact}</p>
          </div>
        </div>
      </section>

      {/* Design Development Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Design Development</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Research & Discovery</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{project.development.research}</p>
            <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Research artifacts and user insights</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Wireframes & Concepts</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{project.development.wireframes}</p>
            {projectId === 'Hubsub' ? (
              <HubsubWireframeCarousel />
            ) : (
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Wireframe sketches and concepts</span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Testing & Iteration</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{project.development.iterations}</p>
            <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Iteration progression and testing results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Finished Prototype Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Finished Prototype</h2>
        <div className="bg-card p-8 rounded-xl shadow-sm">
          <p className="text-muted-foreground leading-relaxed mb-6">{project.prototype.description}</p>

          <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
          <ul className="space-y-3 mb-8">
            {project.prototype.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brand mr-3">✓</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {figmaEmbedUrl ? (
            <div className="bg-muted h-96 rounded-lg overflow-hidden mb-6 border border-border">
              <iframe
                src={figmaEmbedUrl}
                title={`${project.title} prototype preview`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ) : hasPrototypeLink ? (
            <a
              href={project.prototype.link}
              target="_blank"
              rel="noreferrer"
              className="bg-muted h-96 rounded-lg flex items-center justify-center mb-6 hover:bg-muted/80 transition-colors"
            >
              <span className="text-muted-foreground">Interactive prototype preview (click to open)</span>
            </a>
          ) : (
            <div className="bg-muted h-96 rounded-lg flex items-center justify-center mb-6">
              <span className="text-muted-foreground">Interactive prototype preview</span>
            </div>
          )}

          <div className="flex gap-4">
            <a
              href={project.prototype.link}
              className="px-6 py-3 bg-brand-deep text-white rounded-lg hover:bg-brand-hover transition-colors"
            >
              View Interactive Prototype
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
