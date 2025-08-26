export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#news", label: "الأخبار" },
    { href: "#matches", label: "المباريات" },
    { href: "#players", label: "اللاعبون" },
    { href: "#achievements", label: "الإنجازات" },
  ];

  const services = [
    { href: "#", label: "تذاكر المباريات" },
    { href: "#", label: "عضوية النادي" },
    { href: "#", label: "متجر النادي" },
    { href: "#", label: "أكاديمية الناشئين" },
    { href: "#", label: "خدمة العملاء" },
  ];

  const legalLinks = [
    { href: "#", label: "سياسة الخصوصية" },
    { href: "#", label: "شروط الاستخدام" },
    { href: "#", label: "اتصل بنا" },
  ];

  return (
    <footer className="bg-club-bg border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-6" data-testid="footer-club-info">
              <img 
                src="https://pixabay.com/get/g1078f9a5ea75b15e5d094933dcecfa67f35abfa83261c3214ddcbea76491adf02fae9a69f003d8c1eb57858bd76109221eff3799245b38cf60514aea2c53c25a_1280.jpg" 
                alt="شعار النادي" 
                className="w-12 h-12 rounded-full"
                data-testid="footer-logo"
              />
              <span className="text-xl font-bold" data-testid="footer-club-name">نادي الأساطير</span>
            </div>
            <p className="text-club-muted text-sm leading-relaxed" data-testid="footer-club-description">
              نادي كرة قدم عريق يضم نخبة من أفضل اللاعبين والمدربين في المنطقة، مع تاريخ حافل بالإنجازات المحلية والقارية.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6" data-testid="footer-quick-links-title">روابط سريعة</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-club-muted hover:text-club-ink transition-colors"
                    data-testid={`footer-quick-link-${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold mb-6" data-testid="footer-services-title">الخدمات</h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <a 
                    href={service.href} 
                    className="text-club-muted hover:text-club-ink transition-colors"
                    data-testid={`footer-service-${service.label}`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6" data-testid="footer-contact-title">معلومات الاتصال</h4>
            <div className="space-y-3 text-sm">
              <p className="text-club-muted" data-testid="footer-address">
                <i className="fas fa-map-marker-alt text-club-red mr-2"></i>
                استاد النادي، المدينة الرياضية
              </p>
              <p className="text-club-muted" data-testid="footer-phone">
                <i className="fas fa-phone text-club-red mr-2"></i>
                +966 11 123 4567
              </p>
              <p className="text-club-muted" data-testid="footer-email">
                <i className="fas fa-envelope text-club-red mr-2"></i>
                info@clublegends.com
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-club-muted text-sm" data-testid="footer-copyright">
            © 2024 نادي الأساطير. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-sm">
            {legalLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-club-muted hover:text-club-ink transition-colors"
                data-testid={`footer-legal-${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
