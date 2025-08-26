import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import NewsSection from "@/components/news-section";
import MatchesSection from "@/components/matches-section";
import PlayersSection from "@/components/players-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-club-bg text-club-ink font-tajawal">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <MatchesSection />
      <PlayersSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        data-testid="button-scroll-top"
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 w-12 h-12 bg-club-red hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover-scale ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
