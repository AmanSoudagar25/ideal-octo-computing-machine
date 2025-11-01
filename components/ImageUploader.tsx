'use client';

import { useState, useRef, useCallback } from 'react';
import { Upload, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  onTextChange: (text: string) => void;
  textValue?: string;
  variant?: 'hero' | 'cta';
}

export default function ImageUploader({ 
  onImageUpload, 
  onTextChange, 
  textValue = '',
  variant = 'hero' 
}: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file: File) => {
    setImageFile(file);
    onImageUpload(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      // Focus text input after image is loaded
      setTimeout(() => {
        textInputRef.current?.focus();
      }, 100);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isLarge = variant === 'hero';

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative cursor-pointer transition-all duration-300
          ${isLarge ? 'h-96 md:h-[500px]' : 'h-80 md:h-96'}
          rounded-2xl border-2 border-dashed
          ${isDragging ? 'border-primary-500 bg-primary-50 scale-[1.02]' : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'}
          ${preview ? 'border-solid' : ''}
          shadow-lg hover:shadow-xl
          flex flex-col items-center justify-center
          overflow-hidden
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />

        <AnimatePresence mode="wait">
          {preview ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={preview}
                alt="Room preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <button
                onClick={handleRemoveImage}
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                aria-label="Remove image"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center space-y-4 p-8 text-center"
            >
              <div className="relative">
                <Sparkles className={`${isLarge ? 'w-16 h-16' : 'w-12 h-12'} text-primary-500 animate-pulse`} />
                <Upload className={`${isLarge ? 'w-8 h-8' : 'w-6 h-6'} text-primary-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
              </div>
              <div className="space-y-2">
                <p className={`${isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-semibold text-gray-800`}>
                  Click or Drag Your Room Photo Here
                </p>
                <p className="text-sm text-gray-500">
                  Supports JPG, PNG, and WebP formats
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text Input Overlay */}
        <div className={`
          absolute bottom-0 left-0 right-0
          ${preview ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'}
          p-4 md:p-6
          transition-all duration-300
        `}>
          <div className="max-w-2xl mx-auto w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Optional: Describe your vision
            </label>
            <textarea
              ref={textInputRef}
              value={textValue}
              onChange={(e) => onTextChange(e.target.value)}
              placeholder='e.g., "add a modern blue sofa" or "make it feel cozy and minimalist"'
              className={`
                w-full px-4 py-3 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                resize-none placeholder:text-gray-400
                ${isLarge ? 'text-base' : 'text-sm'}
                transition-all duration-200
              `}
              rows={2}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 w-full max-w-md mx-auto bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Generate Design
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

