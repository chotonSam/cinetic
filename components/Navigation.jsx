"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";
import Search from "./Search";
import Logo from "./menu/Logo";
import MenuModal from "./menu/MenuModal";
import SignInOut from "./menu/SIgnInOut";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
      {/* desktop nav  */}

      <div className=" hidden md:block ">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex flex-wrap items-center">
            <Logo />

            <div className="md:ml-8  space-x-4 ">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/compare" className="text-white hover:text-gray-300">
                Compare Movies
              </Link>

              <Link
                href="/watchList"
                className="text-white hover:text-gray-300"
              >
                Watch Later
              </Link>
            </div>
            <div className="hover:text-gray-300">
              <SignInOut />
            </div>
          </div>
          <Search />
        </div>
      </div>

      {/* mobile nav */}
      <div className="container mx-auto px-4 md:hidden">
        <div className="flex flex-wrap justify-between   pt-6 md:pb:6 pb-4 items-center ">
          <MenuModal />
          <Logo />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-xl text-white rounded-md hover:bg-gray-700"
          >
            {isOpen ? <FaSearchMinus /> : <FaSearchPlus />}
          </button>
        </div>
        {isOpen && <Search />}
      </div>
    </nav>
  );
}
