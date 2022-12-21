import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

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
          className="fixed flex items-center justify-center p-2 transition-all duration-1000 ease-in rounded-full shadow-md shadow-backGround bg-softCream w-11 h-11 bottom-4 right-4 lg:bottom-12 lg:right-10 "
          onClick={scrollUp}
        >
          <MdKeyboardArrowUp className="text-xl font-bold text-darkGray" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
