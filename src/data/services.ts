import nailsExtention from "../assets/services/Nails-Extensions.jpeg";
import facial from "../assets/services/Facial.jpeg";
import gelPolish from "../assets/services/Gel-Polish.jpeg";
import hairSpa from "../assets/services/Hair-Spa.jpeg";
import headMassage from "../assets/services/Head-Massage.jpeg";
import manicure from "../assets/services/Manicure.jpeg";
import nailArt from "../assets/services/Nail-Art.jpeg";
import pedicure from "../assets/services/Pedicure.jpeg";
import waxing from "../assets/services/Waxing.jpeg";

export interface Service {
  id: number;
  title: string;
  image: string;
  price: number;
  link: string;
}

const phone = "9220309477";

const createWhatsAppLink = (title: string, price: number) => {
  const message = `Hi, I want to book ${title} service priced at ₹${price}. Please share available slots.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Nails Extensions",
    image: nailsExtention,
    price: 1000,
    link: createWhatsAppLink("Nails Extensions", 1000),
  },
  {
    id: 2,
    title: "Gel Polish",
    image: gelPolish,
    price: 800,
    link: createWhatsAppLink("Gel Polish", 800),
  },
  {
    id: 3,
    title: "Manicure",
    image: manicure,
    price: 600,
    link: createWhatsAppLink("Manicure", 600),
  },
  {
    id: 4,
    title: "Pedicure",
    image: pedicure,
    price: 700,
    link: createWhatsAppLink("Pedicure", 700),
  },
  {
    id: 5,
    title: "Nail Art",
    image: nailArt,
    price: 500,
    link: createWhatsAppLink("Nail Art", 500),
  },
  {
    id: 6,
    title: "Hair Spa",
    image: hairSpa,
    price: 1200,
    link: createWhatsAppLink("Hair Spa", 1200),
  },
  {
    id: 7,
    title: "Facial",
    image: facial,
    price: 1500,
    link: createWhatsAppLink("Facial", 1500),
  },
  {
    id: 8,
    title: "Head Massage",
    image: headMassage,
    price: 400,
    link: createWhatsAppLink("Head Massage", 400),
  },
  {
    id: 9,
    title: "Waxing",
    image: waxing,
    price: 900,
    link: createWhatsAppLink("Waxing", 900),
  },
];