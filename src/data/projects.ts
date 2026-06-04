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
    image: "https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/495344074_666935166152873_1926960511679257473_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_DSDNAEyyQ7KbiJ6VnJ5-V7x7H4B86dtXvHsfgHzp2xGUWzSZodSJWsjtWFIkOgcRXoim39ot7Pw_N6-3G27V&_nc_ohc=bww9GrhTX9gQ7kNvwFxx28_&_nc_oc=AdoWgCxf3uBLtS_uc8ejsTFw5y7Wb2E9nMB75kRlj1ocp5R9E0vVjp4P7h6fCVHtFlc&_nc_zt=23&_nc_ht=scontent-lhr6-2.xx&_nc_gid=0SXqjIXtiHHhxjDmqKbn4Q&_nc_ss=7b2a8&oh=00_Af_UyyuzytGSZ7nuZWZHcNILknccdb6vMoy3qQ98f1MLfA&oe=6A244A26",
    gallery: [
      "https://images.unsplash.com/photo-1504257432389-52343af06ae5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    ],
    videoUrl: "https://youtube.com/@gdmichannel",
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
    image: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/484884948_625467723632951_4498574871761452621_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeG2Wp1SgdKwnHnC5MGyVrzsBbm2FsIG6aYFubYWwgbppiKHTMZPdaXZ-Y9ohUiuDgLTDVDBF3GOBc1f0J-l2x8U&_nc_ohc=GYxbiIcRLgQQ7kNvwH5l1eq&_nc_oc=Ado2yIxHEzoT8tDpZ2snye_sNDaY3xBFUCdh5VmkOVH8MFYUyyg2dFazeUXCZARGBd4&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=Ab066RNwfn3c2Vf2MuaxEw&_nc_ss=7b2a8&oh=00_Af9cjcFf7pZejln4pAKKC2U50MHyxz3iZjaCq3_MeMe9yw&oe=6A245314",
    gallery: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
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
    image: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/623368251_873016202211434_1403129198659442735_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFeVQ-FKYHvMpIsTVtLHZHsYFIgV2bpbO1gUiBXZuls7fAJxRYSnnMfYooaILlaL774__4TEz-2Zpsb7FeOeww0&_nc_ohc=5hzjxLoMu5wQ7kNvwGpcEXg&_nc_oc=AdqGE03cBHaPFs2NqUo3lKFMXVFdpoSF9RtLY3CYLm0GASSkSlDK56MpGlYBPfW6L_E&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=fhJldWh8_7bHWSeHMETeJA&_nc_ss=7b2a8&oh=00_Af-VuWVAlf3ISQYXvf9jLSdHufvl3Z7VbPR48ZOtENYJUg&oe=6A244E44",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=600&q=80",
    ],
    goal: 15000000,
    raised: 9000000,
    partners: 1056,
    category: "Conference",
    status: "active",
  },
];
