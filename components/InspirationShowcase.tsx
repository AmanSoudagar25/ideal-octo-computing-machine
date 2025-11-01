'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcases = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop',
    caption: 'Visualize products from top brands.',
    title: 'Real Products, Real Style',
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1631889993955-f9c9a57b9b1b?w=800&h=600&fit=crop',
    caption: "Can't find it? Invent it.",
    title: 'Custom Design, Unlimited Possibilities',
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1493663284031-b7e3aaa4f28b?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
    caption: 'Reimagine any room in seconds.',
    title: 'Instant Transformation',
  },
];

export default function InspirationShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    goToSlide((currentIndex - 1 + showcases.length) % showcases.length);
  };

  const goToNext = () => {
    goToSlide((currentIndex + 1) % showcases.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          See It Before You Build It
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video bg-gray-200"
              >
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Before */}
                  <div className="relative overflow-hidden">
                    <img
                      src={showcases[currentIndex].before}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white text-2xl md:text-4xl font-bold">Before</span>
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden">
                    <img
                      src={showcases[currentIndex].after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-600/40 flex items-center justify-center">
                      <span className="text-white text-2xl md:text-4xl font-bold">After</span>
                    </div>
                  </div>
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {showcases[currentIndex].title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90">
                    {showcases[currentIndex].caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Previous showcase"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Next showcase"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {showcases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

