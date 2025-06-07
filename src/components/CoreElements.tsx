import React from 'react';
import { UserCheck, GraduationCap, FileText } from 'lucide-react';
import { CoreElement } from '../types';

const CoreElements: React.FC = () => {
  const elements: CoreElement[] = [
    {
      title: 'Mentor Matching',
      description: 'Personalized guidance aligned with business stage'
    },
    {
      title: 'Structured Education',
      description: 'Masterclasses, workshops, and hands-on labs'
    },
    {
      title: 'Strategic Resources',
      description: 'Financial, legal, and PR guidance'
    }
  ];

  const icons = [UserCheck, GraduationCap, FileText];

  return (
    <section id="core-elements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Core Program Elements
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {elements.map((element, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6">
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full inline-flex group-hover:bg-black dark:group-hover:bg-white transition-all duration-300">
                    <Icon className="h-8 w-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {element.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {element.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreElements;