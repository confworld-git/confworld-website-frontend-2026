import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Mobile: Use smooth scrolling with a small delay for better rendering
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Ensure proper mobile scrolling is maintained
        document.body.style.overflowY = 'auto';
        document.body.style.webkitOverflowScrolling = 'touch';
      }, 100);
    } else {
      // Desktop: Immediate scroll to top - no delay, no smooth behavior
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollTop;