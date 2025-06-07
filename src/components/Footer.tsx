import React from 'react';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-8 w-8 text-white dark:text-black" />
              <span className="text-2xl font-bold">LAUNCH COUTURE</span>
            </div>
            <p className="text-gray-300 dark:text-gray-600 leading-relaxed mb-6">
              Elevating fashion and beauty entrepreneurs to new heights through our innovative 
              four-tier development model.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <span className="text-gray-300 dark:text-gray-600">hello@launchcouture.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <span className="text-gray-300 dark:text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <span className="text-gray-300 dark:text-gray-600">New York, NY</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-600">
              <li><a href="#program" className="hover:text-white dark:hover:text-black transition-colors">Four-Tier Structure</a></li>
              <li><a href="#core-elements" className="hover:text-white dark:hover:text-black transition-colors">Core Elements</a></li>
              <li><a href="#community" className="hover:text-white dark:hover:text-black transition-colors">Community</a></li>
              <li><a href="#track-record" className="hover:text-white dark:hover:text-black transition-colors">Track Record</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-600">
              <li><a href="#mission" className="hover:text-white dark:hover:text-black transition-colors">Our Mission</a></li>
              <li><a href="#industry" className="hover:text-white dark:hover:text-black transition-colors">Industry Data</a></li>
              <li><a href="#haute-vine" className="hover:text-white dark:hover:text-black transition-colors">Haute & Vine</a></li>
              <li><a href="#apply" className="hover:text-white dark:hover:text-black transition-colors">Apply</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-300 mt-12 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2024 Launch Couture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;