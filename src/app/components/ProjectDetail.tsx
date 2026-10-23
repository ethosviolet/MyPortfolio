import { useParams, Link } from 'react-router';
import hubsubLogo from '../../imports/Hubsub_logo_full.webp';
import furwoodCover from '../../imports/furwood_cover_test.png';
import hotSauceImage from '../../imports/hot_sauce_customized.png';
import pomBeforeCart from '../../imports/hubsub_pom_before_cart.png';
import pomBeforeTallRow from '../../imports/hubsub_pom_before_tall_row.png';
import pomAfterVisitTicket from '../../imports/hubsub_pom_after_visit_ticket.png';
import pomRedeemFlash from '../../imports/hubsub_pom_redeem_flash.png';
import pomHistory from '../../imports/hubsub_pom_history.png';
import pomOpenTabs from '../../imports/hubsub_pom_open_tabs.png';

interface Screen {
  src: string;
  alt: string;
  caption: string;
}

interface BeforeAfter {
  title: string;
  problem: string;
  change: string;
  before: Screen;
  after: Screen;
}

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
    /** Leave out to hide the Wireframes & Concepts section. */
    wireframes?: string;
    iterations: string;
  };
  prototype: {
    description: string;
    features: string[];
    link: string;
  };
  /** Optional case-study extras. Only HubSub uses these so far. */
  glance?: { label: string; value: string }[];
  researchKeyInsight?: string;
  researchModelScreen?: Screen & { title: string; text: string };
  researchFindings?: { question: string; answer: string; decision: string }[];
  iterationsTitle?: string;
  beforeAfter?: BeforeAfter[];
  supportingScreens?: (Screen & { title: string })[];
  testing?: {
    status: string;
    description: string;
    questions: string[];
    method: string[];
  };
  prototypeTitle?: string;
  prototypeLinkLabel?: string;
  learned?: string[];
  roadmap?: string[];
}

