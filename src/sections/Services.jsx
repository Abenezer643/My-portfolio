import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const services = [
  {
    title: 'Design Engineering ',
    description:
      'Translating design files into pixel-perfect, interactive code with attention to detail and performance.',
    tags: ['Modern layouts', 'Responsive design'],
  },
  {
    title: 'Scalable Frontend',
    description:
      'Building component-based architectures that grow with your product, ensuring maintainability and consistency.',
    tags: ['Component design', 'State management'],
  },
  {
    title: 'Performance & Responsiveness',
    description:
      'Ensuring silky smooth 60fps animations and lightning-fast load times.',
    tags: ['Speed optimization', 'Asset efficiency'],
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-4">What I Do</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Designing clean scalable responsive websites
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col h-full justify-between hover:bg-gray-50 dark:hover:bg-white/5"
          >
            <div>
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
