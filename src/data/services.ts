import nailsExtention from "../assets/services/Nails-Extensions.jpeg";
import facial from "../assets/services/Facial.jpeg";
import gelPolish from "../assets/services/Gel-Polish.jpeg";
import hairSpa from "../assets/services/Hair-Spa.jpeg";
import headMassage from "../assets/services/Head-Massage.jpeg";
import manicure from "../assets/services/Manicure.jpeg";
import nailArt from "../assets/services/Nail-Art.jpeg";
import pedicure from "../assets/services/Pedicure.jpeg";
import brochure from "../assets/brochure.pdf";
import brochure2 from "../assets/brochure2.pdf";
import waxing from "../assets/services/Waxing.jpeg";

export interface Service {
  id: number;
  title: string;
  image: string;
  price: number;
  link: string;
  brochure: string;
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
    price: 800,
    link: createWhatsAppLink("Acrylic Extensions", 800),
    brochure: brochure,
  },
  {
    id: 2,
    title: "Gel Extensions",
    image: gelPolish,
    price: 1000,
    link: createWhatsAppLink("Gel Extensions", 1000),
    brochure: brochure,
  },
  {
    id: 3,
    title: "facial",
    image: facial,
    price: 800,
    link: createWhatsAppLink("facial", 800),
    brochure: brochure2,
  },
  {
    id: 4,
    title: "hair cut & wash",
    image: hairSpa,
    price: 250,
    link: createWhatsAppLink("hair cut & wash", 250),
    brochure: brochure2,
  },
  {
    id: 5,
    title: "Overlay",
    image: manicure,
    price: 500,
    link: createWhatsAppLink("Overlay", 500),
    brochure: brochure,
  },
  {
    id: 6,
    title: "Temporary Extensions",
    image: pedicure,
    price: 500,
    link: createWhatsAppLink("Temporary Extensions", 500),
    brochure: brochure,
  },
  {
    id: 7,
    title: "face wax",
    image: waxing,
    price: 70,
    link: createWhatsAppLink("face wax", 70),
    brochure: brochure2,
  },
  {
    id: 8,
    title: "hair colors",
    image: headMassage,
    price: 800,
    link: createWhatsAppLink("hair colors", 800),
    brochure: brochure2,
  },
  {
    id: 9,
    title: "Nail Art",
    image: nailArt,
    price: 100,
    link: createWhatsAppLink("Nail Art", 100),
    brochure: brochure2,
  },
  {
    id: 10,
    title: "Removal",
    image: nailsExtention,
    price: 300,
    link: createWhatsAppLink("Removal", 300),
    brochure: brochure,
  },
  {
    id: 11,
    title: "cleanups",
    image: manicure,
    price: 500,
    link: createWhatsAppLink("cleanups", 500),
    brochure: brochure2,
  },
  {
    id: 12,
    title: "dtan/bleach",
    image: pedicure,
    price: 500,
    link: createWhatsAppLink("dtan/bleach", 500),
    brochure: brochure2,
  },
  {
    id: 13,
    title: "hair treatments",
    image: hairSpa,
    price: 2500,
    link: createWhatsAppLink("nail art", 2500),
    brochure: brochure2,
  },
  {
    id: 14,
    title: "waxing",
    image: waxing,
    price: 100,
    link: createWhatsAppLink("waxing", 100),
    brochure: brochure2,
  },
  {
    id: 15,
    title: "body polishing/ scrubbing",
    image: headMassage,
    price: 500,
    link: createWhatsAppLink("body polishing/ scrubbing", 500),
    brochure: brochure2,
  },
  {
    id: 16,
    title: "manicure/pedicure",
    image: manicure,
    price: 100,
    link: createWhatsAppLink("manicure/pedicure", 400),
    brochure: brochure2,
  },
  {
    id: 17,
    title: "threadwork",
    image: pedicure,
    price: 40,
    link: createWhatsAppLink("threadwork", 40),
    brochure: brochure2,
  },
  {
    id: 18,
    title: "pre bridal packages",
    image: pedicure,
    price: 11500,
    link: createWhatsAppLink("gel polish", 11500),
    brochure: brochure2,
  },
  {
    id: 19,
    title: "hairstyles",
    image: hairSpa,
    price: 500,
    link: createWhatsAppLink("bridal packages", 500),
    brochure: brochure2,
  },
  {
    id: 20,
    title: "hairspa/ head massage",
    image: headMassage,
    price: 300,
    link: createWhatsAppLink("hairspa/ head massage", 300),
    brochure: brochure2,
  },
];

// images needed for 
// Removal (currently nailsExtention) 
// threadwork (pedicure) 
// cleanups (manicure) 
// dtan/bleach (pedicure) 
// body polishing/ scrubbing (headMassage) 
// hairspa/ head massage (headMassage) 
// manicure/pedicure (manicure) 
// hair treatments (hairSpa) 
// pre bridal packages (pedicure)
// hairstyles (hairSpa) 