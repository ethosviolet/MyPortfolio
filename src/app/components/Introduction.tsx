import type { CSSProperties } from 'react';
import { Link } from 'react-router';
import profilePhoto from '../../imports/profile-photo.jpeg';
import pomAfterVisitTicket from '../../imports/hubsub_pom_after_visit_ticket.png';

const pillars = [
  {
    title: 'Research',
    text: 'Interviews and feedback from real users shape every design decision.'
  },
  {
    title: 'Design',
    text: 'User flows, wireframes, and polished Figma prototypes for web and mobile.'
  },
  {
    title: 'Build',
    text: 'Responsive front-end code, shipped to production with AI-assisted development.'
  }
];

/** Start time for an element in the load sequence. */
const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties;

export function Introduction() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
        <div
          className="reveal-fade shrink-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-border shadow-2xl"
        >
          <img src={profilePhoto} alt="Jacob Hobzek" className="w-full h-full object-cover" />
        </div>

        <div className="text-center md:text-left">
          <h1
            className="reveal-side text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            style={delay(800)}
          >
            Hello, I'm <span className="text-brand">Jacob Hobzek</span>
          </h1>

          <p className="reveal-side text-xl sm:text-2xl text-foreground mb-8 max-w-2xl" style={delay(1900)}>
            UX/UI designer who takes products from user research to production-ready front-end code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/projects/Hubsub"
              className="reveal-up px-6 py-3 bg-brand text-black font-medium rounded-lg hover:bg-brand-hover transition-colors"
              style={delay(3200)}
            >
              View My Work
            </Link>
            <a
              href="mailto:jacobhobzek@gmail.com"
              className="reveal-up px-6 py-3 bg-brand-deep text-black font-medium rounded-lg hover:bg-brand-hover transition-colors"
              style={delay(3450)}
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-hobzek-87060a231/"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-up px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#005f91] transition-colors"
              style={delay(3700)}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Featured case study */}
      <section className="reveal-up mb-16" style={delay(4200)} aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="text-sm font-semibold uppercase tracking-wide text-brand mb-4">
          Featured case study
        </h2>
        <Link
          to="/projects/Hubsub"
          className="group grid md:grid-cols-2 gap-6 bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className="bg-black/40 flex items-center justify-center p-4">
            <img
              src={pomAfterVisitTicket}
              alt="Redesigned HubSub counter screen with color-coded perk tiles and a This visit ticket"
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
          <div className="p-6 md:pr-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
              HubSub: Redesigning the Counter Experience
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              As the sole designer on a live membership platform, I interviewed a partner business owner and
              turned his feedback into a faster redemption flow for bartenders, with easy undo for mis-taps, then
              helped ship it to production.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['UX Research', 'Product Design', 'Front-End Development'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-brand font-medium">Read the case study →</span>
          </div>
        </Link>
      </section>

      <section aria-labelledby="how-heading">
        <h2
          id="how-heading"
          className="reveal-up text-sm font-semibold uppercase tracking-wide text-brand mb-4 text-center"
          style={delay(4650)}
        >
          How I work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="reveal-up p-6 bg-card rounded-lg shadow-sm border border-border"
              style={delay(4900 + index * 250)}
            >
              <span className="text-brand font-semibold">0{index + 1}</span>
              <h3 className="font-semibold text-foreground text-lg mt-1 mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
