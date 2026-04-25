import { Outlet, Link, useLocation } from 'react-router';
import { Background } from './Background';

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      <Background />
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              Portfolio
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className={`transition-colors ${
                  location.pathname === '/'
                    ? 'text-orange-600 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`transition-colors ${
                  location.pathname === '/projects'
                    ? 'text-orange-600 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Projects
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          © 2026 Jacob Hobzek. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
