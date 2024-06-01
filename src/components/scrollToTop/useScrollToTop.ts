import { useEffect, useState } from "react";

export const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!window) {
      return;
    }

    const eventHandler = () => {
      if (window.scrollY >= 550 && !isVisible) {
        setIsVisible(() => true);
      }

      if (window.scrollY < 550 && isVisible) {
        setIsVisible(() => false);
      }
    };

    window.addEventListener("scroll", eventHandler);

    return () => {
      window.removeEventListener("scroll", eventHandler);
    };
  }, [isVisible]);

  return {
    isVisible,
    scrollToTop,
  };
};
