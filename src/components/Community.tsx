import React from 'react';
import { Network, Eye, Award } from 'lucide-react';
import { CommunityAdvantage } from '../types';

const Community: React.FC = () => {
  const advantages: CommunityAdvantage[] = [
    {
      title: 'Peer Network',
      description: 'Connect with fellow entrepreneurs facing similar challenges'
    },
    {
      title: 'Industry Access',
      description: 'Meet leaders, investors, and media contacts'
    },
    {
      title: 'Showcase Opportunities',
      description: 'Present your brand at exclusive industry events'
    }
  ];

  const icons = [Network, Eye, Award];

  return (
    <section id="community" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Community & Networking Advantages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-full group-hover:bg-black dark:group-hover:bg-white transition-all duration-300">
                    <Icon className="h-12 w-12 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;