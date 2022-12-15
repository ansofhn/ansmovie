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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Callback />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default contact;
