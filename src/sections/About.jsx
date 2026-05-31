import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const stats = [
  { value: '02+', label: 'Years Of Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '05+', label: 'Clients Served' },
];

const approaches = [
  { number: '01', title: 'Understand users & goals' },
  { number: '02', title: 'Create clean UI layouts' },
  { number: '03', title: 'Responsive experiences' },
];

const About = () => {
  return (
    <SectionWrapper id="about" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
        I'm Abemelek Dereje, Information System student at [Haramaya
        University] and a front-end developer and designer passionate about
        crafting clean, intuitive, and responsive digital experiences. I focus
        on turning ideas into seamless interfaces by understanding user needs,
        designing thoughtful UI layouts, and ensuring smooth interactions across
        devices.
      </p>

      <h3 className="text-2xl font-bold mb-8">My Approach</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {approaches.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm dark:shadow-none"
          >
            <div className="bg-gray-900 text-white dark:bg-white dark:text-black font-bold rounded p-2 mb-4 text-sm w-10 h-10 flex items-center justify-center">
              {item.number}
            </div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-200">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-12 md:gap-24">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
