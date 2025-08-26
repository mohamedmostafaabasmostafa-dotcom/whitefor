import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "الرئيسية", side: "left" },
    { href: "#news", label: "الأخبار", side: "left" },
    { href: "#matches", label: "المباريات", side: "left" },
    { href: "#mercato", label: "الميركاتو", side: "right" },
    { href: "#radio", label: "الإذاعة", side: "right" },
    { href: "#about", label: "من نحن؟", side: "right" },
  ];

  const leftNavItems = navItems.filter(item => item.side === "left");
  const rightNavItems = navItems.filter(item => item.side === "right");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-club-gradient shadow-2xl" role="navigation" aria-label="الملاحة الرئيسية">
      <div className="nav-strip">
        <div className="max-w-6xl mx-auto px-6 h-32 flex items-center justify-center relative overflow-visible">
          
          {/* Decorative Slices */}
          <div className="absolute top-0 bottom-0 left-0 w-1/5 opacity-20 bg-gradient-to-b from-black to-transparent transform -skew-x-12 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-1/5 opacity-20 bg-gradient-to-b from-black to-transparent transform skew-x-12 pointer-events-none"></div>
          
          <div className="w-full flex items-center justify-between gap-4 relative z-10">
            
            {/* Right Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {rightNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-link-${item.label}`}
                  className="text-club-muted hover:text-club-ink font-bold text-lg transition-colors duration-200 opacity-90 hover:opacity-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Logo Crest */}
            <div className="relative z-20 flex items-center justify-center min-w-80">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-club-bg2 to-club-bg crest-shape shadow-2xl"></div>
                <div className="absolute -top-3 left-1/3 w-20 h-3 bg-club-red transform -skew-x-12"></div>
                <img 
                  src="https://i.ibb.co/G7g7KN9/received-421644802647117.webp" 
                  alt="شعار النادي" 
                  className="relative z-10 h-24 object-contain"
                  data-testid="logo-image"
                />
              </div>
            </div>
            
            {/* Left Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {leftNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-link-${item.label}`}
                  className="text-club-muted hover:text-club-ink font-bold text-lg transition-colors duration-200 opacity-90 hover:opacity-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-club-ink text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="قائمة التنقل"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-club-bg2 border-t border-gray-800">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid={`mobile-nav-link-${item.label}`}
                  className="block text-club-muted hover:text-club-ink font-bold text-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
