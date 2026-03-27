import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import { MainLayout } from "./Layout/Layout";
import { ContactProvider } from "../context/ContactContext";

function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact/:slug" element={<ContactPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ContactProvider>
  );
}


export default App;
