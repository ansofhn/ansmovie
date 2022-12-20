import React from "react";

const Hero = () => {
  return (
    <div className="bg-backGround">
      <div className="container flex items-center w-screen h-screen lg:h-[95vh] md:pt-20 lg:pt-10">
        <div className="grid gap-4 mx-auto sm:px-3 md:grid-cols-2 lg:px-8 xl:px-0">
          <div className="my-auto space-y-4">
            <div className="text-xl font-bold text-softCream">Movsoft</div>
            <div className="text-4xl font-bold text-white md:text-3xl lg:text-4xl xl:text-6xl">
              Unlimited Movie, TV Shows, & More.
            </div>
            <div className="py-4 text-white">
              Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do.
            </div>
            <button className="px-3 py-2 text-xs font-bold text-white uppercase transition duration-300 border-2 cursor-pointer border-softCream rounded-2xl sm:py-2 sm:text-sm sm:px-10 bg-backGround hover:bg-softCream hover:text-darkGray">
              Watch now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
