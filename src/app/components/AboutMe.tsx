export function AboutMe() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-10">
        About <span className="text-brand">Me</span>
      </h1>

      <p className="text-xl text-foreground leading-relaxed mb-12 max-w-3xl">
        I&apos;m a Seattle-area UX/UI designer. For the past three years I&apos;ve been the only designer at
        HubSub, a membership platform for small businesses, where I take features from user interviews to
        Figma to production code. I&apos;m finishing a B.S. in User Experience Design at WGU and taking on
        freelance projects.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">My Background</h2>
          <div className="rounded-lg bg-neutral-800/50 p-4 sm:p-6">
            <p className="text-foreground leading-relaxed">
            Throughout high school and college, I
            took many visual art classes, design-related courses, and excelled in Language-Arts and
            writing-related tasks. As a high school student I found support through a queer youth drop-in group
            and later led my high school&apos;s GSA club which helped me foster the same sense of
            belonging and empowerment for others that inspired my interest in User-Experience Design.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">My Values</h2>
          <div className="rounded-lg bg-neutral-800/50 p-4 sm:p-6">
            <p className="text-foreground leading-relaxed">
              I believe in diversity, unity, and the protection of civil liberties for people from all
              backgrounds. I value open expression and learning from others, both personally and
              professionally. As a designer, I&apos;m driven to create accessible, equitable experiences
              rooted in empathy and collaboration across cultures.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">My Strengths and Skills</h2>
            <div className="rounded-lg bg-neutral-800/50 px-4 py-3 sm:px-5 sm:py-4">
              <ul className="list-disc space-y-2 pl-6 text-foreground leading-snug">
                <li>User research: stakeholder interviews, interview guides, and research synthesis</li>
                <li>UX/UI design: user flows, wireframes, prototypes, and design systems in Figma, Adobe XD, and Framer</li>
                <li>Front-end: HTML, CSS, JavaScript, and TypeScript, shipped with Git and AI-assisted development in Cursor</li>
                <li>Strong background in visual art, writing, and communication</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Education</h2>
            <div className="rounded-lg bg-neutral-800/50 px-4 py-3 sm:px-5 sm:py-4">
              <ul className="list-disc space-y-2 pl-6 text-foreground leading-snug">
                <li>B.S. User Experience Design, Western Governors University (expected 2027)</li>
                <li>Associate of Applied Science, Bellevue College (2025)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
