import profilePhoto from '../../imports/profile-photo.jpeg';

export function Introduction() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-2xl">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Hello, I'm <span className="text-orange-600">Jacob Hobzek</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          UX Designer passionate about creating intuitive and delightful user experiences
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="mailto:alex@example.com"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-white text-gray-700 border border-orange-300 rounded-lg hover:bg-orange-50 transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Research</h3>
            <p className="text-gray-600">Understanding user needs through empathy and data</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
            <p className="text-gray-600">Creating intuitive and engaging user interfaces</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-semibold text-gray-900 mb-2">Prototyping</h3>
            <p className="text-gray-600">Bringing ideas to life through interactive designs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
