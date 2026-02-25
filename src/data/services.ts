export interface Service {
  id: number;
  title: string;
  image: string;
  price: number;
  link: string;
}

const phone = "911234567890";

const createWhatsAppLink = (title: string, price: number) => {
  const message = `Hi, I want to book ${title} service priced at ₹${price}. Please share available slots.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Nails Extensions",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 1000,
    link: createWhatsAppLink("Nails Extensions", 1000),
  },
  {
    id: 2,
    title: "Gel Polish",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 800,
    link: createWhatsAppLink("Gel Polish", 800),
  },
  {
    id: 3,
    title: "Manicure",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 600,
    link: createWhatsAppLink("Manicure", 600),
  },
  {
    id: 4,
    title: "Pedicure",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 700,
    link: createWhatsAppLink("Pedicure", 700),
  },
  {
    id: 5,
    title: "Nail Art",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 500,
    link: createWhatsAppLink("Nail Art", 500),
  },
  {
    id: 6,
    title: "Hair Spa",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 1200,
    link: createWhatsAppLink("Hair Spa", 1200),
  },
  {
    id: 7,
    title: "Facial",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 1500,
    link: createWhatsAppLink("Facial", 1500),
  },
  {
    id: 8,
    title: "Head Massage",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 400,
    link: createWhatsAppLink("Head Massage", 400),
  },
  {
    id: 9,
    title: "Waxing",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
    price: 900,
    link: createWhatsAppLink("Waxing", 900),
  },
];