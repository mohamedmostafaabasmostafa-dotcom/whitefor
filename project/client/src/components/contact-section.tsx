import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const socialLinks = [
    { platform: "facebook", icon: "fab fa-facebook-f", color: "bg-blue-600", url: "#" },
    { platform: "twitter", icon: "fab fa-twitter", color: "bg-blue-400", url: "#" },
    { platform: "instagram", icon: "fab fa-instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500", url: "#" },
    { platform: "youtube", icon: "fab fa-youtube", color: "bg-red-600", url: "#" },
    { platform: "whatsapp", icon: "fab fa-whatsapp", color: "bg-green-500", url: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-club-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4" data-testid="contact-section-title">
            تواصل <span className="text-club-red">معنا</span>
          </h2>
          <p className="text-club-muted text-xl" data-testid="contact-section-description">ابقَ على تواصل مع النادي والجماهير</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-8" data-testid="contact-info-title">معلومات الاتصال</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4" data-testid="contact-address">
                <div className="w-12 h-12 bg-club-red rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold">العنوان</h4>
                  <p className="text-club-muted">استاد النادي، شارع الرياضة، المدينة الرياضية</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-club-red rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold">الهاتف</h4>
                  <p className="text-club-muted">+966 11 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-club-red rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold">البريد الإلكتروني</h4>
                  <p className="text-club-muted">info@clublegends.com</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6" data-testid="social-media-title">تابعنا على</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                    data-testid={`social-link-${social.platform}`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-club-bg rounded-xl p-8">
            <h3 className="text-3xl font-bold mb-6" data-testid="newsletter-title">اشترك في النشرة الإخبارية</h3>
            <p className="text-club-muted mb-8" data-testid="newsletter-description">احصل على أحدث الأخبار والعروض مباشرة في بريدك الإلكتروني</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="الاسم الكامل" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-club-bg2 text-club-ink px-6 py-4 rounded-lg border border-gray-600 focus:border-club-red transition-colors outline-none"
                  data-testid="input-name"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="البريد الإلكتروني" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-club-bg2 text-club-ink px-6 py-4 rounded-lg border border-gray-600 focus:border-club-red transition-colors outline-none"
                  data-testid="input-email"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="رسالتك (اختياري)" 
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-club-bg2 text-club-ink px-6 py-4 rounded-lg border border-gray-600 focus:border-club-red transition-colors outline-none resize-none"
                  data-testid="input-message"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-club-red hover:bg-red-700 text-white py-4 rounded-lg font-bold transition-all duration-300 hover-scale"
                data-testid="button-subscribe"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
