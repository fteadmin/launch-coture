import React from 'react';
import { FileText, Video, MessageCircle, Sparkles } from 'lucide-react';
import { ApplicationStep } from '../types';

const Application: React.FC = () => {
  const steps: ApplicationStep[] = [
    {
      step: 'Apply',
      title: 'Submit application with pitch deck',
      description: 'Complete our comprehensive application form'
    },
    {
      step: 'Present',
      title: 'Share your vision through video',
      description: 'Create a compelling video presentation'
    },
    {
      step: 'Interview',
      title: 'Meet with our selection committee',
      description: 'Participate in our selection process'
    },
    {
      step: 'Join',
      title: 'Begin your Launch Couture journey',
      description: 'Start your transformation with us'
    }
  ];

  const icons = [FileText, Video, MessageCircle, Sparkles];

  return (
    <section id="apply" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Join Launch Couture: Applications Open Soon
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-full group-hover:bg-black dark:group-hover:bg-white transition-all duration-300">
                    <Icon className="h-12 w-12 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  STEP {index + 1}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {step.step}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-black dark:bg-white text-white dark:text-black px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300">
            Get Notified When Applications Open
          </button>
        </div>
      </div>
    </section>
  );
};

export default Application;