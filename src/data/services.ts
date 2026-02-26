import nailsExtention from "../assets/services/Nails-Extensions.jpeg";
// import facial from "../assets/services/Facial.jpeg";
import gelPolish from "../assets/services/Gel-Polish.jpeg";
// import hairSpa from "../assets/services/Hair-Spa.jpeg";
// import headMassage from "../assets/services/Head-Massage.jpeg";
import manicure from "../assets/services/Manicure.jpeg";
import nailArt from "../assets/services/Nail-Art.jpeg";
import pedicure from "../assets/services/Pedicure.jpeg";
// import waxing from "../assets/services/Waxing.jpeg";

export interface Service {
  id: number;
  title: string;
  image: string;
  price: number;
  link: string;
}

const phone = "9220309477";

const createWhatsAppLink = (title: string, price: number) => {
  const message = `Hi, I want to book ${title} service priced at ₹${price}+. Please share available slots.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Acrylic Extensions",
    image: nailsExtention,
    price: 800, // lowest in Acrylic
    link: createWhatsAppLink("Acrylic Extensions", 800),
  },
  {
    id: 2,
    title: "Gel Extensions",
    image: gelPolish,
    price: 1000, // lowest in Gel
    link: createWhatsAppLink("Gel Extensions", 1000),
  },
  {
    id: 3,
    title: "Temporary Extensions",
    image: pedicure,
    price: 500, // lowest in Temporary
    link: createWhatsAppLink("Temporary Extensions", 500),
  },
  {
    id: 4,
    title: "Overlay",
    image: manicure,
    price: 500, // lowest in Overlay
    link: createWhatsAppLink("Overlay", 500),
  },
  {
    id: 5,
    title: "Nail Art",
    image: nailArt,
    price: 100, // lowest in Art
    link: createWhatsAppLink("Nail Art", 100),
  },
  {
    id: 6,
    title: "Removal",
    image: nailsExtention,
    price: 300, // lowest in Removal
    link: createWhatsAppLink("Removal", 300),
  },
];