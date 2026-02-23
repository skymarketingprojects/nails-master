// import { Link } from "react-router-dom";
// import { locations } from "../data/locations";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { OurServices } from "../components/OurServices/OurServices";
import { SalonSection } from "../components/SalonSection/SalonSection";
import { TestimonialSection } from "../components/TestimonialSection/TestimonialSection";
// import heroImage from "../assets/hero.png";
import homeBanner from "../assets/banner/Home-Banner.jpeg";
import SEO from "../components/SEO/SEO";

export default function HomePage() {
  return (
    <div>
      <SEO
        title="Home"
        description="Experience the best nail care at Nails Master. We offer professional manicure, pedicure, and nail art services."
        keywords="nails, manicure, pedicure, nail art, beauty salon"
      />
      {/* <h1>Home Page</h1>

      {locations.map((loc) => (
        <div key={loc.id}>
          <h3>{loc.title}</h3>

          <Link to={loc.link}>
            Visit Location
          </Link>

          <br />

          <Link to={`/contact/${loc.link.replace("/", "")}`}>
            Contact {loc.title}
          </Link> 
        </div>
      ))}
      */}

      <HeroSection image={homeBanner} />
      <SalonSection />
      <OurServices />
      <TestimonialSection />


    </div>
  );
}
