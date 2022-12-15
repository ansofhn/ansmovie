import React from "react";
import Callback from "../components/Callback";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const contact = () => {
  return (
    <div className="bg-backGround">
      <div className="pb-40 text-center pt-60 bg-black/20">
        <div className="text-4xl font-bold text-white md:text-6xl">
          Contact Us
        </div>
        <div className="text-sm font-semibold text-white uppercase">
          <span className="mr-2 text-softCream">Home</span> |{" "}
          <span className="ml-2">Contact</span>
        </div>
      </div>
      <Navbar />
      <div className="container grid grid-cols-1 my-24 space-y-10 md:space-y-0 md:grid-cols-2">
        <form className="grid grid-cols-2 gap-8 p-2">
          <div className="col-start-1">
            <input
              className="text-sm p-2.5 rounded-md w-full bg-darkGray border-none focus:ring-0"
              name="name"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="">
            <input
              className="text-sm p-2.5 rounded-md w-full bg-darkGray border-none focus:ring-0"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="col-span-2">
            <input
              className="text-sm p-2.5 rounded-md w-full bg-darkGray border-none focus:ring-0"
              placeholder="Subject"
            />
          </div>

          <div className="col-span-2">
            <textarea
              id="message"
              rows="8"
              className="block p-2.5 w-full text-sm text-textColor bg-darkGray rounded-md focus:ring-0 focus:border-none border-none "
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="px-3 py-2 text-xs font-bold text-white uppercase transition duration-300 border-2 rounded-md cursor-pointer border-softCream sm:py-2 sm:text-sm sm:px-10 bg-backGround hover:bg-softCream hover:text-darkGray"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="p-2 md:ml-10">
          <div className="w-full rounded-md h-80 md:h-full bg-darkGray">
            sdgsdfg
          </div>
        </div>
      </div>

      <Callback />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default contact;
