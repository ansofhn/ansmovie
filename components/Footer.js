import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../public/assets/logo.svg";
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div>
      <div className="bg-darkGray">
        <div className="container grid grid-cols-3 py-20">
          <div className="flex items-center cursor-pointer gap-x-2">
            <div className="w-11">
              <Image src={Logo} />
            </div>
            <div className="text-2xl font-bold text-center text-white">
              Movsoft
            </div>
          </div>
          <div className="flex items-center justify-end col-span-2">
            <ul className="flex items-center gap-1 my-4 text-sm rounded-lg lg:flex-row lg:space-x-4 lg:my-0 lg:font-medium lg:border-0">
              <li>
                <Link href={"/"}>
                  <h2
                    className={`block py-2 px-3 transition duration-400 font-medium rounded-md  ${
                      currentRoute === "/"
                        ? "hover:text-softCream bg-transparent text-softCream px-3"
                        : "hover:text-softCream text-gray-300 hover:bg-transparent"
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
                        ? "hover:text-softCream bg-transparent text-softCream px-3"
                        : "hover:text-softCream text-gray-300 hover:bg-transparent"
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
                        ? "hover:text-softCream bg-transparent text-softCream px-3"
                        : "hover:text-softCream text-gray-300 hover:bg-transparent"
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
                        ? "hover:text-softCream bg-transparent text-softCream px-3"
                        : "hover:text-softCream text-gray-300 hover:bg-transparent"
                    }`}
                  >
                    Contact
                  </h2>
                </Link>
              </li>
              <li>
                <input
                  placeholder="Find Favorite Movie"
                  className="px-4 py-3 ml-2 bg-backGround rounded-xl"
                  onChange={({ target }) => search(target.value)}
                />
              </li>
            </ul>
          </div>
          <div className="flex items-center col-span-2 gap-10 text-sm text-gray-300 pt-14">
            <div>FAQ</div>
            <div>Help Center</div>
            <div>Terms of Use</div>
            <div>Privacy</div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-14">
            <Link href={"https://www.instagram.com/josslaundry_telkomuniv/"}>
              <div
                target={"_blank"}
                className="p-2.5 mx-auto text-base text-gray-300 rounded-full hover:text-gray-300 bg-backGround"
              >
                <FaInstagram />
              </div>
            </Link>
            <Link href={"https://www.tiktok.com/@josslaundry_telkomuniv"}>
              <div
                target={"_blank"}
                className="p-2.5 mx-auto text-base text-gray-300 rounded-full hover:text-gray-300 bg-backGround"
              >
                <FaTiktok />
              </div>
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100081776875466"}
            >
              <div
                target={"_blank"}
                className="p-2.5 mx-auto text-base text-gray-300 rounded-full hover:text-gray-300 bg-backGround"
              >
                <FaFacebook />
              </div>
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100081776875466"}
            >
              <div
                target={"_blank"}
                className="p-2.5 mx-auto text-base text-gray-300 rounded-full hover:text-gray-300 bg-backGround"
              >
                <FaLinkedin />
              </div>
            </Link>
          </div>
        </div>
        <div className="text-xs text-gray-300 bg-backGround">
          <div className="container py-6">
            Copyright © 2022. All Rights Reserved By Movsoft
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
