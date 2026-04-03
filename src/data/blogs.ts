import blogImg from "../assets/services/Nails-Extensions.jpeg";

export interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  thumbnail: string;
  shortDescription: string;
  content: string[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Acrylic Nails Extension",
    slug: "acrylic-nails-extension",
    author: "Nails Master Expert",
    date: "02-03-2026",
    thumbnail: blogImg,
    shortDescription: "At Nails Master The Studio, we blend creativity, precision, and care to give you flawless hair transformations.",
    content: [
      "At Nails Master The Studio, we blend creativity, precision, and care to give you flawless hair transformations and beautifully crafted nails. From seamless balayage to stunning acrylic extensions and detailed nail art, every service is designed to exceed expectations in a warm, welcoming space. Step in for a refreshing experience and walk out feeling confident, pampered, and absolutely in love with your look.",
      "At Nails Master The Studio, we blend creativity, precision, and care to give you flawless hair transformations and beautifully crafted nails. From seamless balayage to stunning acrylic extensions and detailed nail art, every service is designed to exceed expectations in a warm, welcoming space. Step in for a refreshing experience and walk out feeling confident, pampered, and absolutely in love with your look.",
      "At Nails Master The Studio, we blend creativity, precision, and care to give you flawless hair transformations and beautifully crafted nails. From seamless balayage to stunning acrylic extensions and detailed nail art, every service is designed to exceed expectations in a warm, welcoming space. Step in for a refreshing experience and walk out feeling confident, pampered, and absolutely in love with your look."
    ]
  },
  {
    id: 2,
    title: "Gel Nails Extension",
    slug: "gel-nails-extension",
    author: "Nails Master Expert",
    date: "05-03-2026",
    thumbnail: blogImg,
    shortDescription: "Discover the durability and shine of gel extensions with our latest techniques.",
    content: [
      "Gel extensions offer a natural look with superior strength. Our experts use high-quality products to ensure your nails look stunning for weeks.",
      "Experience the best nail care at Nails Master The Studio, where we prioritize your nail health and style."
    ]
  },
  {
    id: 3,
    title: "Nail Art Trends 2026",
    slug: "nail-art-trends-2026",
    author: "Style Guru",
    date: "10-03-2026",
    thumbnail: blogImg,
    shortDescription: "Stay ahead of the curve with our guide to the hottest nail art trends this year.",
    content: [
      "From chrome finishes to intricate 3D designs, 2026 is all about bold statements. Our artists are trained in the latest global trends.",
      "Visit us to get the most trendy nail art in town."
    ]
  },
  {
    id: 4,
    title: "Bridal Nail Packages",
    slug: "bridal-nail-packages",
    author: "Wedding Specialist",
    date: "15-03-2026",
    thumbnail: blogImg,
    shortDescription: "Make your special day even more perfect with our curated bridal nail services.",
    content: [
      "Your wedding day deserves nothing but the best. Our bridal packages include everything from classic French tips to elaborate themed art.",
      "We recommend booking your session at least 2 days before the big event for best results."
    ]
  },
  {
    id: 5,
    title: "Classic Manicure Guide",
    slug: "classic-manicure-guide",
    author: "Nail Care Pro",
    date: "20-03-2026",
    thumbnail: blogImg,
    shortDescription: "The foundation of healthy nails starts with a proper manicure. Learn why it matters.",
    content: [
      "A classic manicure is more than just polish; it's about cuticle health and nail strength. Our structured process ensures longevity.",
      "Regular manicures help prevent breakage and maintain the natural beauty of your hands."
    ]
  },
  {
    id: 6,
    title: "Pedicure for Relaxation",
    slug: "pedicure-for-relaxation",
    author: "Wellness Expert",
    date: "25-03-2026",
    thumbnail: blogImg,
    shortDescription: "Treat your feet to the luxury they deserve with our signature spa pedicure.",
    content: [
      "After a long day, there's nothing like a soothing spa pedicure. We use organic scrubs and essential oils to rejuvenate your skin.",
      "Our pedicures include a relaxing massage that improves circulation and relieves stress."
    ]
  }
];
