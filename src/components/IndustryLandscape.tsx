import React from 'react';
import { DollarSign, TrendingUp, Users } from 'lucide-react';
import { Statistic } from '../types';

const IndustryLandscape: React.FC = () => {
  const statistics: Statistic[] = [
    {
      value: '$455B',
      label: 'Beauty Market',
      description: 'Projected global value by 2027'
    },
    {
      value: '63%',
      label: 'Startups',
      description: 'Higher success rate with incubator support'
    },
    {
      value: '47%',
      label: 'Diversity',
      description: 'Increased representation in supported brands'
    }
  ];

  const icons = [DollarSign, TrendingUp, Users];

  return (
    <section id="industry" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Industry Landscape: Why Incubators Matter
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-white dark:bg-black rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-black dark:group-hover:bg-white transition-all duration-300">
                    <Icon className="h-8 w-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-black dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryLandscape;