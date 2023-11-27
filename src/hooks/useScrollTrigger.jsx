import { useState, useEffect } from "react";

export default function useScrollTrigger() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const direction =
        currentScrollPosition > lastScrollPosition ? "down" : "up";
      setIsScrollingDown(direction === "down");
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  return { isScrollingDown };
}
