'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageUploader from './ImageUploader';

export default function HeroSection() {
  const [textPrompt, setTextPrompt] = useState('');

  const handleImageUpload = (file: File) => {
    // TODO: Handle image upload to backend/n8n
    console.log('Image uploaded:', file);
  };

  const handleTextChange = (text: string) => {
    setTextPrompt(text);
    // TODO: Handle text prompt updates
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto w-full text-center space-y-8">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
        >
          Design your dream room,{' '}
          <span className="text-primary-600">instantly</span>.
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto"
        >
          Upload a photo, describe your vision, and let our AI bring it to life.
        </motion.h2>

        {/* Magic Uploader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <ImageUploader
            onImageUpload={handleImageUpload}
            onTextChange={handleTextChange}
            textValue={textPrompt}
            variant="hero"
          />
        </motion.div>
      </div>
    </section>
  );
}

