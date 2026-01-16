'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/assets/img29.png"
            className="lg:h-14 lg:w-14 w-12 h-12"
            alt="Excellent Coaching Classes"
          />
          <span className="self-center text-[#941932] font-semibold whitespace-nowrap flex flex-col">
            <h1 className="font-bold lg:text-2xl text-xl leading-none">EXCELLENT</h1>
            <p className="text-xs lg:text-base leading-none mt-1">COACHING CLASSES DHARWAD</p>
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:hidden">
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isDropdownOpen ? "block" : "hidden"
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                onClick={() => setIsDropdownOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
              ${isActive('/') ? "text-red-800" : "text-black"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsDropdownOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
             ${isActive('/about') ? "text-red-800" : "text-black"}`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                onClick={() => setIsDropdownOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
              ${isActive('/gallery') ? "text-red-800" : "text-black"}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                onClick={() => setIsDropdownOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
                ${isActive('/courses') ? "text-red-800" : "text-black"}`}
              >
                Explore Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsDropdownOpen(false)}
                className={`block py-2 px-3 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
                ${isActive('/contact') ? "text-red-800" : "text-black"}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
