import React from "react";

const Callback = () => {
  return (
    <div className="bg-softCream">
      <div className="container py-12 lg:px-14 xl:px-10">
        <div className="grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-2">
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-2xl font-bold uppercase md:text-3xl">
              Trial start first 30 days.
            </div>
            <div className="text-sm font-medium">
              Enter your email to create or restart your membership.
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              placeholder="Enter your email"
              className="w-[90%] px-6 py-5 text-sm text-white rounded-md bg-backGround focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callback;
