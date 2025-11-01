'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Hammer, Palette, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function ArtisanConnection() {
  const artisanTypes = [
    { icon: Hammer, label: 'Carpenters' },
    { icon: Palette, label: 'Designers' },
    { icon: Wrench, label: 'Metalworkers' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Visual Collage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 grid grid-cols-2 gap-2">
              {/* AI Visualization */}
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=800&fit=crop"
                  alt="AI-generated room design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20" />
              </div>

              {/* Artisan Working */}
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop"
                  alt="Artisan at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Final Product */}
              <div className="relative col-span-2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631889993955-f9c9a57b9b1b?w=800&h=400&fit=crop"
                  alt="Finished custom furniture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              From Our Studio to{' '}
              <span className="text-primary-600">Your Doorstep</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Once your design is perfect, we connect you with skilled, local artisans who can bring your vision to life. Each craftsperson in our network is vetted for quality and craftsmanship.
            </p>

            {/* Artisan Types */}
            <div className="flex flex-wrap gap-4 pt-4">
              {artisanTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.label}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
                  >
                    <Icon className="w-5 h-5 text-primary-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {type.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="/artisans"
              className="inline-flex items-center gap-2 mt-6 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Explore the Artisan Network
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

