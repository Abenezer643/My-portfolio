import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const skills = [
  {
    category: 'Core Skills',
    items: ['Problem Solving', 'UI/UX Design', 'Responsive Design', 'Component-Based Architecture', 'API Integration'],
  },
  {
    category: 'Frontend Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    items: ['Python', 'Django', 'PHP', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Mobile Development',
    items: ['Flutter', 'Dart', 'Reusable Widgets', 'Responsive Mobile UI'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Design & Development Tools',
    items: ['Figma', 'Photoshop', 'Illustrator', 'Git', 'GitHub', 'VS Code'],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
      <p className="text-gray-400 text-center mb-12">
        Technologies I use to build modern digital experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/30 transition-all cursor-default"
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
