import Image from "next/image";
import React from "react";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import ServiceImg from "../public/assets/Service.svg";

const Service = () => {
  return (
    <div className="flex items-center bg-backGround md:px-20 lg:px-10 xl:px-0">
      <div className="container grid grid-cols-1 py-24 space-y-10 md:py-32 lg:space-y-0 lg:grid-cols-2">
        <div className="flex items-center justify-center lg:justify-start 2xl:px-10">
          <Image src={ServiceImg} />
        </div>
        <div className="flex items-center text-white lg:pl-10">
          <div className="space-y-4">
            <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
              Our Services
            </div>
            <div className="w-4/5 text-3xl font-bold text-white md:text-4xl 2xl:w-3/5">
              Download Your Movies Watch Offline.
            </div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              tempor.There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration in some
              injected humour.
            </div>
            <div className="grid w-full grid-cols-6 gap-4 pt-6 md:w-5/6">
              <div className="flex items-center justify-center col-span-2">
                <div className="p-4 text-5xl text-white border-2 rounded-full border-softCream">
                  <BiMoviePlay />
                </div>
              </div>
              <div className="col-span-4 col-start-3 my-auto space-y-3">
                <div className="text-lg font-bold">Enjoy on Your Movie.</div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                  eiusmod tempor.
                </div>
              </div>
              <div className="flex items-center justify-center col-span-2 row-start-3">
                <div className="p-4 text-5xl text-white border-2 rounded-full border-softCream">
                  <BiCameraMovie />
                </div>
              </div>
              <div className="col-span-4 col-start-3 row-start-3 my-auto space-y-3">
                <div className="text-lg font-bold ">Watch Everywhere.</div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                  eiusmod tempor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
