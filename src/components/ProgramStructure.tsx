import React from 'react';
import { Lightbulb, Rocket, Building, Crown } from 'lucide-react';
import { ProgramTier } from '../types';

const ProgramStructure: React.FC = () => {
  const tiers: ProgramTier[] = [
    {
      tier: 1,
      title: 'Aspiring',
      description: 'Ideation and validation tools'
    },
    {
      tier: 2,
      title: 'Early-Stage',
      description: 'Product development and launch strategy'
    },
    {
      tier: 3,
      title: 'Emerging',
      description: 'Brand building and scaling sales'
    },
    {
      tier: 4,
      title: 'Established',
      description: 'Expansion, new markets, advanced leadership'
    }
  ];

  const icons = [Lightbulb, Rocket, Building, Crown];

  return (
    <section id="program" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Four-Tier Program Structure
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => {
            const Icon = icons[index];
            return (
              <div key={tier.tier} className="relative group">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center hover:bg-black dark:hover:bg-white transition-all duration-300 h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-white dark:bg-black rounded-full group-hover:bg-white dark:group-hover:bg-black transition-all duration-300">
                      <Icon className="h-8 w-8 text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-600 mb-2">
                    TIER {tier.tier}
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-white dark:group-hover:text-black mb-4">
                    {tier.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-600 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;