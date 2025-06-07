import React from 'react';
import { Trophy, Target, CheckCircle } from 'lucide-react';

const TrackRecord: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Inspired by successful programs like L\'Oréal Beauty Tech Atelier. Nearly 100 startups accelerated, majority women-led.'
    },
    {
      icon: Target,
      title: 'Dual Focus',
      description: 'Develops both creative vision and executive skills. Promotes action-oriented inclusivity across the industry.'
    },
    {
      icon: CheckCircle,
      title: 'Practical Support',
      description: 'Emphasis on operational guidance and increased visibility for all participants.'
    }
  ];

  return (
    <section id="track-record" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Track Record & Competitive Advantage
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full inline-flex group-hover:bg-black dark:group-hover:bg-white transition-all duration-300">
                  <achievement.icon className="h-8 w-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;