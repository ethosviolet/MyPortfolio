import { Outlet, Link, useLocation } from 'react-router';
import { Background } from './Background';

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      <Background />
      <header className="border-b border-border bg-card/90 shadow-sm backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold text-foreground">
              Portfolio
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className={`transition-colors ${
                  location.pathname === '/'
                    ? 'text-brand font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  location.pathname === '/about'
                    ? 'text-brand font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                About Me
              </Link>
              <Link
                to="/projects"
                className={`transition-colors ${
                  location.pathname === '/projects' || location.pathname.startsWith('/projects/')
                    ? 'text-brand font-medium'
                    : 'text-muted-foreground hover:text-foreground'
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
      <footer className="border-t border-border bg-card/90 py-6 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          © 2026 Jacob Hobzek. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
