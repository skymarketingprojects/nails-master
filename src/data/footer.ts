export interface FooterAddressData {
  title: string;
  description: Array<string>;
}

export interface FooterFollowItem {
  id: number;
  label: string;
  link: string;
}

export interface FooterChipData {
  id: number;
  label: string;
}

export const footerAddress: FooterAddressData = {
  title: "Address",
  description:[
    "RZ-100,J-192, raj nagar I, palam, New Delhi 110077",
    "F 648 ramphal chowk dwarka sector 7",
    "C-301, sector 7, block C, palam extension, dwarka, new delhi 110077",
    "Plot no-15, Sector 19, Block-B,Dwarka, NEW DELHI, Delhi, 110075",
    "RZ B-12/1, G/F MAHARAJA AGARSUN PLAZA, DABRI PALAM MAIN ROAD, Mahaveer Marg, near SBI ATM, New Delhi 110045",]


};

export const footerFollow: FooterFollowItem[] = [
  { id: 1, label: "f", link: "#" },
  { id: 2, label: "in", link: "#" },
  { id: 3, label: "t", link: "#" },
];

export const footerChips: FooterChipData[] = [
  { id: 1, label: "Nails Extensions" },
  { id: 2, label: "Gel Polish" },
  { id: 3, label: "Manicure" },
  { id: 4, label: "Pedicure" },
  { id: 5, label: "Nail Art" },
  { id: 6, label: "Hair Spa" },
  { id: 7, label: "Facial" },
  { id: 8, label: "Head Massage" },
  { id: 9, label: "Waxing" },
];