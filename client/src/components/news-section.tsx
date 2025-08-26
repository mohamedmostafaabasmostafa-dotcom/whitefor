export default function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      time: "منذ ساعتين",
      title: "فوز ساحق على الفريق المنافس بثلاثة أهداف نظيفة",
      excerpt: "حقق فريقنا انتصارًا مهمًا في الدوري المحلي بأداء رائع من جميع اللاعبين...",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      time: "منذ 4 ساعات",
      title: "ضم نجم جديد لتعزيز خط الوسط",
      excerpt: "وقع النادي مع اللاعب الدولي محمد أحمد في صفقة انتقال مثيرة...",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      time: "منذ يوم واحد",
      title: "تدريبات مكثفة استعدادًا للمباراة القادمة",
      excerpt: "خضع الفريق لتدريبات مكثفة تحت إشراف الجهاز الفني للاستعداد...",
    },
  ];

  return (
    <section id="news" className="py-20 bg-club-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4" data-testid="news-section-title">
            آخر <span className="text-club-red">الأخبار</span>
          </h2>
          <p className="text-club-muted text-xl" data-testid="news-section-description">تابع أحدث أخبار النادي والفريق</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article 
              key={article.id}
              className="bg-club-bg rounded-xl overflow-hidden shadow-xl hover-scale transition-all duration-300"
              data-testid={`news-card-${article.id}`}
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
                data-testid={`news-image-${article.id}`}
              />
              <div className="p-6">
                <span className="text-club-red text-sm font-semibold" data-testid={`news-time-${article.id}`}>
                  {article.time}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 leading-tight" data-testid={`news-title-${article.id}`}>
                  {article.title}
                </h3>
                <p className="text-club-muted mb-4" data-testid={`news-excerpt-${article.id}`}>
                  {article.excerpt}
                </p>
                <a 
                  href="#" 
                  className="text-club-red hover:text-red-400 font-semibold transition-colors"
                  data-testid={`news-read-more-${article.id}`}
                >
                  اقرأ المزيد <i className="fas fa-arrow-left mr-1"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="bg-club-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover-scale"
            data-testid="button-all-news"
          >
            <i className="fas fa-newspaper mr-2"></i>
            جميع الأخبار
          </button>
        </div>
      </div>
    </section>
  );
}
