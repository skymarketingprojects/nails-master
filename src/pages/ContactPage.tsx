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
import { ContactHero } from "../components/ContactHero/ContactHero";
import { ContactInfoSection } from "../components/ContactInfoSection/ContactInfoSection";
import { OurServices } from "../components/OurServices/OurServices";
import { ContactFormSection } from "../components/ContactFormSection/ContactFormSection";
import { ContactMapSection } from "../components/ContactMapSection/ContactMapSection";
import { TestimonialSection } from "../components/TestimonialSection/TestimonialSection";
import SEO from "../components/SEO/SEO";
import { useContact } from "../context/ContactContext";

export default function ContactPage() {
  const { slug } = useParams<{ slug: string }>();
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const { setPhoneOverride } = useContact();

  useEffect(() => {
    // Reset state when navigating between locations
    setLocation(null);
    setLoading(true);

    const fetchLocation = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        const data = await api.getLocation(slug);
        setLocation(data);
        // Set the WhatsApp number to location-specific number
        if (data && data.phone) {
          // Remove any non-numeric characters for wa.me link
          const cleanPhone = data.phone.replace(/\D/g, "");
          setPhoneOverride(cleanPhone);
        }
      } catch (error) {
        console.error("Failed to fetch location:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();

    // Reset override on unmount or slug change
    return () => setPhoneOverride(null);
  }, [slug, setPhoneOverride]);

  if (!location) {
    if (loading) return null;
    return <div>Location not found</div>;
  }

  return (
    <>
      <SEO
        title={location.title}
        description={`Contact ${location.title} for the best nail care services in the area. Find our location, phone number, and hours.`}
        keywords={`nails, manicure, pedicure, ${location.title}`}
      />
      
      {/* 1. Hero Section */}
      <ContactHero 
        title={location.title} 
        image={location.image}
        timing={location.timing}
      />

      {/* 2. Info & Actions */}
      <ContactInfoSection location={location} />

      {/* 3. Services */}
      <OurServices locationSlug={location.link} locationPhone={location.phone} />

      {/* 6. Testimonials */}
      <TestimonialSection />

      {/* 5. Map Section */}
      <ContactMapSection mapLink={location.mapLink} title={location.title} />

      {/* 4. Booking Section */}
      <ContactFormSection />
    </>
  );
}

