// import { useParams } from "react-router-dom";
// import { locations } from "../data/locations";
// import { LocationContactSection } from "../components/LocationContactSection/LocationContactSection";
// import { HeroSection } from "../components/HeroSection/HeroSection";
// import { TestimonialSection } from "../components/TestimonialSection/TestimonialSection";
// import { LocationGalleryMapSection } from "../components/LocationGalleryMapSection/LocationGalleryMapSection";
// export default function ContactPage() {
//   const { slug } = useParams();

//   const location = locations.find(
//     (loc) => loc.link.replace("contact/", "") === slug
//   );
//   console.log(location);

//   if (!location) {
//     return <div>Location not found</div>;
//   }

//   return (
//     <>
//     <HeroSection/>
//     <LocationContactSection location={location} />
//     <LocationGalleryMapSection location={location} />
//     <TestimonialSection/>
//     </>
//   );
// }
import { useParams } from "react-router-dom";
import { locations } from "../data/locations";
import { LocationContactSection } from "../components/LocationContactSection/LocationContactSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { TestimonialSection } from "../components/TestimonialSection/TestimonialSection";
import { LocationGalleryMapSection } from "../components/LocationGalleryMapSection/LocationGalleryMapSection";

export default function ContactPage() {
  const { slug } = useParams<{ slug: string }>();

  const location = locations.find((loc) =>
    slug ? loc.link.endsWith(slug) : false
  );

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <>
      <HeroSection image={location.image} />
      <LocationContactSection location={location} />
      <LocationGalleryMapSection location={location} />
      <TestimonialSection />
    </>
  );
}
