export interface Attachment {
  fileUrl: string;
  title: string;
  mimeType: string;
  iconLink: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  fullDescription?: string;
  image: string;
  attachments?: Attachment[];
  schedule?: { time: string; activity: string }[];
  status: "upcoming" | "past";
}

export const events: Event[] = [
  {
    id: "1",
    slug: "business-career-summit",
    title: "Set Apart Business & Career Summit",
    category: "Summit",
    date: "June 15–17, 2026",
    time: "9:00 AM – 4:00 PM",
    location: "Ibadan, Nigeria",
    description:
      "A three-day summit raising kingdom-minded entrepreneurs and marketplace leaders who will dominate their industries with prophetic insight.",
    fullDescription:
      "The Set Apart Business & Career Summit is a gathering of professionals, entrepreneurs, and aspiring marketplace leaders. Through prophetic insights, practical workshops, and networking sessions, participants are equipped to excel in their careers and businesses while advancing the kingdom of God.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    schedule: [
      { time: "9:00 AM", activity: "Registration & Welcome" },
      { time: "10:00 AM", activity: "Session 1: The Prophetic Edge in Business" },
      { time: "12:00 PM", activity: "Workshop: Kingdom Economics" },
      { time: "2:00 PM", activity: "Panel: Industry Leaders Speak" },
      { time: "4:00 PM", activity: "Prayer & Closing" },
    ],
    status: "upcoming",
  },
  {
    id: "2",
    slug: "crusades",
    title: "Crusades",
    category: "Crusade",
    date: "July 2026",
    location: "Various Locations",
    description:
      "Massive open-air evangelism campaigns featuring prophetic ministrations, miracles, and souls winning for the kingdom.",
    fullDescription:
      "Our crusades are prophetic evangelism campaigns held in cities across Nigeria. Thousands gather to experience the power of God through preaching, miracles, and salvation. Every crusade is marked by a strong prophetic atmosphere and mass conversions.",
    image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=800&q=80",
    status: "upcoming",
  },
  {
    id: "3",
    slug: "ibadan-prophetic-conference",
    title: "Ibadan Prophetic Conference",
    category: "Prophetic Conference",
    date: "June 26, 2026",
    time: "4:00 PM",
    location: "Ibadan, Nigeria",
    description:
      "A gathering of prophetic voices for a season of divine direction, revelation, and kingdom advancement.",
    fullDescription:
      "The Ibadan Prophetic Conference is a power-packed gathering where the prophetic mantle is released. Attendees receive personal prophecies, teaching on the prophetic office, and activation sessions for prophetic operation.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    schedule: [
      { time: "4:00 PM", activity: "Prophetic Session" },
    ],
    status: "upcoming",
  },
  {
    id: "4",
    slug: "lagos-prophetic-conference",
    title: "Lagos Prophetic Conference",
    category: "Prophetic Conference",
    date: "September 2026",
    location: "Lagos, Nigeria",
    description:
      "Taking the prophetic atmosphere to Lagos with explosive worship, accurate prophetic utterances, and life-changing encounters.",
    fullDescription:
      "The Lagos Prophetic Conference extends the prophetic covering to Nigeria's commercial capital. This conference is known for its intense worship atmosphere and accurate prophetic ministrations that transform destinies.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    status: "upcoming",
  },
  {
    id: "5",
    slug: "prophetic-ladies-conference",
    title: "Prophetic Ladies Conference",
    category: "Women's Conference",
    date: "October 2026",
    location: "Ibadan, Nigeria",
    description:
      "A专属 gathering for prophetic women — daughters of Zion rising to occupy their place in God's end-time agenda.",
    fullDescription:
      "The Prophetic Ladies Conference is designed specifically for women with a prophetic calling. It addresses unique challenges women face in ministry, provides mentorship, and creates a community of prophetic women supporting one another.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04890?auto=format&fit=crop&w=800&q=80",
    status: "upcoming",
  },
  {
    id: "6",
    slug: "campus-outreaches",
    title: "Campus Outreaches",
    category: "Outreach",
    date: "Quarterly",
    location: "Tertiary Institutions Across Nigeria",
    description:
      "Reaching the next generation of leaders with the prophetic word on university and polytechnic campuses.",
    fullDescription:
      "Our campus outreaches target tertiary institutions across Nigeria, reaching students with the gospel and prophetic ministry. Each outreach features prophetic evangelism, campus revival meetings, and leadership training for student believers.",
    image: "https://images.unsplash.com/photo-1559027615-c1dab2f6c9c7?auto=format&fit=crop&w=800&q=80",
    status: "upcoming",
  },
  {
    id: "7",
    slug: "widows-outreaches",
    title: "Widows Outreaches",
    category: "Outreach",
    date: "Bi-Monthly",
    location: "Various Communities",
    description:
      "Extending love and support to widows through food distribution, financial empowerment, and prophetic encouragement.",
    fullDescription:
      "Our Widows Outreach program is the compassion arm of the ministry. We visit widows in their communities, providing food supplies, financial support, business grants, and prophetic encouragement. Each outreach touches 200+ widows.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    status: "upcoming",
  },
];
