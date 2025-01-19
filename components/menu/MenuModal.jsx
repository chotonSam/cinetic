"use client";
import Link from "next/link";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

import { FaWindowClose } from "react-icons/fa";

export default function MenuModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-lg text-white rounded-md hover:bg-gray-700"
      >
        {isOpen ? <FaWindowClose /> : <TiThMenuOutline />}
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-start items-start z-50 mt-16 ml-4">
          {/* Modal content */}
          <div className="bg-moviedb-black w-1/2  py-2 rounded-lg shadow-lg text-white border border-gray-700">
            <nav>
              <Link
                onClick={() => setIsOpen(false)}
                href="/"
                className="block text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800 hover:scale-105 transform transition-all duration-200 px-4 py-2 rounded"
              >
                Home
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href="/compare"
                className="block text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800 hover:scale-105 transform transition-all duration-200 px-4 py-2 rounded"
              >
                Compare Movies
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href="/watchList"
                className="block text-sm font-medium text-white hover:text-gray-300 hover:bg-gray-800 hover:scale-105 transform transition-all duration-200 px-4 py-2 rounded"
              >
                Watch Later
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
