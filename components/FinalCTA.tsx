'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageUploader from './ImageUploader';

export default function FinalCTA() {
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
        >
          Ready to craft your room?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ImageUploader
            onImageUpload={handleImageUpload}
            onTextChange={handleTextChange}
            textValue={textPrompt}
            variant="cta"
          />
        </motion.div>
      </div>
    </section>
  );
}

