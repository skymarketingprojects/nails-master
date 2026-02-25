export interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  designation?: string;
  image?: string;
}

/**
 * Generates a DiceBear initials avatar URL
 */
const generateAvatar = (name: string) => {
  const encodedName = encodeURIComponent(name);
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodedName}`;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Riya Singh",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Wonderful experience, hairs are looking way better than my expectations... Loved the staff... Must visit",
    image: generateAvatar("Riya Singh"),
  },
  {
    id: 2,
    name: "Tanya Gaur",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Very good service, I got my hair colored in balayage and I was very satisfied with it",
    image: generateAvatar("Tanya Gaur"),
  },
  {
    id: 3,
    name: "Ruva Chaudhary",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Am glad to choose you for my hair, totally satisfied with your service and selecting you permanently",
    image: generateAvatar("Ruva Chaudhary"),
  },
  {
    id: 4,
    name: "Shalu Yadav",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Got my nails done and they are too pretty, I can’t stop smiling. Loved it",
    image: generateAvatar("Shalu Yadav"),
  },
  {
    id: 5,
    name: "Shreya Jaiswal",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Had an amazing experience, my nails look absolutely gorgeous and the finishing is perfect",
    image: generateAvatar("Shreya Jaiswal"),
  },
  {
    id: 6,
    name: "Neha Verma",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Best salon experience so far, very polite and professional team. Totally satisfied",
    image: generateAvatar("Neha Verma"),
  },
  {
    id: 7,
    name: "Pooja Sharma",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Loved the ambiance and service. My balayage turned out even better than I imagined",
    image: generateAvatar("Pooja Sharma"),
  },
  {
    id: 8,
    name: "Anjali Mehta",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Super happy with my acrylic nails, the detailing is so neat and beautiful",
    image: generateAvatar("Anjali Mehta"),
  },
  {
    id: 9,
    name: "Simran Kaur",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Very professional team and great service. They truly understand client needs",
    image: generateAvatar("Simran Kaur"),
  },
  {
    id: 10,
    name: "Kritika Jain",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Got my hair smoothening done and the results are just wow. Wonderful experience",
    image: generateAvatar("Kritika Jain"),
  },
  {
    id: 11,
    name: "Ishita Malhotra",
    designation: "Google Rating ★ 5/5",
    feedback:
      "The nail art was done with so much perfection and patience. Extremely happy",
    image: generateAvatar("Ishita Malhotra"),
  },
  {
    id: 12,
    name: "Mehak Arora",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Such a friendly environment and amazing service. My hair color looks stunning",
    image: generateAvatar("Mehak Arora"),
  },
  {
    id: 13,
    name: "Radhika Soni",
    designation: "Google Rating ★ 5/5",
    feedback:
      "Absolutely loved the service and attention to detail. Beyond expectations",
    image: generateAvatar("Radhika Soni"),
  },
  {
    id: 14,
    name: "Tanvi Gupta",
    designation: "Google Rating ★ 5/5",
    feedback:
      "From consultation to final result everything was smooth and professional",
    image: generateAvatar("Tanvi Gupta"),
  },
  {
  id: 15,
  name: "Sanya Kapoor",
  designation: "Google Rating ★ 5/5",
  feedback:
    "Incredible service! My nails are perfectly shaped and the design is exactly what I wanted",
  image: generateAvatar("Sanya Kapoor"),
},
{
  id: 16,
  name: "Priya Malhotra",
  designation: "Google Rating ★ 5/5",
  feedback:
    "My hair color turned out amazing and the staff was very friendly and attentive. Loved the experience!",
  image: generateAvatar("Priya Malhotra"),
},
{
  id: 17,
  name: "Ananya Singh",
  designation: "Google Rating ★ 5/5",
  feedback:
    "Beautiful salon with a welcoming vibe. My acrylic nails are flawless, can’t stop admiring them",
  image: generateAvatar("Ananya Singh"),
},
{
  id: 18,
  name: "Karishma Sharma",
  designation: "Google Rating ★ 5/5",
  feedback:
    "Absolutely thrilled with my hair makeover! The attention to detail is amazing and the results speak for themselves",
  image: generateAvatar("Karishma Sharma"),
},
{
  id: 19,
  name: "Ritika Verma",
  designation: "Google Rating ★ 5/5",
  feedback:
    "I love how professional and patient the team is. My nails look perfect and last so long!",
  image: generateAvatar("Ritika Verma"),
},
{
  id: 20,
  name: "Mira Chawla",
  designation: "Google Rating ★ 5/5",
  feedback:
    "The salon has such a relaxing atmosphere. My hair coloring was flawless and I felt pampered the whole time",
  image: generateAvatar("Mira Chawla"),
},
];