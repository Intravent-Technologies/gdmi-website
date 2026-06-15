import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

const token = process.env.SANITY_API_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!token || !projectId) {
  console.error("Missing SANITY_API_TOKEN or NEXT_PUBLIC_SANITY_PROJECT_ID");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2026-06-06",
  token,
  useCdn: false,
});

async function createDoc(doc: Record<string, unknown>) {
  try {
    const result = await client.create(doc);
    console.log(`  ✓ Created ${doc._type}: "${doc.title || doc._type}" (${result._id})`);
    return result;
  } catch (err) {
    console.error(`  ✗ Failed to create ${doc._type}:`, err instanceof Error ? err.message : err);
  }
}

async function seed() {
  console.log("Seeding Sanity project:", projectId);
  console.log("");

  // ── Events ──
  console.log("--- Events ---");
  const events = [
    {
      _type: "event",
      title: "Set Apart Business & Career Summit",
      slug: { _type: "slug", current: "business-career-summit" },
      category: "Summit",
      date: "2026-06-15",
      time: "9:00 AM – 4:00 PM",
      location: "Ibadan, Nigeria",
      description:
        "A three-day summit raising kingdom-minded entrepreneurs and marketplace leaders who will dominate their industries with prophetic insight.",
      fullDescription:
        "The Set Apart Business & Career Summit is a gathering of professionals, entrepreneurs, and aspiring marketplace leaders. Through prophetic insights, practical workshops, and networking sessions, participants are equipped to excel in their careers and businesses while advancing the kingdom of God.",
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
      _type: "event",
      title: "Crusades",
      slug: { _type: "slug", current: "crusades" },
      category: "Crusade",
      date: "2026-07-01",
      location: "Various Locations",
      description:
        "Massive open-air evangelism campaigns featuring prophetic ministrations, miracles, and souls winning for the kingdom.",
      fullDescription:
        "Our crusades are prophetic evangelism campaigns held in cities across Nigeria. Thousands gather to experience the power of God through preaching, miracles, and salvation. Every crusade is marked by a strong prophetic atmosphere and mass conversions.",
      status: "upcoming",
    },
    {
      _type: "event",
      title: "Ibadan Prophetic Conference",
      slug: { _type: "slug", current: "ibadan-prophetic-conference" },
      category: "Prophetic Conference",
      date: "2026-06-26",
      time: "4:00 PM",
      location: "Ibadan, Nigeria",
      description:
        "A gathering of prophetic voices for a season of divine direction, revelation, and kingdom advancement.",
      fullDescription:
        "The Ibadan Prophetic Conference is a power-packed gathering where the prophetic mantle is released. Attendees receive personal prophecies, teaching on the prophetic office, and activation sessions for prophetic operation.",
      schedule: [{ time: "4:00 PM", activity: "Prophetic Session" }],
      status: "upcoming",
    },
    {
      _type: "event",
      title: "Lagos Prophetic Conference",
      slug: { _type: "slug", current: "lagos-prophetic-conference" },
      category: "Prophetic Conference",
      date: "2026-09-01",
      location: "Lagos, Nigeria",
      description:
        "Taking the prophetic atmosphere to Lagos with explosive worship, accurate prophetic utterances, and life-changing encounters.",
      fullDescription:
        "The Lagos Prophetic Conference extends the prophetic covering to Nigeria's commercial capital. This conference is known for its intense worship atmosphere and accurate prophetic ministrations that transform destinies.",
      status: "upcoming",
    },
    {
      _type: "event",
      title: "Prophetic Ladies Conference",
      slug: { _type: "slug", current: "prophetic-ladies-conference" },
      category: "Women's Conference",
      date: "2026-10-01",
      location: "Ibadan, Nigeria",
      description:
        "A gathering for prophetic women — daughters of Zion rising to occupy their place in God's end-time agenda.",
      fullDescription:
        "The Prophetic Ladies Conference is designed specifically for women with a prophetic calling. It addresses unique challenges women face in ministry, provides mentorship, and creates a community of prophetic women supporting one another.",
      status: "upcoming",
    },
    {
      _type: "event",
      title: "Campus Outreaches",
      slug: { _type: "slug", current: "campus-outreaches" },
      category: "Outreach",
      date: "2026-03-01",
      location: "Tertiary Institutions Across Nigeria",
      description:
        "Reaching the next generation of leaders with the prophetic word on university and polytechnic campuses.",
      fullDescription:
        "Our campus outreaches target tertiary institutions across Nigeria, reaching students with the gospel and prophetic ministry. Each outreach features prophetic evangelism, campus revival meetings, and leadership training for student believers.",
      status: "upcoming",
    },
    {
      _type: "event",
      title: "Widows Outreaches",
      slug: { _type: "slug", current: "widows-outreaches" },
      category: "Outreach",
      date: "2026-02-01",
      location: "Various Communities",
      description:
        "Extending love and support to widows through food distribution, financial empowerment, and prophetic encouragement.",
      fullDescription:
        "Our Widows Outreach program is the compassion arm of the ministry. We visit widows in their communities, providing food supplies, financial support, business grants, and prophetic encouragement. Each outreach touches 200+ widows.",
      status: "upcoming",
    },
  ];

  for (const event of events) {
    await createDoc(event);
  }

  // ── Projects ──
  console.log("\n--- Projects ---");
  const projects = [
    {
      _type: "project",
      title: "Widows' Empowerment Fund",
      slug: { _type: "slug", current: "widows-empowerment" },
      description:
        "Providing food, financial support, and business grants to widows across Nigerian communities.",
      fullDescription:
        "This project is dedicated to supporting widows in our communities. We provide monthly food supplies, financial assistance, and business startup grants to help widows become self-sufficient. Each outreach season, we support over 200 widows with essential supplies and empowerment tools. Our goal is to reach 1,000 widows annually with sustainable support.",
      goal: 20000000,
      raised: 12400000,
      partners: 1240,
      category: "Outreach",
      status: "active",
    },
    {
      _type: "project",
      title: "Campus Outreach Center",
      slug: { _type: "slug", current: "campus-outreach-center" },
      description:
        "Establishing prophetic ministry centers on university campuses for continuous discipleship.",
      fullDescription:
        "The Campus Outreach Center project aims to establish physical ministry centers on university campuses. These centers serve as hubs for prophetic ministry, discipleship, and leadership training for students. Each center features a chapel, counseling rooms, and a resource library. We currently operate in 3 campuses with plans to expand to 10.",
      goal: 10000000,
      raised: 4800000,
      partners: 872,
      category: "Infrastructure",
      status: "active",
    },
    {
      _type: "project",
      title: "Prophetic Conference Fund",
      slug: { _type: "slug", current: "prophetic-conference-fund" },
      description:
        "Sponsoring prophetic conferences that bring spiritual awakening to cities across Nigeria.",
      fullDescription:
        "The Prophetic Conference Fund supports the logistics, venue, and outreach materials for our prophetic conferences across Nigeria. These conferences have led to thousands of lives being transformed through prophetic ministry. Your partnership helps us reach more cities with the prophetic word.",
      goal: 15000000,
      raised: 9000000,
      partners: 1056,
      category: "Conference",
      status: "active",
    },
  ];

  for (const project of projects) {
    await createDoc(project);
  }

  // ── Sermons ──
  console.log("\n--- Sermons ---");
  const sermons = [
    {
      _type: "sermon",
      title: "Day 7 (Gaining Insight into the Spiritual Realm, Pt 3) | 21 Days Bible Study",
      date: "2025-08-07",
      excerpt:
        "Gaining insight into the spiritual realm — understanding how to perceive and operate in the spirit.",
      youtubeUrl: "https://www.youtube.com/watch?v=RXnah-9YZwE&t=2696s",
    },
    {
      _type: "sermon",
      title: "Set Apart for His Glory",
      date: "2026-02-16",
      excerpt:
        "A message on embracing your divine separation for kingdom impact.",
      youtubeUrl: "https://youtube.com/@gdmichannel",
    },
    {
      _type: "sermon",
      title: "The Year of Divine Speed",
      date: "2026-01-05",
      excerpt:
        "Prophetic declaration and teaching for the year of accelerated fulfillment.",
      youtubeUrl: "https://youtube.com/@gdmichannel",
    },
    {
      _type: "sermon",
      title: "Prayers That Move Mountains",
      date: "2025-12-15",
      excerpt:
        "Teaching on the kind of prayer that produces tangible results.",
      youtubeUrl: "https://youtube.com/@gdmichannel",
    },
    {
      _type: "sermon",
      title: "Kingdom Finances",
      date: "2025-11-30",
      excerpt:
        "Understanding God's system for financial abundance and kingdom prosperity.",
      youtubeUrl: "https://youtube.com/@gdmichannel",
    },
    {
      _type: "sermon",
      title: "The Power of Prophetic Worship",
      date: "2025-11-10",
      excerpt:
        "How worship activates the prophetic atmosphere and shifts spiritual realms.",
      youtubeUrl: "https://youtube.com/@gdmichannel",
    },
  ];

  for (const sermon of sermons) {
    await createDoc(sermon);
  }

  console.log("\n✅ Seeding complete!");
}

seed().catch(console.error);
