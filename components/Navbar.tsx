'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              RoomCraft AI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/artisans"
              className="text-sm md:text-base font-medium text-gray-700 hover:text-primary-600 transition-colors hidden sm:block"
            >
              Artisans
            </Link>
            <Link
              href="/login"
              className="text-sm md:text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm md:text-base font-semibold rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

