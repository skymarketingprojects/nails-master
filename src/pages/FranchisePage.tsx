import { InfoPageTemplate } from "../components/InfoPageTemplate/InfoPageTemplate";
import franchiseData from "../data/franchise.json";

export default function FranchisePage() {
  return <InfoPageTemplate data={franchiseData} pageName="franchise" />;
}
