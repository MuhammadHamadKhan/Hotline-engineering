import { useEffect, useState } from "react";

// Returns true when the viewport is 1023px or smaller.
// Reads the current viewport on the first client render, then tracks changes.
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1023px)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const handler = (event) => setIsMobile(event.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

export default useIsMobile;