const projectsData: Record<string, ProjectData> = {
  Hubsub: {
    id: 1,
    title: 'HubSub: Redesigning the Counter Experience for a Membership Platform',
    description:
      'As the sole UX designer, I redesigned the bar-side tools that staff use to serve members, from stakeholder interview to production front-end code.',
    tags: ['Product Design', 'UX Research', 'Figma', 'Front-End Development'],
    color: 'from-brand-light to-brand',
    image: hubsubLogo,
    glance: [
      { label: 'Role', value: 'Sole UX / Product Designer' },
      { label: 'Team', value: 'Me + Lead Software Developer' },
      { label: 'Status', value: 'Live at 2 Seattle businesses' },
      { label: 'Tools', value: 'Figma, Figma Agent, Cursor, Git, React' }
    ],
    story: {
      challenge:
        'HubSub runs membership programs for local businesses, where members redeem perks like pours and merch in person. The program worked, but the Point of Membership (POM) screen bartenders used to redeem perks felt confusing and incomplete.',
      approach:
        'As HubSub’s only designer, I work directly with our lead developer. I interviewed our longest-running partner, turned his feedback into a plan, designed the fixes in Figma, and shipped them as front-end code with Cursor.',
      impact:
        'Four production releases in August 2026 overhauled the counter: one-tap redemption, a live visit ticket with undo on every line, and a consistent, color-coded tile grid. It’s live at both businesses using HubSub.'
    },
    development: {
      research:
        'Before a key release, I interviewed the owner of a Seattle cidery that has used HubSub for years, with targeted questions about the decisions blocking launch. His verdict: the counter felt confusing, and speed mattered most.',
      iterations:
        'The interview led to a complete overhaul of how the counter looks and works, not surface tweaks. Each change below traces back to something the owner told us. One example: he was adamant that a separate check-in step before each pour had to go. Now tapping a pour for an active member checks them in and orders the pour in one motion.',
    },
    researchKeyInsight:
      'The owner’s framing: think of a member’s visit like an open check at a restaurant. Items go on the tab as they’re served, any line can be voided, and everything is finalized when the check closes.',
    researchModelScreen: {
      title: 'The open-check model, built',
      text:
        'That framing became the counter’s home screen. Members who just arrived wait for a one-tap Confirm, and everyone already checked in sits on an Open Tabs list with their club, perks used, and time since check-in. Staff can jump into any tab or close it out from here.',
      src: pomOpenTabs,
      alt: 'POM home screen with a Just arrived list showing one member to confirm, and an Open Tabs list of three checked-in members with club, perk count, check-in time, and Close Out buttons',
      caption: 'Open Tabs home screen with test members (recreated from the current product layout)'
    },
    researchFindings: [
      {
        question: 'If staff accidentally redeem a full cart, how does that affect the business?',
        answer:
          'Very negatively, for the customer and the business. It confuses everyone about which redemptions were real. Staff need a way to undo and to track what happened.',
        decision: 'Per-row undo on every redemption, plus a full history with batch undo'
      },
      {
        question: 'Is speed or mis-tap protection more important at the counter?',
        answer: 'Speed. An undo system beats a confirmation dialog.',
        decision: 'No confirmation pop-up. Accept the mis-tap risk and make recovery easy instead'
      },
      {
        question: 'How often do staff stage more than one perk before redeeming?',
        answer: 'Usually one at a time. Multiple perks mostly happen when a new member picks up welcome gifts.',
        decision: 'Removed the staging cart. A tap redeems immediately onto a single “This visit” ticket'
      },
      {
        question: 'If staff hand out a gift before the member finishes its survey, is the gift still open?',
        answer:
          'No. It’s closed the moment it’s redeemed, but the member still needs to see what they picked, and staff need a way to edit it.',
        decision: 'Fulfilled gifts stop triggering survey reminders. Staff can record or edit the customization instead'
      },
      {
        question: 'Open feedback: what would make the counter screens better?',
        answer:
          'The extra check-in step, and features nobody uses. The Macro Pour is the most-redeemed perk, and a select-all button isn’t needed.',
        decision: 'Automatic check-in on tap, and a simpler grid ordered by how perks are actually used'
      }
    ],
    iterationsTitle: 'Stakeholder Feedback & Iteration',
    beforeAfter: [
      {
        title: 'From a staging cart to a live visit ticket',
        problem:
          'Taps staged quantities in a Cart. Nothing was redeemed until staff pressed a separate button, and a mis-tap could only be cleared by removing the whole line.',
        change:
          'Each tap now redeems right away onto a “This visit” ticket. Every row has a timestamp and its own undo, and Close out ends the visit.',
        before: {
          src: pomBeforeCart,
          alt: 'Old POM screen: perk tiles above a Cart panel showing Macro Pour times 3 and a Redeem 3 perks button',
          caption: 'Before: the staging Cart (rebuilt from the earlier code for comparison)'
        },
        after: {
          src: pomAfterVisitTicket,
          alt: 'New POM screen: color-coded perk tiles with a This visit ticket listing three timestamped Macro Pours, each with an undo button',
          caption: 'After: tap-to-redeem with a live visit ticket (live production build)'
        }
      },
      {
        title: 'One consistent grid of tiles',
        problem:
          'Visit pours were pinned to a taller first row, ahead of staff display settings. Gift tiles below were shorter, so taps on different rows didn’t hit the same size target.',
        change:
          'Every perk is one tile size. Order follows staff settings (unlimited, then refreshes, then gifts by default), and colors with a legend show each perk type at a glance.',
        before: {
          src: pomBeforeTallRow,
          alt: 'Old POM tile layout with a tall first row of pour tiles above shorter gift tiles',
          caption: 'Before: tall visit-pour row above shorter gift tiles (rebuilt from the earlier code)'
        },
        after: {
          src: pomAfterVisitTicket,
          alt: 'New uniform grid: equal-size tiles colored teal for unlimited, orange for refreshes, and blue for one-time gifts, with a legend',
          caption: 'After: uniform, color-coded grid with a legend (live production build)'
        }
      }
    ],
    supportingScreens: [
      {
        title: 'Clear confirmation, easy recovery',
        src: pomRedeemFlash,
        alt: 'POM screen with a “1 perk redeemed” confirmation offering Undo and History buttons',
        caption: 'A redemption confirmation stays on screen until dismissed and offers Undo and History, not just a disappearing toast.'
      },
      {
        title: 'Fixing mistakes after the fact',
        src: pomHistory,
        alt: 'Fulfillment history sheet listing past Macro Pour redemptions with checkboxes and a Batch undo button',
        caption: 'View all time opens the member’s full history, where staff can select and batch-undo past redemptions.'
      }
    ],
    testing: {
      status: 'Upcoming: on-site research at the cidery, fall 2026',
      description:
        'Next I’m going back to the cidery to learn how the redesign has changed day-to-day operations. I’ll talk with the owner and any staff who want to take part about how shifts actually run now. Findings and the next round of changes will be added here.',
      questions: [
        'How has the redesigned counter changed the way staff serve members during a shift?',
        'Are member transactions faster and smoother, and where do they still slow down?',
        'Do staff and the owner trust what HubSub records, and how are mistakes fixed now?',
        'What are people still tracking or handling outside the app?',
        'How do members experience the program at the bar, and has it become easier to run?'
      ],
      method: [
        'Semi-structured interviews with the owner and volunteer staff',
        'Optional walkthroughs on a test member, comparing tasks to how they worked before August',
        'Observation during a live shift, if timing allows',
        'Membership analytics from before and after the August release'
      ]
    },
    prototypeTitle: 'The Product',
    prototype: {
      description:
        'The redesigned counter is live in production at two Seattle businesses. The Figma file below shows the Point of Membership design that staff use at the bar. Alongside it, I keep designing the member-facing app with the developer.',
      features: [
        'One-tap perk redemption with automatic check-in for active members',
        'Live “This visit” ticket with a timestamp and undo on every row',
        'Uniform, color-coded perk grid that follows staff display settings',
        'Full redemption history with batch undo',
        'Designed in Figma and shipped as production front-end code'
      ],
      link: 'https://www.figma.com/design/Q9wIN7YbQ2XGw2mZZFOyHx/HubSub-SF--Business-?node-id=732-2343&t=ISh1DJE5TuSRWe9A-0'
    },
    prototypeLinkLabel: 'Open Point of Membership Prototype',
    learned: [
      'Designing for staff during a busy shift is different from designing for customers. Speed, big targets, and easy recovery from mistakes matter more than anything else.',
      'Shipping my own front-end code taught me to design within real technical constraints and to sweat the details in the build, not just the mockup.',
      'One honest conversation with a stakeholder reshaped the roadmap. Next, I want to learn how those changes play out in real shifts, and hear from members directly.'
    ],
    roadmap: [
      'Redemption history for members, so they can see the value they get from their membership',
      'A matching check-in code shown on both the member’s phone and the counter screen, for quick verification without slowing staff down',
      'Survey reminders for members when they check in, and the ability to fix a name, size, or typo before a gift ships',
      'Point-of-sale integration (such as Square) to make HubSub easier for new businesses to adopt'
    ]
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

function ScreenFigure({ screen, tone }: { screen: Screen; tone?: 'before' | 'after' }) {
  return (
    <figure className="flex flex-col gap-2">
      {tone ? (
        <span
          className={`self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            tone === 'after' ? 'bg-brand text-brand-deep' : 'bg-muted text-foreground'
          }`}
        >
          {tone === 'after' ? 'After' : 'Before'}
        </span>
      ) : null}
      <a
        href={screen.src}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-lg border border-border bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        aria-label={`Open full size: ${screen.alt}`}
      >
        <img src={screen.src} alt={screen.alt} className="w-full h-64 sm:h-72 object-contain" loading="lazy" />
      </a>
      <figcaption className="text-sm text-muted-foreground">{screen.caption}</figcaption>
    </figure>
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
        <p className="text-xl text-foreground/90 mb-6">{project.description}</p>
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
        {project.glance ? (
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {project.glance.map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-lg p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{item.label}</dt>
                <dd className="text-sm font-medium text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
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
            <p className="text-foreground/90 leading-relaxed mb-4">{project.development.research}</p>
            {project.researchKeyInsight ? (
              <blockquote className="mb-6 rounded-xl border-l-4 border-brand bg-card p-6">
                <span className="block text-xs font-semibold uppercase tracking-wide text-brand mb-2">Key insight</span>
                <p className="text-lg text-foreground leading-relaxed">{project.researchKeyInsight}</p>
              </blockquote>
            ) : null}
            {project.researchModelScreen ? (
              <div className="mb-6 bg-card border border-border rounded-xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">{project.researchModelScreen.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.researchModelScreen.text}</p>
                <ScreenFigure screen={project.researchModelScreen} />
              </div>
            ) : null}
            {project.researchFindings ? (
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-1">From interview to decision</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Answers are paraphrased from my interview notes.
                </p>
                <ol className="space-y-6">
                  {project.researchFindings.map((finding, index) => (
                    <li key={index} className="grid gap-3 md:grid-cols-3 border-t border-border pt-6 first:border-t-0 first:pt-0">
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                          I asked
                        </span>
                        <p className="text-foreground">{finding.question}</p>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                          The owner said
                        </span>
                        <p className="text-muted-foreground">{finding.answer}</p>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-brand mb-1">
                          What we did
                        </span>
                        <p className="text-foreground">{finding.decision}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Research artifacts and user insights</span>
              </div>
            )}
          </div>
          {project.development.wireframes ? (
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Wireframes & Concepts</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">{project.development.wireframes}</p>
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Wireframe sketches and concepts</span>
              </div>
            </div>
          ) : null}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {project.iterationsTitle ?? 'Testing & Iteration'}
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{project.development.iterations}</p>
            {project.beforeAfter ? (
              <div className="space-y-8">
                {project.beforeAfter.map((pair) => (
                  <div key={pair.title} className="bg-card border border-border rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">{pair.title}</h4>
                    <div className="grid gap-4 sm:grid-cols-2 mb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="block font-semibold text-foreground mb-1">The problem</span>
                        {pair.problem}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="block font-semibold text-foreground mb-1">The change</span>
                        {pair.change}
                      </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <ScreenFigure screen={pair.before} tone="before" />
                      <ScreenFigure screen={pair.after} tone="after" />
                    </div>
                  </div>
                ))}
                {project.supportingScreens ? (
                  <div className="grid gap-6 md:grid-cols-2">
                    {project.supportingScreens.map((screen) => (
                      <div key={screen.title} className="bg-card border border-border rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4">{screen.title}</h4>
                        <ScreenFigure screen={screen} />
                      </div>
                    ))}
                  </div>
                ) : null}
                <p className="text-xs text-foreground/80">Click any screen to view it full size.</p>
              </div>
            ) : (
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Iteration progression and testing results</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {project.testing ? (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Usability Testing</h2>
          <div className="bg-card border border-dashed border-brand/50 rounded-xl p-6 sm:p-8">
            <span className="inline-block rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand mb-4">
              {project.testing.status}
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6">{project.testing.description}</p>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Research questions</h3>
                <ol className="space-y-2">
                  {project.testing.questions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand mr-3 font-semibold">{index + 1}.</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">How I’ll find out</h3>
                <ul className="space-y-2">
                  {project.testing.method.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand mr-3">→</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Finished Prototype Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          {project.prototypeTitle ?? 'Finished Prototype'}
        </h2>
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
              {project.prototypeLinkLabel ?? 'View Interactive Prototype'}
            </a>
          </div>
        </div>
      </section>

      {project.roadmap ? (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">What’s Next</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            The same interview surfaced member-side ideas that are now on the roadmap:
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {project.roadmap.map((item, index) => (
              <li key={index} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                <span className="text-brand">→</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.learned ? (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">What I Learned</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.learned.map((lesson, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">{lesson}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
