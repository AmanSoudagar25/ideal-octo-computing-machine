import Navbar from '@/components/Navbar';

export default function LoginPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <Navbar />
      <div className="max-w-md mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sign In
          </h1>
          <p className="text-gray-600">
            Login functionality coming soon with Firebase Authentication.
          </p>
        </div>
      </div>
    </main>
  );
}

