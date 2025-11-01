import Navbar from '@/components/Navbar';

export default function ArtisansPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Artisan Network
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Coming soon: Browse our directory of vetted, skilled artisans ready to bring your designs to life.
          </p>
        </div>
      </div>
    </main>
  );
}

