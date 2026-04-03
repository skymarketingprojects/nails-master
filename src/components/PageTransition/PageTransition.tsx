import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader";

interface Props {
  children: React.ReactNode;
}

const PageTransition: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader on every path change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // 600ms transition duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
};

export default PageTransition;
