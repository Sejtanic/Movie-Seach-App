import { useEffect } from "react";

export const useObserver = (element, eachtime, addClass, threshold) => {
  useEffect(() => {
    const cards = document.querySelectorAll(element);
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(addClass);
          } else if (eachtime) {
            entry.target.classList.remove(addClass);
          }
        });
      },
      {
        threshold,
      }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);
};
