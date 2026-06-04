const missions = [
  {
    image:
      "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/484871540_626450703534653_3582917198373400068_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEKslQblNSlgHychrX_sKlpoVsj1RjXAsuhWyPVGNcCyytMwmIlJC3hDixeuGeEqtq-8vnpCyT6uzPE-cABe8ZO&_nc_ohc=nct1aokkq2oQ7kNvwGDrhTK&_nc_oc=AdpcgEHNe9wWzsSt9QdGy5q8u6hoDWM1gfgudqJNDMxsgkTKHbdTU35p3AGY4guNy8o&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=zdmh6Gn9Jkp8Bf79dBvCDQ&_nc_ss=7b2a8&oh=00_Af-c6oz715TfQ6UqFmKlC4PuApN_jaLgikHdwygTBxdTiw&oe=6A242914",
    symbol: "01",
    title: "Prophecy",
    description:
      "Releasing accurate prophetic words that transform destinies and guide nations.",
  },
  {
    image:
      "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/484895890_625466766966380_217842608764944892_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF63BNSYxa7gUTI-JpK03LC1-BIOR6foB_X4Eg5Hp-gHwnYftug6BY9HdtQUpAf-VPSruOnw-n_QeLeVpvTZEQQ&_nc_ohc=StYlhznTPfUQ7kNvwHB7AYC&_nc_oc=Adq0W0IRGMso8PECZKPKcCUo9ctSdHiMDINQpuh1LfTg8aA0bsDmNtXG6GRmTrQF3hE&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=Ky7hwaz_OEyj9GmtG5u9EQ&_nc_ss=7b2a8&oh=00_Af_YTSfHE0O885X4SdmD-rGEjQNncQTe7gSz1PEM-QPcLw&oe=6A243180",
    symbol: "02",
    title: "Evangelism",
    description:
      "Winning souls through crusades, outreaches, and prophetic evangelism campaigns.",
  },
  {
    image:
      "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/482247380_625467900299600_919649910819387116_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGd6tBmX_QsRkMsMAqYAJLLIkXu4LM4SmciRe7gszhKZwOmpnWfpAiRQpC-ygSqeA35gjrlZzGuuvKJHeyczmkZ&_nc_ohc=-b75xOhDMtIQ7kNvwGFnZyX&_nc_oc=AdqBwr3Xs7PXFma8ZMIRC17IFQ0FLveYYVH3OFCKoKiURHzU3DTVJYWm1dnAeF_uDQg&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=scsQKgFdmahZwSgfem3pGw&_nc_ss=7b2a8&oh=00_Af_B-ieoAE3-04LB_EV3Jjoyw-AnmUnVuZ5v1p2P5Odd8Q&oe=6A2449F6",
    symbol: "03",
    title: "Discipleship",
    description:
      "Raising mature believers through prophetic teaching and mentorship.",
  },
];

export function MissionStrip() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {missions.map((m) => (
            <div
              key={m.title}
              className="group relative h-[420px] overflow-hidden"
            >
              <img
                src={m.image}
                alt={m.title}
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
      </div>
    </section>
  );
}
