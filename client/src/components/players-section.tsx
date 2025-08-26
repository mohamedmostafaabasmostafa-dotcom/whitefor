export default function PlayersSection() {
  const players = [
    {
      id: 1,
      name: "محمد صلاح",
      number: "10",
      position: "مهاجم",
      goals: 23,
      assists: 12,
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    },
    {
      id: 2,
      name: "أحمد حسن",
      number: "8",
      position: "وسط",
      goals: 8,
      assists: 19,
      image: "https://pixabay.com/get/gcf93b301c430d7848c87f4fa259104f29734dd1d39347b2f9cad2de5b3f74e553599d6810d65ef26669c5c98dd0cb7b6c502cbeb1959201eb143b7d9b0248b50_1280.jpg",
    },
    {
      id: 3,
      name: "خالد محمود",
      number: "4",
      position: "مدافع",
      goals: 2,
      tackles: 89,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    },
    {
      id: 4,
      name: "عمر عبدالله",
      number: "1",
      position: "حارس مرمى",
      saves: 67,
      cleanSheets: 11,
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    },
  ];

  return (
    <section id="players" className="py-20 bg-club-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4" data-testid="players-section-title">
            نجوم <span className="text-club-red">الفريق</span>
          </h2>
          <p className="text-club-muted text-xl" data-testid="players-section-description">تعرف على أبرز لاعبي النادي</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player) => (
            <div 
              key={player.id}
              className="bg-club-bg rounded-xl overflow-hidden shadow-xl hover-scale transition-all duration-300 group"
              data-testid={`player-card-${player.id}`}
            >
              <img 
                src={player.image} 
                alt={player.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`player-image-${player.id}`}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold" data-testid={`player-name-${player.id}`}>{player.name}</h3>
                  <span 
                    className="bg-club-red text-white px-3 py-1 rounded-full text-sm font-semibold"
                    data-testid={`player-number-${player.id}`}
                  >
                    {player.number}
                  </span>
                </div>
                <p className="text-club-muted mb-2" data-testid={`player-position-${player.id}`}>{player.position}</p>
                <div className="flex justify-between text-sm">
                  {player.position === "حارس مرمى" ? (
                    <>
                      <span data-testid={`player-saves-${player.id}`}>التصديات: <strong className="text-club-gold">{player.saves}</strong></span>
                      <span data-testid={`player-clean-sheets-${player.id}`}>الشباك النظيفة: <strong className="text-club-gold">{player.cleanSheets}</strong></span>
                    </>
                  ) : player.position === "مدافع" ? (
                    <>
                      <span data-testid={`player-goals-${player.id}`}>الأهداف: <strong className="text-club-gold">{player.goals}</strong></span>
                      <span data-testid={`player-tackles-${player.id}`}>التدخلات: <strong className="text-club-gold">{player.tackles}</strong></span>
                    </>
                  ) : (
                    <>
                      <span data-testid={`player-goals-${player.id}`}>الأهداف: <strong className="text-club-gold">{player.goals}</strong></span>
                      <span data-testid={`player-assists-${player.id}`}>التمريرات: <strong className="text-club-gold">{player.assists}</strong></span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="bg-club-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover-scale"
            data-testid="button-all-players"
          >
            <i className="fas fa-users mr-2"></i>
            جميع اللاعبين
          </button>
        </div>
      </div>
    </section>
  );
}
