import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A utility component that handles scrolling to elements on the page
 * when the URL contains a hash fragment (e.g., /#services).
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // We use a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      // If no hash, scroll to top on path change
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
