export default function MatchesSection() {
  return (
    <section id="matches" className="py-20 bg-club-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4" data-testid="matches-section-title">
            <span className="text-club-red">المباريات</span> والنتائج
          </h2>
          <p className="text-club-muted text-xl" data-testid="matches-section-description">تابع مباريات الفريق والنتائج</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Previous Match */}
          <div className="bg-club-bg2 rounded-xl p-8 border border-green-500 border-opacity-30" data-testid="previous-match">
            <div className="text-center mb-6">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold" data-testid="match-result-win">فوز</span>
              <p className="text-club-muted mt-2" data-testid="match-competition">الدوري المحلي - الجولة 15</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <img 
                  src="https://pixabay.com/get/g5b35515fb7c2203d777b3ffa03de093a32a6842fdb6abfe8c9b803829b8ce770ec443c3ba31bb734d2f232afcfc4d330963679f830d178aefccf7c62575f59de_1280.jpg" 
                  alt="نادي الأساطير" 
                  className="w-16 h-16 mx-auto mb-2 rounded-full"
                  data-testid="home-team-logo"
                />
                <p className="font-bold" data-testid="home-team-name">نادي الأساطير</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-club-gold" data-testid="match-score">3 - 0</div>
                <p className="text-club-muted text-sm mt-2" data-testid="match-date">الأحد 15 ديسمبر</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="الفريق المنافس" 
                  className="w-16 h-16 mx-auto mb-2 rounded-full"
                  data-testid="away-team-logo"
                />
                <p className="font-bold" data-testid="away-team-name">النادي المنافس</p>
              </div>
            </div>
          </div>
          
          {/* Next Match */}
          <div className="bg-club-bg2 rounded-xl p-8 border border-club-red border-opacity-50" data-testid="next-match">
            <div className="text-center mb-6">
              <span className="bg-club-red text-white px-4 py-2 rounded-full text-sm font-semibold" data-testid="next-match-label">المباراة القادمة</span>
              <p className="text-club-muted mt-2" data-testid="next-match-competition">كأس الملك - نصف النهائي</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <img 
                  src="https://pixabay.com/get/g5b35515fb7c2203d777b3ffa03de093a32a6842fdb6abfe8c9b803829b8ce770ec443c3ba31bb734d2f232afcfc4d330963679f830d178aefccf7c62575f59de_1280.jpg" 
                  alt="نادي الأساطير" 
                  className="w-16 h-16 mx-auto mb-2 rounded-full"
                  data-testid="next-home-team-logo"
                />
                <p className="font-bold" data-testid="next-home-team-name">نادي الأساطير</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold" data-testid="next-match-vs">VS</div>
                <p className="text-club-muted text-sm mt-2" data-testid="next-match-date">السبت 21 ديسمبر</p>
                <p className="text-club-muted text-sm" data-testid="next-match-time">8:00 مساءً</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="النادي القوي" 
                  className="w-16 h-16 mx-auto mb-2 rounded-full"
                  data-testid="next-away-team-logo"
                />
                <p className="font-bold" data-testid="next-away-team-name">النادي القوي</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button 
                className="bg-club-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                data-testid="button-book-ticket"
              >
                <i className="fas fa-ticket-alt mr-2"></i>
                احجز تذكرتك
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
