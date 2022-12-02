import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <button
          className="fixed flex items-center justify-center p-2 transition-all duration-1000 ease-in bg-gray-300 rounded-full shadow-2xl w-11 h-11 bottom-4 right-4 lg:bottom-12 lg:right-10 "
          onClick={scrollUp}
        >
          <HiArrowUp className="text-xl font-medium text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
