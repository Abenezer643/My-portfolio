import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectImg from '../assets/projectPic/Flutter User List App.jpg';
import ProjectImg2 from '../assets/projectPic/portfolio-D9AEo6R0.jpg';
import hararImg from '../assets/projectPic/TibebStore Ethiopian Marketplace.jpg';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern, dark-themed portfolio website built with React and Tailwind CSS to showcase my skills, projects, and experience through a clean and responsive design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: ProjectImg2,
    github:
      'https://github.com/melekdereje/Arik-simplified-dark-themed-react-portfolio',
    demo: '#',
  },
  {
    title: 'User List App',
    description:
      'A Flutter-based mobile application developed during my software engineering experience at LT Software Engineering PLC. The app focuses on managing and viewing user information through an intuitive interface and smooth navigation.',
    tags: ['Flutter', 'Dart'],
    image: ProjectImg,
    github: '#',
    demo: '#',
  },
  {
    title: 'TibebStore',
    description:
      'A multi-tenant e-commerce platform designed to connect Ethiopian artisans with customers through a digital marketplace for handmade, custom, and culturally inspired products. Each vendor can manage a separate storefront, product catalog, branding, and customer base.',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Payload CMS', 'MongoDB', 'Stripe'],
    image: hararImg,
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Selected Work</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        A selection of projects showcasing my skills in web development, mobile app development, and building practical digital solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col h-full !p-0 overflow-hidden group hover:border-gray-300 dark:hover:border-white/30"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors transform hover:scale-110"
                  title="View Code"
                >
                  <FaGithub size={20} />
                </a>
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors transform hover:scale-110"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-1 rounded text-gray-700 dark:text-gray-300"
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
