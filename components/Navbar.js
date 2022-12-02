import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.png";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <nav className="fixed top-0 z-10 w-full bg-darkGray">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href={"/"}>
            <div className="flex items-center px-4 py-2 cursor-pointer gap-x-2">
              <Image width={46} height={46} src={Logo} />
              <div className="py-5 text-2xl font-bold text-center text-gray-100 uppercase">
                ansmovie
              </div>
            </div>
          </Link>
          <div className="flex gap-2 md:order-2 sm:mr-0">
            <Link href={"https://wa.link/a0gqrg"}>
              <button className="px-3 py-2 text-xs font-bold text-gray-100 uppercase transition duration-300 border-2 border-gray-100 cursor-pointer rounded-xl sm:py-2 sm:text-sm sm:px-10 bg-bgColor hover:bg-gray-100 hover:text-darkGray">
                sign in
              </button>
            </Link>
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="inline-flex items-center p-2 text-sm rounded-lg text-maroon md:hidden hover:bg-gray-100 focus:outline-none focus:ring-0"
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
            className={`pb-3 md:pb-0 xl:ml-96 2xl:ml-[600px] items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              open ? "visible" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-1 mt-4 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link href={"/"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md md:text-textColor  ${
                      currentRoute === "/"
                        ? "md:bg-maroon md:hover:bg-maroon md:hover:text-white hover:bg-maroon hover:text-white bg-maroon text-white md:text-white md:px-3"
                        : "md:hover:bg-gray-100 md:hover:text-textColor hover:bg-gray-100 hover:text-textColor"
                    }`}
                  >
                    Beranda
                  </h2>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md md:text-textColor  ${
                      currentRoute === "/about"
                        ? "md:bg-maroon md:hover:bg-maroon md:hover:text-white hover:bg-maroon hover:text-white bg-maroon text-white md:text-white md:px-3"
                        : "md:hover:bg-gray-100 md:hover:text-textColor hover:bg-gray-100 hover:text-textColor"
                    }`}
                  >
                    Tentang
                  </h2>
                </Link>
              </li>
              <li>
                <Link href={"/service"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md md:text-textColor ${
                      currentRoute === "/service"
                        ? "md:bg-maroon md:hover:bg-maroon md:hover:text-white hover:bg-maroon hover:text-white bg-maroon text-white md:text-white md:px-3"
                        : "md:hover:bg-gray-100 md:hover:text-textColor hover:bg-gray-100 hover:text-textColor"
                    }`}
                  >
                    Layanan
                  </h2>
                </Link>
              </li>
              <li>
                <Link href={"/pricelist"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md md:text-textColor ${
                      currentRoute === "/pricelist"
                        ? "md:bg-maroon md:hover:bg-maroon md:hover:text-white hover:bg-maroon hover:text-white bg-maroon text-white md:text-white md:px-3"
                        : "md:hover:bg-gray-100 md:hover:text-textColor hover:bg-gray-100 hover:text-textColor"
                    }`}
                  >
                    Daftar Harga
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
