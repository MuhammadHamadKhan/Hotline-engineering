import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top of the page every time the visitor opens a new page.
// Add it once in App.jsx, inside the Router and before the Routes.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the link points to a section (like #contact), let the browser handle it
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}