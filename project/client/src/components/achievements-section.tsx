export default function AchievementsSection() {
  const stats = [
    { value: "25", label: "بطولة محلية" },
    { value: "8", label: "بطولة قارية" },
    { value: "95", label: "سنة تاريخ" },
    { value: "2M", label: "مشجع حول العالم" },
  ];

  const trophies = [
    {
      id: 1,
      icon: "fas fa-trophy",
      title: "دوري الأبطال",
      lastWin: "آخر فوز: 2023",
      description: "حققنا لقب دوري أبطال آسيا للمرة الثالثة في تاريخ النادي",
    },
    {
      id: 2,
      icon: "fas fa-medal",
      title: "الدوري المحلي",
      lastWin: "آخر فوز: 2024",
      description: "البطل الحالي للدوري المحلي للموسم الخامس على التوالي",
    },
    {
      id: 3,
      icon: "fas fa-crown",
      title: "كأس الملك",
      lastWin: "آخر فوز: 2023",
      description: "حامل لقب كأس الملك وصاحب الرقم القياسي في عدد مرات الفوز",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-club-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4" data-testid="achievements-section-title">
            <span className="text-club-red">الإنجازات</span> والتاريخ
          </h2>
          <p className="text-club-muted text-xl" data-testid="achievements-section-description">رحلة مليئة بالانتصارات والذكريات</p>
        </div>
        
        {/* Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-5xl font-bold text-club-gold mb-2" data-testid={`stat-value-${index}`}>{stat.value}</div>
              <p className="text-club-muted" data-testid={`stat-label-${index}`}>{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Trophies Display */}
        <div className="grid md:grid-cols-3 gap-8">
          {trophies.map((trophy) => (
            <div 
              key={trophy.id}
              className="bg-club-bg2 rounded-xl p-8 text-center hover-scale transition-all duration-300"
              data-testid={`trophy-card-${trophy.id}`}
            >
              <div className="text-6xl text-club-gold mb-4" data-testid={`trophy-icon-${trophy.id}`}>
                <i className={trophy.icon}></i>
              </div>
              <h3 className="text-2xl font-bold mb-2" data-testid={`trophy-title-${trophy.id}`}>{trophy.title}</h3>
              <p className="text-club-muted mb-4" data-testid={`trophy-last-win-${trophy.id}`}>{trophy.lastWin}</p>
              <p className="text-sm" data-testid={`trophy-description-${trophy.id}`}>{trophy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
