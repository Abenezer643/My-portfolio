import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectImg from '../assets/projectPic/Flutter User List App.jpg';
import ProjectImg2 from '../assets/projectPic/Personal Portfolio Website.jpg';
import tibebV2Img from '../assets/projectPic/TibebStore Ethiopia V2.jpg';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive personal portfolio website designed to showcase my software development skills, technical expertise, projects, and professional background.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    image: ProjectImg2,
    github:
      'https://github.com/Abenezer643/My-portfolio',
    demo: 'https://my-portfolio-acv7.vercel.app/',
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
    title: 'TibebStore Ethiopia V2',
    description:
      'A multi-tenant e-commerce platform designed to help Ethiopian artisans and businesses showcase and sell handcrafted products and culturally inspired merchandise online.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Payload CMS', 'MongoDB', 'tRPC', 'Chapa', 'Stripe'],
    image: tibebV2Img,
    github: 'https://github.com/Abenezer643/TibebStore-Ethiopia-V2',
    demo: 'https://tibeb-store-ethiopia-v2-l6ig.vercel.app/',
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
        {projects.map((project, index) => {
          const hasDemo = project.demo && project.demo !== '#';
          return (
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
                  {hasDemo && (
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
                  {hasDemo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
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
                {hasDemo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start mt-4 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
