import { useParams, Link } from 'react-router';
import hubsubLogo from '../../imports/Hubsub_logo_full.webp';

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
        'Guided subscription plan setup (pricing, cadence, limits)',
        'Customer onboarding and subscription checkout flow',
        'Subscriber management with status and billing history',
        'Plan changes (upgrade/downgrade) and proration messaging',
        'Failed payment handling and cancellation/pause flows'
      ],
      link: '#'
    }
  },
  'saas-dashboard': {
    id: 2,
    title: 'SaaS Dashboard Design',
    description: 'Intuitive dashboard interface for project management SaaS, focusing on data visualization and team collaboration',
    tags: ['UI Design', 'Prototyping', 'Design Systems'],
    color: 'from-amber-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1776278806688-64ef6a7e2cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NzA2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    story: {
      challenge: 'A growing B2B SaaS company needed a dashboard redesign to handle complex project data while remaining accessible to non-technical users. The existing interface overwhelmed new users.',
      approach: 'I facilitated workshops with stakeholders and end users to prioritize features. Created a modular design system that could scale with the product roadmap while maintaining consistency.',
      impact: 'User onboarding time reduced from 2 weeks to 3 days. Feature adoption increased by 85%, and the design system enabled the team to ship new features 3x faster.'
    },
    development: {
      research: 'Analyzed user behavior through heatmaps and session recordings. Interviewed 30+ users across different company sizes to understand varied use cases and pain points.',
      wireframes: 'Created a comprehensive set of wireframes exploring different data visualization approaches. Tested information density and layout options with focus groups.',
      iterations: 'Built an interactive prototype in Figma with realistic data. Conducted A/B testing on key layouts and refined based on engagement metrics and qualitative feedback.'
    },
    prototype: {
      description: 'A responsive dashboard with customizable widgets, real-time collaboration features, and advanced filtering capabilities.',
      features: [
        'Drag-and-drop customizable dashboard widgets',
        'Real-time team activity feed',
        'Advanced filtering and saved views',
        'Interactive charts with drill-down capabilities',
        'Dark mode with automatic scheduling'
      ],
      link: '#'
    }
  },
  'elearning-platform': {
    id: 3,
    title: 'E-Learning Platform',
    description: 'End-to-end design of an educational platform with focus on student engagement and course discovery',
    tags: ['UX Research', 'Wireframing', 'Usability Testing'],
    color: 'from-red-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzc3MDY2NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    story: {
      challenge: 'An educational startup wanted to create an online learning platform that would increase course completion rates and make learning feel less isolating for remote students.',
      approach: 'I conducted ethnographic research with students and educators to understand the emotional aspects of online learning. Designed features that foster community and maintain motivation.',
      impact: 'The platform achieved a 78% course completion rate (vs. industry average of 15%) and received praise for its engaging, community-focused approach to online education.'
    },
    development: {
      research: 'Shadowed 20 students during their online learning sessions and interviewed 15 instructors. Identified key moments where students lost motivation or felt disconnected.',
      wireframes: 'Sketched multiple concepts for course navigation, progress tracking, and peer interaction. Created paper prototypes for rapid testing with students.',
      iterations: 'Developed high-fidelity prototypes with gamification elements, social features, and personalized learning paths. Conducted 5 rounds of usability testing to optimize engagement.'
    },
    prototype: {
      description: 'An engaging learning platform with progress gamification, peer study groups, and adaptive learning paths.',
      features: [
        'Personalized learning dashboard with progress tracking',
        'Study group formation and peer collaboration tools',
        'Achievement badges and learning streaks',
        'Interactive video lessons with note-taking',
        'AI-powered course recommendations'
      ],
      link: '#'
    }
  }
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;
  const isLogoHero = projectId === 'Hubsub';

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

          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-6">
            <span className="text-gray-400">Interactive prototype preview</span>
          </div>

          <div className="flex gap-4">
            <a
              href={project.prototype.link}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              View Interactive Prototype
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Download Case Study PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
