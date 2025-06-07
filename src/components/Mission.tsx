import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const Mission: React.FC = () => {
  const missions = [
    {
      icon: Target,
      title: 'Empower',
      description: 'Transform ambitious creators into industry leaders'
    },
    {
      icon: TrendingUp,
      title: 'Guide',
      description: 'Provide structured pathways to success'
    },
    {
      icon: Users,
      title: 'Connect',
      description: 'Build an exclusive community of innovators'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Our Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-full group-hover:bg-black dark:group-hover:bg-white transition-all duration-300">
                  <mission.icon className="h-12 w-12 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                {mission.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;