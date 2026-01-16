import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import img from "../img29.png";
import ved from "../vedio.mp4";

const Footer = () => {
  return (
    <>
      <footer className="text-black mt-10">
        <div className="mx-auto max-w-screen-xl p-4 lg:py-8">
          <div className="md:flex md:justify-between gap-10">
            <div className="mb-6 md:w-1/2 lg:w-1/3">
              <div className="mb-6 md:mb-0 flex items-center">
                <img src={img} className="h-14 w-14 mr-4" alt="Flowbite Logo" />
                <div>
                  <span className="text-3xl font-semibold text-[#941932]">
                    Excellent
                  </span>
                  <p className="text-[#941932] text-xs font-semibold">
                    COACHING CLASSES DHARWAD
                  </p>
                </div>
              </div>

              <p className="md:px-0 px-4 mt-4 font-semibold">
                "The only institution in Karnataka to send the highest number of
                students to Sainik School every year."
              </p>
              <div className="sm:flex sm:items-center sm:justify-between my-6 lg:ml-0 ml-5">
                <div className="flex mt-4 sm:justify-center sm:mt-0 gap-6">
                  <div style={{ color: "#941932" }}>
                    {/* Red-900 */}
                    <MdFacebook />
                  </div>
                  <div style={{ color: "#941932" }}>
                    {/* Red-900 */}
                    <IoLogoTwitter />
                  </div>
                  <div style={{ color: "#941932" }}>
                    {/* Red-900 */}
                    <FaLinkedinIn />
                  </div>
                  <div style={{ color: "#941932" }}>
                    {/* Red-900 */}
                    <IoLogoGoogleplus />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 p-4">
              <div className="mb-4">
                <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                  Contact us
                </h2>
                <ul className="text-black font-medium">
                  <li className="mb-2">excellentdwd@gmail.com</li>
                  <li className="mb-2">+91 9538001300</li>
                  <li className="mb-2">Terms and conditions</li>
                  <li className="mb-2">Privacy & policy</li>
                  <li className="mb-2">Contact</li>
                </ul>
              </div>
              <div className="w-full sm:w-auto md:w-96 mt-5 sm:mt-0">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src={ved} />
                </video>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex justify-center">
        <p>
          Copyright@ 2024 <span className="font-bold">Excellent Academy.</span>{" "}
          All <br />
          <span className=" flex justify-center"> Rights Reserved</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
