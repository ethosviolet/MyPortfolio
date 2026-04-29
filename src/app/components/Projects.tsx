import { Link } from 'react-router';
import hubsubLogo from '../../imports/Hubsub_logo_full.webp';
import furwoodCover from '../../imports/furwood_cover_test.png';
import hotSauceImage from '../../imports/hot_sauce_customized.png';

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'Hubsub',
    title: 'Conceptualize and Refine a Small Business Subscription Platform',
    description: 'Concept and UX work for a subscription platform that helps small businesses launch, manage, and grow recurring revenue offerings.',
    tags: ['Product Design', 'UX Research', 'Figma'],
    color: 'from-orange-500 to-red-500',
    image: hubsubLogo
  },
  {
    id: 2,
    slug: 'furwood-campout',
    title: 'Launch a Community Camping Event Website',
    description: 'End-to-end website design for a community camping event, making registration, schedules, and campsite information easy to access on any device.',
    tags: ['Event UX', 'Information Architecture', 'Figma'],
    color: 'from-amber-500 to-orange-500',
    image: furwoodCover
  },
  {
    id: 3,
    slug: 'elearning-platform',
    title: 'Designing an Interactive E-Commerce Platform for Hot Sauce Sales',
    description: 'Interactive e-commerce experience for discovering, comparing, and purchasing craft hot sauces with confidence.',
    tags: ['E-commerce UX', 'Figma', 'Conversion Design'],
    color: 'from-red-500 to-rose-500',
    image: hotSauceImage
  }
];

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of work showcasing my UX design skills and process
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.color}`} />

            {/*
              Logos (like Hubsub) should not be cropped like photos.
              We keep photos as `object-cover`, but switch logos to `object-contain`.
            */}
            <img
              src={project.image}
              alt={project.title}
              className={
                project.slug === 'Hubsub'
                  ? 'w-full h-48 object-contain bg-white p-6'
                  : 'w-full h-48 object-cover'
              }
            />

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg group-hover:text-orange-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
