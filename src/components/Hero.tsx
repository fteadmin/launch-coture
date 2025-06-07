import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-black dark:bg-white rounded-full">
                <Sparkles className="h-8 w-8 text-white dark:text-black" />
              </div>
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                Business Incubator Program
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight tracking-tight">
              LAUNCH
              <br />
              <span className="bg-gradient-to-r from-gray-600 to-black dark:from-gray-400 dark:to-white bg-clip-text text-transparent">
                COUTURE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
              Elevating fashion and beauty entrepreneurs to new heights through our innovative four-tier development model.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              We provide a comprehensive platform for industry advancement, supporting creators at every stage of their journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => scrollToSection('#apply')}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => scrollToSection('#program')}
                className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion entrepreneurs collaborating in a modern workspace"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-black dark:text-white">$455B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Beauty Market by 2027</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-black rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-black dark:text-white">63%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Higher Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;