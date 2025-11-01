import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import InspirationShowcase from '@/components/InspirationShowcase';
import ArtisanConnection from '@/components/ArtisanConnection';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <InspirationShowcase />
      <ArtisanConnection />
      <FinalCTA />
    </main>
  );
}

