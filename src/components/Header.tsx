"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image"; 
import { MdRestaurant } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  BellIcon,
} from "@heroicons/react/solid";
import Social from "./Social/Social";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/food4.png"
              alt="Logo"
              className="h-8 w-auto cursor-pointer"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Icons */}
        <div className="md:flex justify-between hidden  space-x-8">
          <Link href="./Restaurant">
            <MdRestaurant  className="h-8 w-16 text-[#32de84] hover:text-[#008080] cursor-pointer" />
          </Link>
          <Link href="./Register">
            <FaCircleUser className="h-8 w-16 text-[#32de84] hover:text-[#008080] cursor-pointer" />
          </Link>
          <Link href="#notifications">
            <BiSolidOffer className="h-9 w-16 text-[#32de84] hover:text-[#008080] cursor-pointer" />
          </Link>
          <div className="p-5 overflow-hidden h-8 w-16 hover:w-[270px] bg-[#32de84] hover:bg-[#008080] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
            <div className="flex items-center mr-8 justify-center fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Isolation_Mode"
                data-name="Isolation Mode"
                viewBox="0 0 24 24"
                width="22"
                height="22"
              >
                <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
       <div className="flex justify-between md:hidden space-x-4">
       <Link href="#home">
         <HomeIcon className="h-8 w-16 text-gray-500 hover:text-[#4070f4] cursor-pointer" />
       </Link>
       <Link href="/login">
         <UserIcon className="h-8 w-16 text-gray-500 hover:text-[#4070f4] cursor-pointer" />
       </Link>
       <Link href="#notifications">
         <BellIcon className="h-8 w-16 text-gray-500 hover:text-[#4070f4] cursor-pointer" />
       </Link>
       <div className="p-5 overflow-hidden h-8 w-16 hover:w-[270px] bg-gray-500  shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
         <div className="flex items-center mr-8 justify-center fill-white">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             id="Isolation_Mode"
             data-name="Isolation Mode"
             viewBox="0 0 24 24"
             width="22"
             height="22"
           >
             <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
           </svg>
         </div>
         <input
           type="text"
           className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
         />
       </div>
     </div>
      )}
    </header>
  );
};

export default Header;
