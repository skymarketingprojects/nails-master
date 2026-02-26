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
  const message = `Hi, I want to book ${title} service priced at ₹${price}. Please share available slots.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const services: Service[] = [
  // ACRYLIC EXTENSIONS
  {
    id: 1,
    title: "Acrylic Extensions",
    image: nailsExtention,
    price: 800,
    link: createWhatsAppLink("Acrylic Extensions", 800),
  },
  {
    id: 2,
    title: "Acrylic Extension + Color",
    image: nailsExtention,
    price: 1000,
    link: createWhatsAppLink("Acrylic Extension + Color", 1000),
  },
  {
    id: 3,
    title: "Acrylic Extension + French",
    image: nailsExtention,
    price: 1500,
    link: createWhatsAppLink("Acrylic Extension + French", 1500),
  },
  {
    id: 4,
    title: "Acrylic Refill + Color",
    image: nailsExtention,
    price: 800,
    link: createWhatsAppLink("Acrylic Refill + Color", 800),
  },
  {
    id: 5,
    title: "Acrylic Extension + Ombre",
    image: nailsExtention,
    price: 1500,
    link: createWhatsAppLink("Acrylic Extension + Ombre", 1500),
  },
  {
    id: 6,
    title: "Acrylic Extension + Cateye",
    image: nailsExtention,
    price: 1500,
    link: createWhatsAppLink("Acrylic Extension + Cateye", 1500),
  },
  {
    id: 7,
    title: "Acrylic Extension + Glitter",
    image: nailsExtention,
    price: 1300,
    link: createWhatsAppLink("Acrylic Extension + Glitter", 1300),
  },
  {
    id: 8,
    title: "Acrylic Extension + Chrome",
    image: nailsExtention,
    price: 1500,
    link: createWhatsAppLink("Acrylic Extension + Chrome", 1500),
  },

  // GEL EXTENSIONS
  {
    id: 9,
    title: "Gel Extensions",
    image: gelPolish,
    price: 1000,
    link: createWhatsAppLink("Gel Extensions", 1000),
  },
  {
    id: 10,
    title: "Gel Extension + Color",
    image: gelPolish,
    price: 1200,
    link: createWhatsAppLink("Gel Extension + Color", 1200),
  },
  {
    id: 11,
    title: "Gel Extension + French",
    image: gelPolish,
    price: 1800,
    link: createWhatsAppLink("Gel Extension + French", 1800),
  },
  {
    id: 12,
    title: "Gel Refill + Color",
    image: gelPolish,
    price: 1000,
    link: createWhatsAppLink("Gel Refill + Color", 1000),
  },
  {
    id: 13,
    title: "Gel Extension + Ombre",
    image: gelPolish,
    price: 1800,
    link: createWhatsAppLink("Gel Extension + Ombre", 1800),
  },
  {
    id: 14,
    title: "Gel Extension + Cateye",
    image: gelPolish,
    price: 2000,
    link: createWhatsAppLink("Gel Extension + Cateye", 2000),
  },
  {
    id: 15,
    title: "Gel Extension + Glitter",
    image: gelPolish,
    price: 1500,
    link: createWhatsAppLink("Gel Extension + Glitter", 1500),
  },
  {
    id: 16,
    title: "Gel Extension + Chrome",
    image: gelPolish,
    price: 1800,
    link: createWhatsAppLink("Gel Extension + Chrome", 1800),
  },

  // TEMPORARY EXTENSIONS
  {
    id: 17,
    title: "Temporary Extension",
    image: nailsExtention,
    price: 500,
    link: createWhatsAppLink("Temporary Extension", 500),
  },
  {
    id: 18,
    title: "Feet Extension + Color",
    image: pedicure,
    price: 800,
    link: createWhatsAppLink("Feet Extension + Color", 800),
  },
  {
    id: 19,
    title: "Feet Extension + French",
    image: pedicure,
    price: 1200,
    link: createWhatsAppLink("Feet Extension + French", 1200),
  },

  // OVERLAY
  {
    id: 20,
    title: "Overlay",
    image: manicure,
    price: 500,
    link: createWhatsAppLink("Overlay", 500),
  },
  {
    id: 21,
    title: "Overlay + Color",
    image: manicure,
    price: 800,
    link: createWhatsAppLink("Overlay + Color", 800),
  },
  {
    id: 22,
    title: "Overlay + French",
    image: manicure,
    price: 1000,
    link: createWhatsAppLink("Overlay + French", 1000),
  },
  {
    id: 23,
    title: "Overlay + Cateye",
    image: manicure,
    price: 800,
    link: createWhatsAppLink("Overlay + Cateye", 800),
  },
  {
    id: 24,
    title: "Overlay + Glitter",
    image: manicure,
    price: 800,
    link: createWhatsAppLink("Overlay + Glitter", 800),
  },
  {
    id: 25,
    title: "Overlay + Chrome",
    image: manicure,
    price: 800,
    link: createWhatsAppLink("Overlay + Chrome", 800),
  },

  // ART
  {
    id: 26,
    title: "Ombre Art",
    image: nailArt,
    price: 1000,
    link: createWhatsAppLink("Ombre Art", 1000),
  },
  {
    id: 27,
    title: "Glitter Spread",
    image: nailArt,
    price: 1000,
    link: createWhatsAppLink("Glitter Spread", 1000),
  },
  {
    id: 28,
    title: "Stone Art",
    image: nailArt,
    price: 150,
    link: createWhatsAppLink("Stone Art", 150),
  },
  {
    id: 29,
    title: "Brush Art",
    image: nailArt,
    price: 100,
    link: createWhatsAppLink("Brush Art", 100),
  },
  {
    id: 30,
    title: "3D Gel Art",
    image: nailArt,
    price: 200,
    link: createWhatsAppLink("3D Gel Art", 200),
  },
  {
    id: 31,
    title: "3D Acrylic Art",
    image: nailArt,
    price: 200,
    link: createWhatsAppLink("3D Acrylic Art", 200),
  },
  {
    id: 32,
    title: "Dry Flower Art",
    image: nailArt,
    price: 150,
    link: createWhatsAppLink("Dry Flower Art", 150),
  },
  {
    id: 33,
    title: "3D Accessories",
    image: nailArt,
    price: 150,
    link: createWhatsAppLink("3D Accessories", 150),
  },

  // REMOVAL
  {
    id: 34,
    title: "Acrylic / Gel Removal",
    image: nailsExtention,
    price: 500,
    link: createWhatsAppLink("Acrylic / Gel Removal", 500),
  },
  {
    id: 35,
    title: "Temporary Removal",
    image: nailsExtention,
    price: 300,
    link: createWhatsAppLink("Temporary Removal", 300),
  },
  {
    id: 36,
    title: "Gel Paint Removal",
    image: gelPolish,
    price: 300,
    link: createWhatsAppLink("Gel Paint Removal", 300),
  },
  {
    id: 37,
    title: "Feet Extension Removal",
    image: pedicure,
    price: 500,
    link: createWhatsAppLink("Feet Extension Removal", 500),
  },
];