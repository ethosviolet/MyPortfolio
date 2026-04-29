import { useParams, Link } from 'react-router';
import hubsubLogo from '../../imports/Hubsub_logo_full.webp';
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
    color: 'from-orange-500 to-red-500',
    image: hubsubLogo,
    story: {
      challenge:
        'Small businesses want predictable recurring revenue, but setting up subscriptions is often fragmented—pricing, packaging, customer management, payments, and cancellations are spread across tools.',
      approach:
        'I explored the end-to-end subscription lifecycle, mapped key user journeys, and iterated on flows for creating plans, onboarding customers, and managing billing and account changes. The focus was clarity, trust, and reducing setup time.',
      impact:
        'The concept delivers a streamlined, business-friendly experience that makes subscription setup approachable and management workflows easy to find and complete.'
    },
    development: {
      research:
        'Defined target users (owners/operators), key JTBD, and the subscription lifecycle. Audited competitor patterns for plan creation, customer management, and billing transparency.',
      wireframes:
        'Created low-fidelity layouts for plan setup, checkout/onboarding, and a unified subscriber management area. Prioritized a guided setup with clear defaults.',
      iterations:
        'Iterated on information architecture, terminology, and core management flows (pause/cancel, upgrades, failed payment handling) to reduce friction and support edge cases.'
    },
    prototype: {
      description:
        'A clickable prototype demonstrating subscription plan creation, customer onboarding, and day-to-day management for a small business subscription offering.',
      features: [
        'Guided subscription setup with clear pricing and billing cadence',
        'Business-owner onboarding flow with account and plan activation',
        'Subscriber management dashboard with status and payment history',
        'Self-serve plan changes with transparent proration messaging',
        'Dunning and failed-payment recovery with pause/cancel controls'
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
    color: 'from-amber-500 to-orange-500',
    image: furwoodCover,
    story: {
      challenge:
        'Community members needed one clear place to learn about the camping event, register, review what to bring, and find schedules. Existing information was scattered across social posts and PDFs.',
      approach:
        'I mapped attendee journeys for first-time and returning campers, then designed a mobile-first event site centered on registration, activity schedules, campsite details, and FAQ content.',
      impact:
        'The redesigned experience reduced registration friction, improved schedule visibility, and made event logistics easier for both attendees and organizers.'
    },
    development: {
      research:
        'Interviewed organizers and attendees to identify top tasks before and during the event. Prioritized fast access to registration, schedule, packing guidance, and location details.',
      wireframes:
        'Produced low- and mid-fidelity wireframes for homepage, registration, schedule, and campsite information pages, with clear navigation for mobile and desktop users.',
      iterations:
        'Refined copy hierarchy, call-to-action placement, and schedule browsing patterns through usability walkthroughs to improve clarity and reduce missed event information.'
    },
    prototype: {
      description:
        'A responsive event website prototype featuring streamlined registration, activity schedules, campsite logistics, and organizer communication touchpoints.',
      features: [
        'Mobile-first event registration flow',
        'Day-by-day activity schedule with time and location details',
        'Campsite, parking, and packing information hub',
        'FAQ and contact pathways for attendee support',
        'Organizer update section for important announcements'
      ],
      link: '#'
    }
  },
  'elearning-platform': {
    id: 3,
    title: 'Designing an Interactive E-Commerce Platform for Hot Sauce Sales',
    description: 'Interactive e-commerce experience for discovering, comparing, and purchasing craft hot sauces with confidence.',
    tags: ['E-commerce UX', 'Figma', 'Conversion Design'],
    color: 'from-red-500 to-rose-500',
    image: hotSauceImage,
    story: {
      challenge:
        'Hot sauce shoppers needed a faster way to find flavors that match their heat tolerance and food preferences. Product details were inconsistent, and users struggled to compare options before buying.',
      approach:
        'I designed a product discovery flow with heat-level filtering, flavor profile tags, and richer product pages so customers could browse confidently and build carts without second-guessing.',
      impact:
        'The concept improves product findability and purchase confidence by making browsing, comparison, and checkout clearer for first-time and repeat buyers.'
    },
    development: {
      research:
        'Reviewed competitor spice shops and interviewed target users about spice tolerance, flavor expectations, and trust signals needed before trying unfamiliar sauces.',
      wireframes:
        'Created wireframes for landing, category browsing, product detail, and cart flows with a focus on quick filtering, clear product attributes, and strong visual hierarchy.',
      iterations:
        'Refined heat indicators, tasting-note layout, and mobile checkout steps based on usability feedback to reduce friction and improve conversion intent.'
    },
    prototype: {
      description:
        'A responsive prototype for a hot sauce storefront with guided discovery, comparison-friendly product pages, and streamlined checkout.',
      features: [
        'Heat-level filtering from mild to extreme',
        'Flavor profile tags and food-pairing suggestions',
        'Product comparison support through key attribute blocks',
        'Cart and checkout flow optimized for mobile',
        'Trust-building details like reviews and ingredient transparency'
      ],
      link: '#'
    }
  }
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;
  const isLogoHero = projectId === 'Hubsub';
  const hasPrototypeLink = project?.prototype.link && project.prototype.link !== '#';
  const figmaEmbedUrl =
    hasPrototypeLink && project?.prototype.link.includes('figma.com')
      ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.prototype.link)}`
      : null;

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Project not found</h1>
        <Link to="/projects" className="text-orange-600 hover:text-orange-700">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/projects" className="text-orange-600 hover:text-orange-700 mb-6 inline-block">
        ← Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="mb-12">
        <div className={`h-2 bg-gradient-to-r ${project.color} rounded-full mb-6`} />
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <img
          src={project.image}
          alt={project.title}
          className={
            isLogoHero
              ? 'w-full max-h-[70vh] object-contain rounded-xl shadow-lg bg-white p-8 mx-auto'
              : 'w-full h-96 object-cover rounded-xl shadow-lg'
          }
        />
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">The Story</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
            <p className="text-gray-600 leading-relaxed">{project.story.challenge}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">My Approach</h3>
            <p className="text-gray-600 leading-relaxed">{project.story.approach}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">The Impact</h3>
            <p className="text-gray-600 leading-relaxed">{project.story.impact}</p>
          </div>
        </div>
      </section>

      {/* Design Development Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Development</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Discovery</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{project.development.research}</p>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Research artifacts and user insights</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Wireframes & Concepts</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{project.development.wireframes}</p>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Wireframe sketches and concepts</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing & Iteration</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{project.development.iterations}</p>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Iteration progression and testing results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Finished Prototype Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Finished Prototype</h2>
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <p className="text-gray-600 leading-relaxed mb-6">{project.prototype.description}</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <ul className="space-y-3 mb-8">
            {project.prototype.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 mr-3">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          {figmaEmbedUrl ? (
            <div className="bg-gray-100 h-96 rounded-lg overflow-hidden mb-6 border border-gray-200">
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
              className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-6 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-500">Interactive prototype preview (click to open)</span>
            </a>
          ) : (
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-6">
              <span className="text-gray-400">Interactive prototype preview</span>
            </div>
          )}

          <div className="flex gap-4">
            <a
              href={project.prototype.link}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              View Interactive Prototype
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
