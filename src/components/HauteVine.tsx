import React from 'react';
import { Wine, Users, Star } from 'lucide-react';

const HauteVine: React.FC = () => {
  return (
    <section id="haute-vine" className="py-20 bg-black dark:bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-white dark:bg-black rounded-full">
              <Wine className="h-12 w-12 text-black dark:text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-6">
            Haute & Vine Social Club
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-8">
            The Sophisticated Hub for Fashion & Beauty Professionals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 dark:bg-black/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-lg text-gray-200 dark:text-gray-700 leading-relaxed text-center mb-8">
              An exclusive bar and networking space designed for the sophisticated and fashionably aware, 
              serving as the social anchor for Launch Couture members and industry professionals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-white/20 dark:bg-black/20 rounded-full">
                    <Users className="h-8 w-8 text-white dark:text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-black mb-2">
                  Exclusive Networking
                </h3>
                <p className="text-gray-300 dark:text-gray-600">
                  Connect with industry leaders in a sophisticated setting
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-white/20 dark:bg-black/20 rounded-full">
                    <Star className="h-8 w-8 text-white dark:text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-black mb-2">
                  Premium Experience
                </h3>
                <p className="text-gray-300 dark:text-gray-600">
                  Curated events and experiences for members
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-white/20 dark:bg-black/20 rounded-full">
                    <Wine className="h-8 w-8 text-white dark:text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-black mb-2">
                  Social Anchor
                </h3>
                <p className="text-gray-300 dark:text-gray-600">
                  The heart of the Launch Couture community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HauteVine;