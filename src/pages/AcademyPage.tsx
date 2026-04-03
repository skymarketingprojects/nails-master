import { InfoPageTemplate } from "../components/InfoPageTemplate/InfoPageTemplate";
import academyData from "../data/academy.json";

export default function AcademyPage() {
  return <InfoPageTemplate data={academyData} pageName="academy" />;
}
