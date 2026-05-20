export function AboutMe() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-10">
        About <span className="text-brand">Me</span>
      </h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">My Background</h2>
          <p className="text-foreground leading-relaxed">
            Through my career so far, I have mostly worked in service roles, while always being a
            creative person with a passion for helping others. Throughout high school and college, I
            took many visual art classes, design-related courses, and excelled in Language-Arts and
            writing-related tasks. As a high school student I found support through a queer youth drop-in group
            and later lead my high school&apos;s GSA club which helped me foster the same sense of
            belonging and empowerment for others that inspired my interest in User-Experience Design.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">My Values</h2>
          <p className="text-foreground leading-relaxed">
            I see strength in diversity and unity, and I stand for civil liberties for people from all
            walks of life while believing it is our duty to elevate people who are not always
            included. I value the freedom to express myself and to listen to and learn from others in
            both professional and personal contexts. I am driven to use my design skills to create more
            accessible and equitable experiences alongside people from different cultures and
            backgrounds, with empathy at the center of my work.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">My Strengths and Skills</h2>
          <ul className="list-disc space-y-3 pl-6 text-foreground leading-relaxed">
            <li>
              Proficient in Figma, Adobe XD, and Framer.
            </li>
            <li>
            Strong background in visual art, writing, communication, and design.
            </li>
            <li>
            Basic understanding of HTML, CSS, and Javascript
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
