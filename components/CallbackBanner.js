import Image from "next/image";
import React from "react";
import people from "../public/assets/group_people.jpg";

const CallbackBanner = () => {
  return (
    <div className="bg-white">
      <div className="container flex items-center w-screen py-32">
        <div className="grid mx-auto xl:gap-10 sm:px-3 lg:grid-cols-2 lg:px-8 xl:px-0">
          <div className="my-auto space-y-4 2xl:pl-28">
            <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
              Online Streaming
            </div>
            <div className="text-4xl font-bold text-darkGray md:text-3xl lg:text-4xl">
              Live Movie & TV Shows For Friends & Family
            </div>
            <div className="py-4 text-sm leading-7 text-darkGray">
              Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type.
            </div>
            <div className="grid items-center grid-cols-2 pb-6 md:w-[65%] lg:w-[90%] xl:w-2/3">
              <h2 className="text-5xl font-bold md:text-6xl">HD 4K</h2>
              <div>
                <h2 className="text-xl font-bold md:text-3xl">50K+</h2>
                <h3 className="text-sm font-bold md:text-base">
                  Active Customer
                </h3>
              </div>
            </div>
            <button className="px-3 py-2 text-xs font-semibold text-white uppercase transition duration-300 border-2 cursor-pointer border-softCream rounded-2xl sm:py-2 sm:text-sm sm:px-10 bg-softCream hover:bg-white hover:text-darkGray">
              Watch now
            </button>
          </div>
          <div className="flex items-center lg:scale-110 xl:scale-110 2xl:scale-105">
            <Image src={people} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackBanner;
