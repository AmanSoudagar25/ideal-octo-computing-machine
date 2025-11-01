'use client';

import { Camera, Sparkles, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Camera,
    title: 'UPLOAD',
    description: 'Snap or upload a photo of your space.',
  },
  {
    icon: Sparkles,
    title: 'VISUALIZE',
    description: 'Try real products or invent your own with AI.',
  },
  {
    icon: Handshake,
    title: 'CONNECT',
    description: 'Bring your design to life with a local artisan.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center max-w-xs"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-100 flex items-center justify-center mb-4 hover:bg-primary-200 transition-colors">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-full top-10 w-16 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

