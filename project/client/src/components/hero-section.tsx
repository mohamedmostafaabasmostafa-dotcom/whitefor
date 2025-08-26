export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen mt-32 bg-black overflow-hidden" aria-label="القسم الرئيسي">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe 
          src="https://www.youtube.com/embed/CSkywyEfzvA?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=CSkywyEfzvA&playsinline=1&rel=0"
          title="فيديو خلفية النادي"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          className="hero-video"
          data-testid="hero-video"
        />
      </div>
      
      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-club-ink leading-tight" data-testid="hero-title">
            نادي <span className="text-club-red">الأساطير</span>
          </h1>
          <p className="text-xl md:text-2xl text-club-muted mb-8 leading-relaxed" data-testid="hero-description">
            تاريخ عريق، إنجازات لا تُنسى، ومستقبل مشرق
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-club-red hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover-scale"
              data-testid="button-watch-goals"
            >
              <i className="fas fa-play mr-2"></i>
              شاهد أهدافنا
            </button>
            <button 
              className="border-2 border-club-ink text-club-ink hover:bg-club-ink hover:text-club-bg px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
              data-testid="button-join-family"
            >
              <i className="fas fa-users mr-2"></i>
              انضم للعائلة
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float" data-testid="scroll-indicator">
        <div className="w-6 h-10 border-2 border-club-ink rounded-full flex justify-center">
          <div className="w-1 h-3 bg-club-ink rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
