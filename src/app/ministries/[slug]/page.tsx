import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, Calendar, MapPin, Users, Flame,
  Heart, Cross, Award, Clock, Quote, CheckCircle2,
  ChevronRight, Image as ImageIcon,
} from "lucide-react";

interface MinistryData {
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string[];
  highlights: string[];
  stats: { label: string; value: string; icon: string }[];
  schedule: { time: string; activity: string }[];
  testimonials: { name: string; quote: string; role: string }[];
  image: string;
  gallery: string[];
  location: string;
  frequency: string;
  category: string;
  expectList: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="size-5" />,
  flame: <Flame className="size-5" />,
  heart: <Heart className="size-5" />,
  cross: <Cross className="size-5" />,
  award: <Award className="size-5" />,
  clock: <Clock className="size-5" />,
};

const ministries: Record<string, MinistryData> = {
  "lagos-prophetic-conference": {
    title: "Lagos Prophetic Conference",
    subtitle: "Nigeria's premier gathering of prophetic voices",
    shortDesc: "A flagship event where the prophetic mantle is stirred through teaching, impartation, and divine encounter.",
    description: [
      "The Lagos Prophetic Conference is the flagship prophetic gathering of GDMI, drawing hundreds of believers from across Nigeria and beyond. It is a concentrated season of prophetic ministry where attendees receive accurate prophetic direction, deep revelatory teaching, and encounter the transforming power of the Holy Spirit in a tangible way.",
      "Each edition of the conference features seasoned prophetic ministers, intensive teaching sessions, personal prophecy sessions, and powerful times of worship and intercession. The atmosphere is charged with the manifest presence of God, and testimonies of healings, deliverances, and life transformations are common.",
      "Whether you are a seasoned minister, a young believer hungry for more of God, or someone seeking direction for your life, the Lagos Prophetic Conference is designed to move you from where you are to where God wants you to be.",
    ],
    highlights: [
      "Prophetic ministry and personal prophecy sessions",
      "Intensive teaching and training workshops on the prophetic",
      "Prayer, worship, and impartation services",
      "Networking with prophetic ministers from across the nation",
      "Youth prophetic activation and mentorship track",
    ],
    stats: [
      { label: "Attendees per Edition", value: "1,200+", icon: "users" },
      { label: "Souls Saved", value: "3,500+", icon: "cross" },
      { label: "Ministers Trained", value: "500+", icon: "award" },
      { label: "Years Running", value: "6+", icon: "clock" },
    ],
    schedule: [
      { time: "Day 1 — 9:00 AM", activity: "Opening Session: The Prophetic Mandate" },
      { time: "Day 1 — 2:00 PM", activity: "Workshop: Hearing God's Voice with Clarity" },
      { time: "Day 1 — 6:00 PM", activity: "Evening Revival: Power Service" },
      { time: "Day 2 — 9:00 AM", activity: "Teaching: The Office of the Prophet" },
      { time: "Day 2 — 2:00 PM", activity: "Practical Session: Prophetic Activation" },
      { time: "Day 2 — 6:00 PM", activity: "Graduation & Impartation Service" },
    ],
    testimonials: [
      { name: "Pastor Emeka", quote: "The Lagos Prophetic Conference changed my ministry forever. I received clarity on my prophetic calling and clear direction for my church.", role: "Senior Pastor, Lagos" },
      { name: "Sister Grace", quote: "I attended seeking direction about my career. Not only did God speak specifically to me, but I also received healing from a long-term illness.", role: "Conference Attendee" },
      { name: "Brother Tunde", quote: "The activation sessions are incredible. I never knew I could flow in the prophetic until I attended this conference.", role: "Youth Minister" },
    ],
    image: "/images/projects/prophetic-conference.jpg",
    gallery: [
      "/images/projects/prophetic-conference.jpg",
      "/images/mission-prophecy.jpg",
      "/images/projects/campus-outreach.jpg",
      "/images/mission-evangelism.jpg",
      "/images/projects/widows-empowerment.jpg",
      "/images/mission-discipleship.jpg",
    ],
    location: "Lagos, Nigeria",
    frequency: "Annual",
    category: "Prophetic Conference",
    expectList: [
      "Life-transforming prophetic ministry",
      "Hands-on training in prophetic operations",
      "Personal prophecy and prayer sessions",
      "Deep revelational teaching from God's Word",
      "Fellowship with like-minded believers",
      "Impartation and activation of spiritual gifts",
    ],
  },
  "ibadan-prophetic-conference": {
    title: "Ibadan Prophetic Conference",
    subtitle: "Extending the prophetic mandate to the ancient city",
    shortDesc: "A prophetic gathering in Ibadan marked by divine encounter, accuracy, and equipping for end-time harvest.",
    description: [
      "The Ibadan Prophetic Conference brings the prophetic mandate to the ancient city of Ibadan. This conference is a powerful time of divine encounter where God's prophetic word is released with accuracy and the body of Christ is equipped for the end-time harvest.",
      "Attendees experience a unique blend of deep biblical teaching on the prophetic, practical activation sessions, and powerful worship. The conference is known for its atmosphere of faith and expectation, where miracles, healings, and prophetic breakthroughs are the norm.",
      "Special emphasis is placed on raising young prophetic voices and equipping local church leaders with the tools they need to operate effectively in the prophetic ministry.",
    ],
    highlights: [
      "Prophetic declarations and focused prayer sessions",
      "In-depth biblical teaching on the prophetic ministry",
      "Impartation services for spiritual gifts",
      "Youth prophetic activation and mentorship",
      "Leadership training for local church ministers",
    ],
    stats: [
      { label: "Attendees per Edition", value: "800+", icon: "users" },
      { label: "Souls Won", value: "2,000+", icon: "cross" },
      { label: "Churches Represented", value: "60+", icon: "heart" },
      { label: "Years Running", value: "4+", icon: "clock" },
    ],
    schedule: [
      { time: "Day 1 — 10:00 AM", activity: "Opening: Prophetic Worship & Prayer" },
      { time: "Day 1 — 2:00 PM", activity: "Teaching: Understanding Prophetic Timing" },
      { time: "Day 1 — 6:00 PM", activity: "Evening Crusade: Power Encounter" },
      { time: "Day 2 — 9:00 AM", activity: "Workshop: Activating the Prophetic Gift" },
      { time: "Day 2 — 2:00 PM", activity: "Leadership Session: Shepherding the Prophetic" },
      { time: "Day 2 — 5:00 PM", activity: "Closing: Impartation & Commissioning" },
    ],
    testimonials: [
      { name: "Rev. Samuel", quote: "The teaching on prophetic timing was eye-opening. I now understand how to align my ministry with God's calendar.", role: "Church Pastor, Ibadan" },
      { name: "Sister Bose", quote: "I gave my life to Christ at this conference and received prayer for my marriage. My husband and I are now serving God together.", role: "New Convert" },
      { name: "Deacon John", quote: "The leadership training session transformed how I mentor young prophets in my local assembly. Practical and powerful!", role: "Deacon, Ibadan" },
    ],
    image: "/images/projects/prophetic-conference.jpg",
    gallery: [
      "/images/projects/prophetic-conference.jpg",
      "/images/mission-evangelism.jpg",
      "/images/projects/campus-outreach.jpg",
      "/images/mission-discipleship.jpg",
      "/images/mission-prophecy.jpg",
      "/images/projects/widows-empowerment.jpg",
    ],
    location: "Ibadan, Oyo State, Nigeria",
    frequency: "Annual",
    category: "Prophetic Conference",
    expectList: [
      "Powerful prophetic ministry and declarations",
      "Practical workshops on prophetic operation",
      "Leadership and mentorship sessions",
      "Personal ministry and prayer",
      "Networking with ministers across the region",
      "Divine direction for your life and ministry",
    ],
  },
  "pln-ui": {
    title: "PLN-UI Campus Outreach",
    subtitle: "Reaching the next generation at the University of Ibadan",
    shortDesc: "A dynamic campus outreach bringing the prophetic word to students at PLN-UI through evangelism and discipleship.",
    description: [
      "The PLN-UI Campus Outreach is a vibrant evangelistic initiative that brings the prophetic gospel to students at the Premier League of Nations University of Ibadan (PLN-UI). This outreach focuses on winning souls, discipling young believers, and raising prophetic voices on campus.",
      "Through open-air crusades, classroom invasions, fellowship meetings, and one-on-one mentorship, the outreach team creates an atmosphere where students encounter God personally. Many students have received prophetic direction for their academics, careers, and spiritual lives.",
      "The outreach also trains campus fellowship leaders in prophetic ministry, ensuring that the move of God continues on campus long after each outreach event.",
    ],
    highlights: [
      "Campus-wide evangelism and open-air crusades",
      "Prophetic ministry and personal prophecy for students",
      "Leadership training for campus fellowship executives",
      "One-on-one mentorship and counseling sessions",
      "Follow-up discipleship programs",
    ],
    stats: [
      { label: "Students Reached", value: "5,000+", icon: "users" },
      { label: "Decisions for Christ", value: "1,200+", icon: "cross" },
      { label: "Student Leaders Trained", value: "200+", icon: "award" },
      { label: "Campus Fellowships Planted", value: "8", icon: "heart" },
    ],
    schedule: [
      { time: "Week 1 — Mon-Fri", activity: "Campus Visitation & Evangelism" },
      { time: "Week 1 — Saturday", activity: "Youth Rally & Prophetic Service" },
      { time: "Week 2 — Mon-Wed", activity: "Leadership Training Workshops" },
      { time: "Week 2 — Thursday", activity: "Campus Crusade: Open-Air Service" },
      { time: "Week 2 — Friday", activity: "Follow-up & Discipleship Setup" },
    ],
    testimonials: [
      { name: "Michael A.", quote: "I was struggling with my faith until the outreach team came. They prayed with me, and I received a fresh encounter with God. Now I lead the campus fellowship!", role: "Student, PLN-UI" },
      { name: "Esther O.", quote: "The prophetic word I received during the outreach gave me clarity about my course of study. I have peace and direction now.", role: "Final Year Student" },
      { name: "David U.", quote: "The leadership training equipped me to pastor my fellowship effectively. We've grown from 15 to 50 members in one session.", role: "Fellowship President" },
    ],
    image: "/images/projects/campus-outreach.jpg",
    gallery: [
      "/images/projects/campus-outreach.jpg",
      "/images/mission-evangelism.jpg",
      "/images/mission-discipleship.jpg",
      "/images/projects/prophetic-conference.jpg",
      "/images/projects/widows-empowerment.jpg",
    ],
    location: "PLN-UI Campus, Ibadan",
    frequency: "Quarterly",
    category: "Campus Outreach",
    expectList: [
      "Passionate gospel outreach and soul-winning",
      "Prophetic ministry tailored to students",
      "Practical leadership development",
      "Mentorship from experienced ministers",
      "Community and fellowship connections",
      "Follow-up support and discipleship",
    ],
  },
  "poly-ibadan": {
    title: "POLY Ibadan Campus Outreach",
    subtitle: "Transforming lives at The Polytechnic Ibadan",
    shortDesc: "An evangelistic outreach reaching Polytechnic students with the prophetic gospel through crusades and discipleship.",
    description: [
      "The POLY Ibadan Campus Outreach is a high-impact evangelistic initiative that reaches students at The Polytechnic Ibadan with the prophetic gospel. The outreach is designed to meet students where they are, addressing their spiritual, academic, and personal challenges through the power of God's Word and prophetic ministry.",
      "Through open-air crusades, classroom-to-classroom evangelism, seminars, and personal ministry sessions, students encounter God in transformative ways. The outreach has recorded numerous testimonies of salvation, deliverance, healing, and prophetic direction.",
      "Beyond the crusade events, the outreach establishes ongoing discipleship structures on campus, ensuring that new converts are nurtured and raised in the faith. Student leaders are identified and trained to carry the prophetic mantle on their campus.",
    ],
    highlights: [
      "Open-air crusades with mass evangelism",
      "Prophetic evangelism training for student volunteers",
      "Campus fellowship strengthening and planting",
      "Prayer and counseling sessions for students",
      "Follow-up and ongoing discipleship programs",
    ],
    stats: [
      { label: "Students Reached", value: "4,000+", icon: "users" },
      { label: "Souls Won", value: "950+", icon: "cross" },
      { label: "Volunteers Trained", value: "150+", icon: "award" },
      { label: "Active Fellowships", value: "5", icon: "heart" },
    ],
    schedule: [
      { time: "Week 1 — Mon-Fri", activity: "Evangelism Training & Campus Outreach" },
      { time: "Week 1 — Saturday", activity: "Youth Conference & Prophetic Session" },
      { time: "Week 2 — Mon-Wed", activity: "Discipleship & Leadership Classes" },
      { time: "Week 2 — Thursday", activity: "Grand Crusade: Healing & Miracle Service" },
      { time: "Week 2 — Saturday", activity: "Follow-up Visitation & Closing" },
    ],
    testimonials: [
      { name: "Susan K.", quote: "I was depressed and ready to drop out of school. The prayer session during the outreach lifted the heaviness, and now I'm doing well academically and spiritually.", role: "Student, POLY Ibadan" },
      { name: "Emmanuel T.", quote: "I received Christ during the crusade. The follow-up team has been instrumental in my growth. I'm now part of the campus choir!", role: "New Believer" },
      { name: "Pastor Gabriel", quote: "This outreach has reinvigorated the Christian community on campus. We've seen a new wave of zeal among the students.", role: "Campus Chaplain" },
    ],
    image: "/images/projects/campus-outreach.jpg",
    gallery: [
      "/images/projects/campus-outreach.jpg",
      "/images/mission-evangelism.jpg",
      "/images/projects/prophetic-conference.jpg",
      "/images/mission-discipleship.jpg",
      "/images/projects/widows-empowerment.jpg",
      "/images/mission-prophecy.jpg",
    ],
    location: "The Polytechnic Ibadan",
    frequency: "Quarterly",
    category: "Campus Outreach",
    expectList: [
      "Dynamic gospel crusades and evangelism",
      "Prophetic ministry and personal prayer",
      "Leadership and discipleship training",
      "Student mentorship programs",
      "Community outreach and social impact",
      "Long-term spiritual follow-up",
    ],
  },
  "impact-campus": {
    title: "Impact Campus Outreach",
    subtitle: "Igniting prophetic fire on campus",
    shortDesc: "A high-energy campus outreach reaching students with prophetic evangelism, leadership training, and discipleship.",
    description: [
      "Impact Campus Outreach is a dynamic ministry initiative that brings the prophetic gospel to tertiary institution students across Nigeria. With a focus on igniting prophetic fire in the next generation, this outreach combines fervent evangelism, practical leadership training, and ongoing discipleship to raise campus prophets and nation-changers.",
      "Through crusades, fellowship strengthening, mentorship programs, and community service, Impact Campus creates an environment where students encounter God personally, receive prophetic direction for their lives, and are equipped to become leaders in their generation.",
      "The outreach has established a strong presence on multiple campuses, with a structured follow-up system that ensures every convert is nurtured and every young prophet is trained and released into their calling.",
    ],
    highlights: [
      "Campus-wide prophetic crusades and revival services",
      "Leadership training and mentorship for student leaders",
      "Prophetic activation and gift-discovery workshops",
      "Community service and outreach projects",
      "Follow-up discipleship and fellowship planting",
    ],
    stats: [
      { label: "Campuses Reached", value: "10+", icon: "users" },
      { label: "Students Impacted", value: "3,000+", icon: "cross" },
      { label: "Student Leaders Trained", value: "180+", icon: "award" },
      { label: "Active Campus Fellowships", value: "6", icon: "heart" },
    ],
    schedule: [
      { time: "Month 1", activity: "Campus Survey & Prayer Mapping" },
      { time: "Month 2", activity: "Pre-Crusade Evangelism & Mobilization" },
      { time: "Month 3", activity: "Impact Crusade & Prophetic Conference" },
      { time: "Month 4", activity: "Follow-up & Leadership Training" },
    ],
    testimonials: [
      { name: "Sarah I.", quote: "Impact Campus transformed my walk with God. I received training in prophetic ministry and now lead the prayer fellowship on my campus.", role: "Student Leader" },
      { name: "Daniel K.", quote: "The mentorship I received through Impact Campus gave me clarity for my future. I'm now pursuing ministry while studying.", role: "Impact Campus Graduate" },
      { name: "Pastor Michael", quote: "The Impact Campus team has been a blessing to our university fellowship. Their training program has raised capable student leaders.", role: "Campus Fellowship Patron" },
    ],
    image: "/images/projects/campus-outreach.jpg",
    gallery: [
      "/images/projects/campus-outreach.jpg",
      "/images/mission-evangelism.jpg",
      "/images/projects/prophetic-conference.jpg",
      "/images/mission-discipleship.jpg",
      "/images/projects/widows-empowerment.jpg",
    ],
    location: "Multiple Campuses Across Nigeria",
    frequency: "Ongoing",
    category: "Campus Outreach",
    expectList: [
      "Dynamic prophetic crusades and revival meetings",
      "Practical leadership development and training",
      "Personal mentorship and prophetic direction",
      "Community impact and service projects",
      "Campus fellowship strengthening",
      "Long-term spiritual growth and follow-up",
    ],
  },
  "prophetic-prayers": {
    title: "Prophetic Prayers with PG&PY",
    subtitle: "Prayer sessions that shift atmospheres",
    shortDesc: "Spirit-directed prayer gatherings led by Prophet Gbenga Dahunsi, marked by prophetic intercession and breakthrough declarations.",
    description: [
      "Prophetic Prayers with PG&PY is a dedicated prayer gathering where Prophet Gbenga Dahunsi leads believers in Spirit-directed, prophetic intercession. These sessions are not ordinary prayer meetings — they are divine encounters where heaven invades earth and atmospheres are transformed.",
      "Each session combines Spirit-led worship, prophetic declarations, targeted intercession for specific needs, and personal prophetic ministry. Participants report breakthroughs in their finances, health, marriages, careers, and spiritual lives after attending these powerful prayer gatherings.",
      "The sessions are held both physically and online, making them accessible to believers across Nigeria and the diaspora. The prophetic precision and depth of prayer ministry make each session a must-attend for anyone seeking divine direction and breakthrough.",
    ],
    highlights: [
      "Prophetic intercession led by the Holy Spirit",
      "Breakthrough and deliverance prayer sessions",
      "Personal prophetic ministry for attendees",
      "Word-based declarations and prophesying",
      "Online streaming for global participation",
    ],
    stats: [
      { label: "Active Participants", value: "300+", icon: "users" },
      { label: "Testimonies Recorded", value: "200+", icon: "heart" },
      { label: "Online Viewers per Session", value: "500+", icon: "users" },
      { label: "Sessions Held", value: "100+", icon: "clock" },
    ],
    schedule: [
      { time: "Every 1st Saturday", activity: "Monthly Prophetic Prayer Session" },
      { time: "Every Wednesday", activity: "Weekly Midweek Prayer & Prophecy" },
      { time: "Monthly", activity: "Special Breakthrough Prayer Night" },
      { time: "Quarterly", activity: "Prophetic Prayers & Worship Retreat" },
    ],
    testimonials: [
      { name: "Mary O.", quote: "I had been battling sickness for two years. During the prophetic prayer session, the prophet declared healing over me, and from that day, I have been completely well.", role: "Prayer Session Attendee" },
      { name: "Brother Segun", quote: "My business was collapsing until I joined the prayer sessions. The prophetic declarations turned things around. Now my business is thriving!", role: "Businessman" },
      { name: "Sister Chioma", quote: "The prayer sessions have transformed my prayer life. I've learned to pray with authority and see results. My family has experienced breakthrough after breakthrough.", role: "Regular Participant" },
    ],
    image: "/images/projects/prophetic-conference.jpg",
    gallery: [
      "/images/projects/prophetic-conference.jpg",
      "/images/mission-prophecy.jpg",
      "/images/mission-evangelism.jpg",
      "/images/projects/widows-empowerment.jpg",
    ],
    location: "Online & Physical Venues",
    frequency: "Weekly & Monthly",
    category: "Prayer",
    expectList: [
      "Powerful prophetic intercession",
      "Breakthrough and deliverance ministry",
      "Personal prophetic direction",
      "Word-based declarations that shift circumstances",
      "Community of fervent praying believers",
      "Access to recorded sessions for replay",
    ],
  },
};

