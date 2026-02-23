export interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  designation?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kashish Rawat",
    designation: "Google Rating ★ 4.5/5",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
  },
  {
    id: 2,
    name: "Riya Sharma",
    designation: "Verified Client",
    feedback:
      "Excellent service and professional staff. The ambience is modern and relaxing. Highly recommended for nail extensions.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
  },
  {
    id: 3,
    name: "Neha Verma",
    designation: "Regular Customer",
    feedback:
      "Very clean setup and premium experience. Staff is polite and understands exactly what you want.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
  },
  {
    id: 4,
    name: "Aditi Singh",
    designation: "Happy Client",
    feedback:
      "Loved the service quality and detailing. Will definitely visit again.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcWsjzIu6u-cN_bQdtA_ybnUnH2-w0fBiRJ4e3V9EXwoLQv0pid4JYR-9cU3ewJmuXPGC4laSmk1hELlvc-2NOtNbiTDpLWL0OGUlnp_pu0Zg6kcVyXVTD1Lt6siX3SOyDFuBC=w408-h306-k-no",
  },
];
