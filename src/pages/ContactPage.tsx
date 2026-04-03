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
import { useEffect, useState } from "react";
import { api } from "../api/baseApi";
import { type Location } from "../api/types";
import { LocationContactSection } from "../components/LocationContactSection/LocationContactSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { TestimonialSection } from "../components/TestimonialSection/TestimonialSection";
import { LocationGalleryMapSection } from "../components/LocationGalleryMapSection/LocationGalleryMapSection";
import SEO from "../components/SEO/SEO";

export default function ContactPage() {
  const { slug } = useParams<{ slug: string }>();
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      if (!slug) return;
      try {
        const data = await api.getLocation(slug);
        setLocation(data);
      } catch (error) {
        console.error("Failed to fetch location:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();
  }, [slug]);

  if (loading) return null;
  if (!location) {
    return <div>Location not found</div>;
  }
  console.log(location);

  return (
    <>
      <SEO
        title={location.title}
        description={`Contact ${location.title} for the best nail care services in the area. Find our location, phone number, and hours.`}
        keywords={`nails, manicure, pedicure, ${location.title}`}
      />
      <HeroSection page={slug} image={location.image} />
      <LocationContactSection location={location} />
      <LocationGalleryMapSection location={location} />
      <TestimonialSection />
    </>
  );
}

