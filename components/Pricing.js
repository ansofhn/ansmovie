import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="py-24 md:py-32">
      <div className="space-y-2 text-center">
        <div className="text-xs font-semibold tracking-widest uppercase text-softCream">
          Our Pricing Plan
        </div>
        <div className="text-3xl font-bold text-white md:text-4xl">
          Our Pricing Strategy
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-10 pt-20 text-white lg:px-12 xl:px-20 2xl:px-32 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full h-full px-10 pt-10 pb-20 mx-auto my-auto space-y-8 transition duration-500 border-2 border-transparent rounded-md hover:border-softCream bg-black/20">
          <div className="font-bold text-center uppercase">Standard</div>
          <div className="p-6 mx-auto text-center rounded-md bg-softCream text-darkGray">
            <div className="text-3xl font-semibold">$7.99</div>
            <div className="text-sm font-semibold">Monthly</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Video quality</div>
            </div>
            <div className="font-medium text-softCream">Good</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Resolution</div>
            </div>
            <div className="font-medium">480p</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Screen you can watch</div>
            </div>
            <div className="font-medium">1</div>
          </div>
          <div className="flex items-center text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Cancel anytime</div>
            </div>
          </div>
        </div>
        <div className="w-full h-full px-10 pt-10 pb-20 space-y-8 transition duration-500 border-2 rounded-md border-softCream bg-black/20">
          <div className="font-bold text-center uppercase">Premium</div>
          <div className="p-6 mx-auto text-center rounded-md bg-softCream text-darkGray">
            <div className="text-3xl font-semibold">$9.99</div>
            <div className="text-sm font-semibold">Monthly</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Video quality</div>
            </div>
            <div className="font-medium text-softCream">Better</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Resolution</div>
            </div>
            <div className="font-medium">1080p</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Screen you can watch</div>
            </div>
            <div className="font-medium">2</div>
          </div>
          <div className="flex items-center text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Cancel anytime</div>
            </div>
          </div>
        </div>
        <div className="w-full h-full px-10 pt-10 pb-20 space-y-8 transition duration-500 border-2 border-transparent rounded-md hover:border-softCream bg-black/20">
          <div className="font-bold text-center uppercase">Deluxe</div>
          <div className="p-6 mx-auto text-center rounded-md bg-softCream text-darkGray">
            <div className="text-3xl font-semibold">$11.99</div>
            <div className="text-sm font-semibold">Monthly</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Video quality</div>
            </div>
            <div className="font-medium text-softCream">Best</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Resolution</div>
            </div>
            <div className="font-medium">4K + HDR</div>
          </div>
          <div className="flex items-center justify-between text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Screen you can watch</div>
            </div>
            <div className="font-medium">4</div>
          </div>
          <div className="flex items-center text-xs xl:text-sm">
            <div className="flex items-center gap-3">
              <FaCheck />
              <div className="font-medium">Cancel anytime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
