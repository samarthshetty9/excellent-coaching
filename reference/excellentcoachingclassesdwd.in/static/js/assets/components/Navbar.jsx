import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../img29.png";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={img}
              className="lg:h-14 lg:w-14 w-12 h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-[#941932] font-semibold whitespace-nowrap flex-col">
              <h1 className="font-bold lg:text-2xl text-xl">EXCELLENT</h1>
              <p className="text-xs lg:text-base">COACHING CLASSES DHARWAD</p>
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <Link to="/contact">
              <button
                type="button"
                className="text-white bg-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center  w-28"
              >
                Contact us
              </button>
            </Link> */}
            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center p-2  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  ">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  onClick={() => setActivePage("home")}
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
              ${activePage === "home" ? "text-red-800" : "text-black"}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="about"
                  activeClassName="active"
                  onClick={() => setActivePage("about")}
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
             ${activePage === "about" ? "text-red-800" : "text-black"}`}
                >
                  About
                </NavLink>
              </li>

              <NavLink
                exact
                to="gallery"
                activeClassName="active"
                onClick={() => setActivePage("gallery")}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
              ${activePage === "gallery" ? "text-red-800" : "text-black"}`}
              >
                Gallery
              </NavLink>
              <NavLink
                exact
                to="explore"
                activeClassName="active"
                onClick={() => setActivePage("explore")}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
                ${activePage === "explore" ? "text-red-800" : "text-black"}`}
              >
                Explore Courses
              </NavLink>
              <NavLink
                exact
                to="contact"
                activeClassName="active"
                onClick={() => setActivePage("contact")}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-red-700 md:p-0 
                ${activePage === "contact" ? "text-red-800" : "text-black"}`}
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