type Slug = keyof typeof ministries;

export async function generateStaticParams() {
  return Object.keys(ministries).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const m = ministries[params.slug as Slug];
  if (!m) return { title: "Not Found | GDMI" };
  return {
    title: `${m.title} | GDMI Ministries`,
    description: m.shortDesc,
  };
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-card rounded-xl p-5 border border-border text-center hover:shadow-[0_4px_15px_-8px_rgba(15,29,53,0.06)] transition-shadow">
      <span className="flex items-center justify-center mx-auto mb-3 size-10 rounded-xl bg-gold/10 text-gold">
        {iconMap[icon] || <Users className="size-5" />}
      </span>
      <p className="text-2xl sm:text-3xl font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function TestimonialCard({ name, quote, role }: { name: string; quote: string; role: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border relative">
      <Quote className="size-8 text-gold/20 absolute top-4 right-4" />
      <p className="text-sm text-muted-foreground leading-relaxed italic relative z-10">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-sm font-semibold text-primary">{name}</p>
        <p className="text-xs text-muted-foreground/60">{role}</p>
      </div>
    </div>
  );
}

export default async function MinistryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const m = ministries[params.slug as Slug];
  if (!m) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link
            href="/ministries"
            className="inline-flex items-center gap-1.5 text-gold/60 hover:text-gold text-xs font-semibold tracking-wider uppercase transition-colors mb-4"
          >
            <ArrowLeft className="size-3" />
            All Ministries
          </Link>
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">
            {m.category}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            {m.title}
          </h1>
          <p className="text-white/60 mt-3 text-sm max-w-2xl mx-auto leading-relaxed">
            {m.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 text-white/40 text-xs flex-wrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {m.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {m.frequency}
            </span>
          </div>
        </div>
      </section>

      {/* About + Image */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden border border-border shadow-[0_8px_25px_-8px_rgba(0,0,0,0.08)] sticky top-24">
              <div className="aspect-[4/3] bg-muted">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">About</p>
              <h2 className="text-3xl font-bold text-primary mt-2">{m.title}</h2>
              <div className="mt-4 space-y-4">
                {m.description.map((para, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                  <Flame className="size-4 text-gold" />
                  Key Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {m.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Impact</p>
            <h2 className="text-3xl font-bold text-primary mt-2">By the Numbers</h2>
            <p className="text-muted-foreground mt-2 text-sm">God&apos;s faithfulness through {m.title}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {m.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Experience</p>
              <h2 className="text-3xl font-bold text-primary mt-2">What to Expect</h2>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                Every session of {m.title} is designed to bring you closer to God and equip you for your prophetic destiny.
              </p>
              <ul className="mt-6 space-y-3">
                {m.expectList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center size-6 rounded-full bg-gold/10 text-gold shrink-0 mt-0.5">
                      <CheckCircle2 className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="text-sm font-semibold text-gold uppercase tracking-wider flex items-center gap-2 mb-6">
                <Clock className="size-4" />
                Program Schedule
              </h3>
              <div className="space-y-4">
                {m.schedule.map((item) => (
                  <div key={item.activity} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <span className="text-[11px] font-semibold text-gold whitespace-nowrap min-w-[100px] pt-0.5">
                      {item.time}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Moments</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Photo Gallery</h2>
            <p className="text-muted-foreground mt-2 text-sm">A glimpse into {m.title}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {m.gallery.map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-border aspect-[4/3] bg-card group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`${m.title} ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Testimonies</p>
            <h2 className="text-3xl font-bold text-primary mt-2">What People Are Saying</h2>
            <p className="text-muted-foreground mt-2 text-sm">Real lives changed through {m.title}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {m.testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Users className="size-10 text-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get Involved</h2>
          <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            Are you ready to be part of what God is doing through {m.title}?
            Partner financially, volunteer your time, or reach out to learn more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/give"
              className="inline-flex items-center gap-2 bg-gold text-primary px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-gold-light transition-all shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]"
            >
              <Heart className="size-4" />
              Become a Partner
            </Link>
            <Link
              href="/join#volunteer"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/20 transition-all"
            >
              <Users className="size-4" />
              Volunteer With Us
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-white/10 text-white/60 border border-white/10 px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/15 hover:text-white transition-all"
            >
              Upcoming Events
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
