import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const services = [
  {
    title: 'UI Design & Responsive Interfaces',
    subtitle: 'Design Engineering',
    description:
      'Creating clean, intuitive, and responsive interfaces that turn UI/UX ideas into engaging digital experiences across mobile, tablet, and desktop devices.',
    tags: ['Modern Layouts', 'Responsive Design', 'Interactive UI'],
  },
  {
    title: 'Full-Stack Web Development',
    subtitle: 'Frontend & Backend',
    description:
      'Building functional web applications with maintainable frontend components, reliable backend logic, API integrations, and well-structured data management.',
    tags: ['Frontend Development', 'Backend APIs', 'Database Integration'],
  },
  {
    title: 'Mobile App Development',
    subtitle: 'Flutter Development',
    description:
      'Developing cross-platform mobile applications with Flutter, focusing on reusable widgets, intuitive navigation, practical functionality, and consistent user experiences.',
    tags: ['Flutter', 'Dart', 'Reusable Widgets'],
  },
  {
    title: 'Performance & Code Quality',
    subtitle: 'Optimization & Maintainability',
    description:
      'Improving application performance through efficient code, reusable architecture, debugging, and optimization for a smoother and more reliable user experience.',
    tags: ['Code Optimization', 'Debugging', 'Maintainable Code'],
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-4">What I Do</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        I build responsive web applications, cross-platform mobile apps, and intuitive digital experiences through thoughtful design and clean, maintainable code.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col h-full justify-between hover:bg-gray-50 dark:hover:bg-white/5"
          >
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">{service.subtitle}</p>
              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 dark:from-white to-gray-500 dark:to-gray-400">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
