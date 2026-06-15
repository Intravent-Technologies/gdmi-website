export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  videoUrl?: string;
  goal: number;
  raised: number;
  partners: number;
  category: string;
  status: "active" | "completed";
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "widows-empowerment",
    title: "Widows' Empowerment Fund",
    description:
      "Providing food, financial support, and business grants to widows across Nigerian communities.",
    fullDescription:
      "This project is dedicated to supporting widows in our communities. We provide monthly food supplies, financial assistance, and business startup grants to help widows become self-sufficient. Each outreach season, we support over 200 widows with essential supplies and empowerment tools. Our goal is to reach 1,000 widows annually with sustainable support.",
    image: "/images/projects/widows-empowerment.jpg",
    gallery: [
      "/images/projects/widows-empowerment.jpg",
    ],
    videoUrl: "https://www.youtube.com/watch?v=AQiyBY7uv8s",
    goal: 20000000,
    raised: 12400000,
    partners: 1240,
    category: "Outreach",
    status: "active",
  },
  {
    id: "2",
    slug: "campus-outreach-center",
    title: "Campus Outreach Center",
    description:
      "Establishing prophetic ministry centers on university campuses for continuous discipleship.",
    fullDescription:
      "The Campus Outreach Center project aims to establish physical ministry centers on university campuses. These centers serve as hubs for prophetic ministry, discipleship, and leadership training for students. Each center features a chapel, counseling rooms, and a resource library. We currently operate in 3 campuses with plans to expand to 10.",
    image: "/images/projects/campus-outreach.jpg",
    gallery: [
      "/images/projects/campus-outreach.jpg",
    ],
    goal: 10000000,
    raised: 4800000,
    partners: 872,
    category: "Infrastructure",
    status: "active",
  },
  {
    id: "3",
    slug: "prophetic-conference-fund",
    title: "Prophetic Conference Fund",
    description:
      "Sponsoring prophetic conferences that bring spiritual awakening to cities across Nigeria.",
    fullDescription:
      "The Prophetic Conference Fund supports the logistics, venue, and outreach materials for our prophetic conferences across Nigeria. These conferences have led to thousands of lives being transformed through prophetic ministry. Your partnership helps us reach more cities with the prophetic word.",
    image: "/images/projects/prophetic-conference.jpg",
    gallery: [
      "/images/projects/prophetic-conference.jpg",
    ],
    goal: 15000000,
    raised: 9000000,
    partners: 1056,
    category: "Conference",
    status: "active",
  },
];
