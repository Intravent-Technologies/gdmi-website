export interface Sermon {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  url: string;
  duration?: string;
}

export const sermons: Sermon[] = [
  {
    id: "1",
    title: "Day 7 (Gaining Insight into the Spiritual Realm, Pt 3) | 21 Days Bible Study",
    date: "August 7, 2025",
    excerpt:
      "Gaining insight into the spiritual realm — understanding how to perceive and operate in the spirit.",
    thumbnail: "https://img.youtube.com/vi/RXnah-9YZwE/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=RXnah-9YZwE&t=2696s",
  },
  {
    id: "2",
    title: "Set Apart for His Glory",
    date: "February 16, 2026",
    excerpt:
      "A message on embracing your divine separation for kingdom impact.",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@gdmichannel",
  },
  {
    id: "3",
    title: "The Year of Divine Speed",
    date: "January 5, 2026",
    excerpt:
      "Prophetic declaration and teaching for the year of accelerated fulfillment.",
    thumbnail: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@gdmichannel",
  },
  {
    id: "4",
    title: "Prayers That Move Mountains",
    date: "December 15, 2025",
    excerpt:
      "Teaching on the kind of prayer that produces tangible results.",
    thumbnail: "https://images.unsplash.com/photo-1447015235532-7cb89b5bd951?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@gdmichannel",
  },
  {
    id: "5",
    title: "Kingdom Finances",
    date: "November 30, 2025",
    excerpt:
      "Understanding God's system for financial abundance and kingdom prosperity.",
    thumbnail: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@gdmichannel",
  },
  {
    id: "6",
    title: "The Power of Prophetic Worship",
    date: "November 10, 2025",
    excerpt:
      "How worship activates the prophetic atmosphere and shifts spiritual realms.",
    thumbnail: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@gdmichannel",
  },
];
