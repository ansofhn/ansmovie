import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.svg";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <nav className="fixed top-0 z-10 w-full bg-darkGray">
        <div className="container flex flex-wrap items-center justify-between mx-auto lg:px-12 xl:px-0">
          <Link href={"/"}>
            <div className="flex items-center py-6 cursor-pointer gap-x-2">
              <div className="w-11">
                <Image src={Logo} />
              </div>
              <div className="text-2xl font-bold text-center text-white">
                Movsoft
              </div>
            </div>
          </Link>
          <div className="flex gap-2 lg:order-2">
            <Link href={"https://wa.link/a0gqrg"}>
              <button className="px-3 py-2 text-xs font-bold text-white uppercase transition duration-300 border-2 cursor-pointer border-softCream rounded-xl sm:py-2 sm:text-sm sm:px-10 bg-backGround hover:bg-softCream hover:text-darkGray">
                sign in
              </button>
            </Link>
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="inline-flex items-center p-2 text-sm text-white rounded-lg lg:hidden focus:outline-none focus:ring-0"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`pb-3 lg:pb-0 xl:ml-96 2xl:ml-[600px] items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              open ? "visible" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-1 my-4 text-sm rounded-lg lg:flex-row lg:space-x-4 lg:my-0 lg:font-medium lg:border-0">
              <li>
                <Link href={"/"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md  ${
                      currentRoute === "/"
                        ? "lg:hover:text-softCream lg:bg-transparent hover:text-darkGray bg-softCream text-darkGray lg:text-softCream lg:px-3"
                        : "lg:hover:text-softCream text-white lg:hover:bg-transparent hover:bg-softCream hover:text-darkGray"
                    }`}
                  >
                    Home
                  </h2>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md  ${
                      currentRoute === "/about"
                        ? "lg:hover:text-softCream lg:bg-transparent hover:text-darkGray bg-softCream text-darkGray lg:text-softCream lg:px-3"
                        : "lg:hover:text-softCream text-white lg:hover:bg-transparent hover:bg-softCream hover:text-darkGray"
                    }`}
                  >
                    Movie
                  </h2>
                </Link>
              </li>
              <li>
                <Link href={"/service"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md ${
                      currentRoute === "/service"
                        ? "lg:hover:text-softCream lg:bg-transparent hover:text-darkGray bg-softCream text-darkGray lg:text-softCream lg:px-3"
                        : "lg:hover:text-softCream text-white lg:hover:bg-transparent hover:bg-softCream hover:text-darkGray"
                    }`}
                  >
                    About
                  </h2>
                </Link>
              </li>
              <li>
                <Link href={"/pricelist"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md ${
                      currentRoute === "/pricelist"
                        ? "lg:hover:text-softCream lg:bg-transparent hover:text-darkGray bg-softCream text-darkGray lg:text-softCream lg:px-3"
                        : "lg:hover:text-softCream text-white lg:hover:bg-transparent hover:bg-softCream hover:text-darkGray"
                    }`}
                  >
                    Contact
                  </h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
