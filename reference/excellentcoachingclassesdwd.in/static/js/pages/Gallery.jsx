import React from "react";
import logo1 from "../assets/logo4.png";
import img30 from "../assets/img30.png";
import img31 from "../assets/img31.png";
import img32 from "../assets/img32.png";
import img33 from "../assets/img33.png";
import gall1 from "../assets/gall1.jpg";
import gall2 from "../assets/gall2.jpg";
import gall3 from "../assets/gall3.jpg";
import gall4 from "../assets/gall4.jpg";
import gall5 from "../assets/gall5.jpg";
import gall6 from "../assets/gall6.jpg";
import gall7 from "../assets/gall7.jpg";
import gall8 from "../assets/gall8.jpg";
import gall9 from "../assets/gall9.jpg";
import gall10 from "../assets/gall10.jpg";
import gall11 from "../assets/gall11.jpg";
import gall12 from "../assets/gall12.jpg";
import whatsapp from "../assets/whatsapp.png";

const Gallery = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div class="lg:my-10">
          <h1 class="flex justify-center font-semibold text-4xl text-[#941932] underline">
            Gallery
          </h1>
        </div>
      </div>
      <div className="absolute right-20 top-28 hidden md:block">
        <img src={logo1} alt="" />
      </div>
      <div className="flex justify-end  bottom-10 right-5 fixed z-50 object-contain">
        <a
          href="https://wa.me/+919538001300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsapp}
            className="lg:w-20 lg:h-20 w-16 h-16 lg:mb-0 mb-0 shadow-2xl rounded-full"
          />
        </a>
      </div>
      <div className="lg:my-24 my-10">
        <div className="flex justify-center flex-wrap gap-10">
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall1}
            alt=""
          />
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall2}
            alt=""
          />
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall3}
            alt=""
          />
        </div>
        <div className="flex justify-center flex-wrap gap-10 mt-12 ">
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall4}
            alt=""
          />
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall5}
            alt=""
          />
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall6}
            alt=""
          />
        </div>
        <div className="flex justify-center flex-wrap gap-10 mt-12">
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall7}
            alt=""
          />
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall8}
            alt=""
          />
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall9}
            alt=""
          />
        </div>
        <div className="flex justify-center flex-wrap gap-10 mt-12">
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall10}
            alt=""
          />
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall11}
            alt=""
          />
          <img
            className="w-full sm:w-80 sm:px-2 hover:scale-110 transition duration-300 rounded-2xl"
            src={gall12}
            alt=""
          />
        </div>
        <img
          className="w-full my-8 px-10 hover:scale-110 transition duration-300 rounded-2xl"
          src={img33}
          alt=""
        />
      </div>
    </>
  );
};

export default Gallery;
