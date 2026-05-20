import profilePhoto from '../../imports/profile-photo.jpeg';

export function Introduction() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full mx-auto mb-6 overflow-hidden border-4 border-border shadow-2xl">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Hello, I'm <span className="text-brand">Jacob Hobzek</span>
        </h1>

        <p className="text-xl sm:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
          UX Designer passionate about creating inclusive and engaging user experiences
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="mailto:jacobhobzek@gmail.com"
            className="px-6 py-3 bg-brand-deep text-white rounded-lg hover:bg-brand-hover transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-hobzek-87060a231/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#005f91] transition-colors"
          >
            Linked In
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-foreground mb-2">Design</h3>
            <p className="text-muted-foreground">Creating intuitive and engaging user interfaces</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-semibold text-foreground mb-2">Prototyping</h3>
            <p className="text-muted-foreground">Bringing ideas to life through interactive designs</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-foreground mb-2">Research</h3>
            <p className="text-muted-foreground">Understanding user needs through empathy and data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
