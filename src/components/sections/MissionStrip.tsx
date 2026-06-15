const missions = [
  {
    image: "/images/mission-prophecy.jpg",
    symbol: "01",
    title: "Prophecy",
    description:
      "Releasing accurate prophetic words that transform destinies and guide nations.",
  },
  {
    image: "/images/mission-evangelism.jpg",
    symbol: "02",
    title: "Evangelism",
    description:
      "Winning souls through crusades, outreaches, and prophetic evangelism campaigns.",
  },
  {
    image: "/images/mission-discipleship.jpg",
    symbol: "03",
    title: "Discipleship",
    description:
      "Raising mature believers through prophetic teaching and mentorship.",
  },
];

export function MissionStrip() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3">
          {missions.map((m) => (
            <div
              key={m.title}
              className="group relative h-[420px] overflow-hidden"
            >
              <img
                src={m.image}
                alt={m.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10">
                <span className="text-gold/40 text-6xl font-bold leading-none mb-4">
                  {m.symbol}
                </span>
                <div className="w-8 h-px bg-gold/60 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {m.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
