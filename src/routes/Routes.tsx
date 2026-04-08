import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import FranchisePage from "../pages/FranchisePage";
import AcademyPage from "../pages/AcademyPage";
import BlogListPage from "../pages/BlogListPage/BlogListPage";
import BlogDetailPage from "../pages/BlogDetailPage/BlogDetailPage";
import { MainLayout } from "./Layout/Layout";
import { ContactProvider } from "../context/ContactContext";
import ScrollToHash from "../components/ScrollToHash";

function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <ScrollToHash />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact/:slug" element={<ContactPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
