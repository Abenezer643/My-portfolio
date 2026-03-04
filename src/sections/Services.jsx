import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const services = [
  {
    title: 'UI/UX Website Design',
    description:
      'Clean, user-focused layouts with clear structure, smooth navigation, and strong visual hierarchy.',
    tags: ['Modern layouts', 'Responsive design'],
  },
  {
    title: 'Frontend Development',
    description:
      'Responsive interfaces using HTML, CSS, and JavaScript for clean, consistent, reliable performance.',
    tags: ['Clean HTML/CSS', 'Smooth interactions'],
  },
  {
    title: 'Performance & Responsiveness',
    description:
      'Fast, mobile-first websites optimized for speed, accessibility, and dependable performance.',
    tags: ['Speed optimization', 'Asset efficiency'],
  },
  {
    title: 'WordPress Implementation',
    description:
      'Lightweight WordPress setups with easy updates, fast loading, and scalable, clean, customizable layouts.',
    tags: ['Theme setup', 'Easy management'],
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Services</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Designing clean scalable responsive websites
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col h-full justify-between hover:bg-white/5"
          >
            <div>
              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300"
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
