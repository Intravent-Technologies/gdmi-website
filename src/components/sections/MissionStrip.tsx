"use client";

const missions = [
  {
    image:
      "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/495217322_668921812620875_8688358263259804968_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x768&ctp=s1080x768&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUc14OjA3Bt06LqbLAjZQKbPm6p-DpPbFs-bqn4Ok9sarn9as_VdPwT63R9fOVsrlua9IughpTgGWrOpy7U7nz&_nc_ohc=pp8eRHwca6wQ7kNvwED3MuY&_nc_oc=AdrYxFX0oaMb8te0y8QEj_9BdNbRDRohL4EoH8F4_cl2X4LzOYTshY2Qo_1ogW8BEIg&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=5cM8tMLsaBpsY6_3cvtvaA&_nc_ss=7b2a8&oh=00_Af8mvOc-vq-MpCeSMbiCQ9pjuwu4-fxIGMnSAEQcTs29JA&oe=6A2B70F1",
    symbol: "01",
    title: "Prophecy",
    description:
      "Releasing accurate prophetic words that transform destinies and guide nations.",
  },
  {
    image:
      "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/484895890_625466766966380_217842608764944892_n.jpg?stp=dst-jpg_tt6&cstp=mx843x843&ctp=s843x843&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF63BNSYxa7gUTI-JpK03LC1-BIOR6foB_X4Eg5Hp-gHwnYftug6BY9HdtQUpAf-VPSruOnw-n_QeLeVpvTZEQQ&_nc_ohc=brGtynaGU9AQ7kNvwF5xil7&_nc_oc=AdqZpAXeGKlwDk4uu9z-3H9rDA2mXu_4KQRBew8KOJ3F7MyXLzhCzd67pTKKuCeeXNU&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=c1JfuuAnKlJhFM0uZg_Qtw&_nc_ss=7b2a8&oh=00_Af-RZlZ9KEgTTeSzjOwIflj3jQ0-ccq97cJFE_HLdOpFHQ&oe=6A2B71C0",
    symbol: "02",
    title: "Evangelism",
    description:
      "Winning souls through crusades, outreaches, and prophetic evangelism campaigns.",
  },
  {
    image:
      "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/482246794_625467790299611_6473732889479460716_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1440&ctp=s1440x1440&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHItikPFalHgWre_QgRSxGNZblFUfQvEqtluUVR9C8Sq6jISXdSWtmNbgAJnvnyP4D3DfjMwk6fyXN_P1g1Mrlr&_nc_ohc=rNw7yBcdZz4Q7kNvwEBtkys&_nc_oc=AdrDHdn7DyNZ7HhcZDdKmrCzsBeeTONZPEUWT0zxZjCHWztxsjd5fZ42nbBeQtk1efM&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=-5CMefiFU8o0e1tV3R4D1g&_nc_ss=7b2a8&oh=00_Af_Bi7Y-eUCVcFOr6uYrKXy1F9jXj8YO24gNUV49dinBNA&oe=6A2B76EC",
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
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder-project.svg";
                }}
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
