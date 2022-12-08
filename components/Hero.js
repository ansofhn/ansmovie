import Image from "next/image";
import React from "react";
import Logo from "../public/assets/logo.svg";

const Hero = () => {
  return (
    <div className="bg-backGround">
      <div className="container flex items-center w-screen h-screen lg:h-[95vh] lg:pt-10">
        <div className="grid gap-4 mx-auto lg:grid-cols-2 lg:px-8 xl:px-0">
          {/* <div className="flex items-center justify-center text-white lg:justify-end lg:order-1">
            <div className="w-full h-full p-10 lg:w-[95%] xl:w-[90%] 2xl:w-[85%] lg:h-[135%] border-4 rounded-md border-softCream">
              Ini gambar
            </div>
          </div> */}
          <div className="my-auto space-y-4">
            <div className="text-xl font-bold text-softCream">Movsoft</div>
            <div className="text-3xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Unlimited Movie, TV Shows, & More.
            </div>
            <div className="py-4 text-white">
              lorermasdklfjlasdjfaldskfjasldkjfalsdkfj
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
