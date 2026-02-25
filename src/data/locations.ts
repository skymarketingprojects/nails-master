import dashrathpuriImg from "../assets/locations/Darshrathpuri.jpeg";
import palamImg from "../assets/locations/Palam.jpeg";
import sector7OldImg from "../assets/locations/Sector 7.jpeg";
import sector7NewImg from "../assets/locations/Sector-7(second).jpeg";
import sector19Img from "../assets/locations/Sector-19.jpeg";

import dashrathpuriIcon from "../assets/location-icon/Dashrathpuri.jpeg"
import palamIcon from "../assets/location-icon/Palam.jpeg"
import sector19Icon from "../assets/location-icon/Sector-19.jpeg"
import sector7OldIcon from "../assets/location-icon/Sector-7-Old-branch.jpeg"
import sector7NewIcon from "../assets/location-icon/Sector-7-new-branch.jpeg"

const allLocationImages = import.meta.glob(
  "../assets/locations/*/*.{jpg,jpeg,png}",
  { eager: true, import: "default" }
) as Record<string, string>;

const getImagesByFolder = (folderName: string): string[] => {
  return Object.entries(allLocationImages)
    .filter(([path]) => path.includes(`/locations/${folderName}/`))
    .map(([, image]) => image);
};

const palamImages = getImagesByFolder("branch-palam");
const dashrathpuriImages = getImagesByFolder("dashrathpuri");
const sector19Images = getImagesByFolder("sector-19");
const sector7Images = getImagesByFolder("sector-7");
const sector7OldImages = getImagesByFolder("sector-7-old");

export interface Location {
  id: number;
  title: string;
  image: string;
  icon: string;
  rating: number;
  link: string;
  description?: string;
  phone: string;
  email: string;
  images: string[];
  mapLink: string;
  locationlink: string;
}

export const locations: Location[] = [
  {
    id: 1,
    title: "Nail Master Palam",
    image: palamImg,
    icon: palamIcon,
    rating: 4.5,
    link: "/contact/palam",
    description:
      "Nail Master branch located in Raj Nagar I, Palam, New Delhi.",
    phone: "7391009200",
    email: "",
    images: palamImages,
    locationlink:"https://maps.app.goo.gl/14JATyjXrWxZ5Lew6",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4010674706415!2d77.0835711!3d28.5877426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b6d2d9f2ec1%3A0xce3c28442d354fd5!2sNail%20master%20palam!5e0!3m2!1sen!2sin!4v1772007274527!5m2!1sen!2sin",
  },
  {
    id: 2,
    title: "Nail Master Dashrathpuri",
    image: dashrathpuriImg,
    icon: dashrathpuriIcon,
    rating: 5,
    link: "/contact/dashrathpuri",
    description:
      "Nail Master branch at Maharaja Agarsun Plaza, Dabri Palam Main Road, near SBI ATM, New Delhi.",
    phone: "9217347708",
    email: "",
    images: dashrathpuriImages,
    locationlink:"https://maps.app.goo.gl/V23vtXVR8HpXX6wJA",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.945145049438!2d77.08208069999999!3d28.6014224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b57fee09399%3A0xe14f6844b4b18cf6!2sNail%20master%20dashrathpuri!5e0!3m2!1sen!2sin!4v1772007107259!5m2!1sen!2sin",
  },
  {
    id: 3,
    title: "Nail Master Sector 19",
    image: sector19Img,
    icon: sector19Icon,
    rating: 5,
    link: "/contact/sector-19",
    description:
      "Nail Master branch at Plot No-15, Block-B, Sector 19, Dwarka, New Delhi.",
    phone: "9217347707",
    email: "",
    images: sector19Images,
    locationlink:"https://maps.app.goo.gl/Cig9SvnSuey7xXHV7",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.749135472984!2d77.04682509999999!3d28.5772949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2661f53b19%3A0x38f73ca32d02cf7a!2sNail%20master%20sector%2019!5e0!3m2!1sen!2sin!4v1772021060487!5m2!1sen!2sin",
  },

  {
    id: 4,
    title: "Nail Master Sector 7 (Old Branch)",
    image: sector7OldImg,
    icon: sector7OldIcon,
    rating: 5,
    link: "/contact/sector-7-old",
    description:
      "Old Nail Master branch at C-301, Sector 7, Block C, Palam Extension, Dwarka, New Delhi.",
    phone: "9220309477",
    email: "",
    images: sector7OldImages,
    locationlink:"https://maps.app.goo.gl/qQtbr4xqZ8Su12eQ7",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.117507774118!2d77.06867817563553!3d28.58580878620062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b0af0de53d7%3A0xc5ce3b49b9f77261!2sNAIL%20MASTER%20(nails%20studio)!5e1!3m2!1sen!2sin!4v1771394631336!5m2!1sen!2sin",
  },
  {
    id: 5,
    title: "Nail Master Sector 7 (New Branch)",
    image: sector7NewImg,
    icon: sector7NewIcon,
    rating: 5,
    link: "/contact/sector-7-new",
    description:
      "New Nail Master branch at F-648, Ramphal Chowk, Dwarka Sector 7, New Delhi.",
    phone: "9217347706",
    email: "",
    images: sector7Images,
    locationlink:"https://maps.app.goo.gl/ourvmoD3FzgWEMwt5",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4428443140678!2d77.07145!3d28.586488799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b0d35710cc9%3A0x20d56a7318ed53e8!2sNails%20master%20branch%202!5e0!3m2!1sen!2sin!4v1772020963110!5m2!1sen!2sin",
  },
];