import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const skills = [
  {
    category: 'Core Skills',
    items: [
      'UI/UX layout',
      'Frontend Dev',
      'Responsive Web Design',
      'Component-Based Design',
    ],
  },
  { category: 'Frontend Tech', items: ['HTML', 'CSS', 'JS', 'WordPress'] },
  { category: 'Design Tools', items: ['Figma', 'Photoshop', 'Illustrator'] },
  {
    category: 'Tools & Interaction',
    items: ['GitHub', 'Netlify', 'GSAP', 'UI Interactions'],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
      <p className="text-gray-400 text-center mb-12">
        Crafting seamless UI/UX and clean code
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="h-full flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-bold mb-6">{skill.category}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-white/30 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Skills;
