import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern dark-themed portfolio website built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive dashboard for managing products, orders, and analytics.',
    tags: ['Next.js', 'Chart.js', 'Supabase'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Travel Agency App',
    description:
      'Mobile-first travel booking application with map integration.',
    tags: ['React Native', 'Google Maps API'],
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Selected Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col h-full !p-0 overflow-hidden group hover:border-white/30"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors transform hover:scale-110"
                  title="View Code"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors transform hover:scale-110"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
