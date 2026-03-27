import type { ReactNode } from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../api/baseApi";


interface ContactContextType {
  phone: string;
  loading: boolean;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [phone, setPhone] = useState<string>("9220309477"); // Fallback phone
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await api.getContact();
        if (data && data.phone) {
          setPhone(data.phone);
        }
      } catch (error) {
        console.error("Failed to fetch contact data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  return (
    <ContactContext.Provider value={{ phone, loading }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};
