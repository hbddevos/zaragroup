import { useEffect, useRef } from "react";

const useMarquee = (speed = 50) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scrollAmount = 0;
    const step = speed / 10;

    const scroll = () => {
      if (marquee) {
        scrollAmount += step;
        if (scrollAmount >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(-${scrollAmount}px)`;
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, [speed]);

  return marqueeRef;
};


export default useMarquee;
