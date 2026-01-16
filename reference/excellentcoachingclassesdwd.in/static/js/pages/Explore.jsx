import React from "react";
import { useState } from "react";
import logo1 from "../assets/logo4.png";
import logo2 from "../assets/img40.png";
import logo3 from "../assets/img41.png";
import { BsClock } from "react-icons/bs";
import logo4 from "../assets/img42.png";
import bg from "../assets/bg3.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import gall from "../assets/gall6.jpg";
import gall1 from "../assets/v.jpg";
import gall2 from "../assets/v2.jpg";
import whatsapp from "../assets/whatsapp.png";

const Explore = () => {
  const [showRegular, setShowRegular] = useState(true);
  const [showVacation, setShowVacation] = useState(false);
  const toggleContent = (content) => {
    if (content === "Regular") {
      setShowRegular(true);
      setShowVacation(false);
    } else if (content === "Vacation") {
      setShowRegular(false);
      setShowVacation(true);
    }
  };
  return (
    <>
      <div class="container mx-auto px-4 relative  mt-2 ">
        <div class="max-w-2xl mx-auto">
          <div>
            <h1 class="font-bold flex justify-center ml-7 text-[#941932]">
              Featured Courses
            </h1>
          </div>
          <div class="flex flex-col items-center md:flex-row md:justify-center md:items-center gap-4">
            <img
              src={bg}
              alt=""
              class="w-16 h-16 md:w-auto md:h-auto hidden sm:block"
            />

            <h1 class="font-bold text-2xl"> Explore our Popular Courses</h1>
          </div>
          <p class="text-center">
            At Excellent Coaching Classes, we're dedicated to empowering
            students with the knowledge and skills they need to excel in their
            academic and professional endeavors.
          </p>
        </div>
        <div class="absolute top-0 right-0 mr-4 mt-4 hidden sm:block">
          <img src={logo1} alt="" class="w-16 h-16 md:w-auto md:h-auto" />
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
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 px-14 my-5">
        <button
          type="button"
          className={` ${
            showRegular
              ? "bg-red-900 text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
              : ""
          } font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 md:mb-0 md:me-0 ${
            showRegular ? "" : " text-[#941932] "
          } w-full md:w-auto`}
          onClick={() => toggleContent("Regular")}
        >
          Regular
        </button>
        <button
          className={` ${
            showVacation
              ? "bg-red-900 text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
              : ""
          } font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 md:mb-0 md:me-0 ${
            showVacation ? "" : " text-[#941932] "
          } w-full md:w-auto`}
          onClick={() => toggleContent("Vacation")}
        >
          Vacation
        </button>
      </div>

      {/* cards */}
      {showRegular && (
        <div className="flex flex-wrap justify-evenly">
          {/* <!-- Repeat this block for each item --> */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-7 mx-2">
            <a>
              <img className="rounded-t-lg w-full" src={gall} alt="" />
            </a>
            <div className="p-5">
              <div className="flex gap-5">
                <p className="text-[#941932]">4th Grade</p>
                <p className="text-[#941932]">Regular classes </p>
                <p className="text-[#941932]">Boys & Girls </p>
              </div>
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Basic Foundation - Comprehensive Foundation
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Full fledge classes for Sainik school , Navoday , ALIKE ,
                Murarji Desai , Muddenhalli Entrance Examinations
                <ul>
                  <li className="list-disc my-3 ml-5">weekly examination </li>
                  <li className="list-disc my-3 ml-5">
                    weekly monitoring on improvement{" "}
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex items-center px-5 mb-5">
              <div className="text-[#941932]">
                <BsClock />
              </div>
              <h1 className="font-bold px-3">12 Months</h1>
            </div>
          </div>
          {/* <!-- End of repeated block --> */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  mt-7 mx-2">
            <a>
              <img className="rounded-t-lg w-full" src={card2} alt="" />
            </a>
            <div className="p-5">
              <div className="flex gap-5">
                <p className="text-[#941932]">5th Grade</p>
                <p className="text-[#941932]">Regular classes</p>
                <p className="text-[#941932]">Boys & Girls </p>
              </div>
              <a href="">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Basic Foundation - Comprehensive Foundation
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Full fledge classes for Sainik school , Navoday , ALIKE ,
                Murarji Desai , Muddenhalli Entrance Examinations
                <ul>
                  <li className="list-disc my-3 ml-5">weekly examination </li>
                  <li className="list-disc my-3 ml-5">
                    weekly monitoring on improvement{" "}
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex items-center px-5 mb-5 ">
              <div className="text-[#941932]">
                <BsClock />
              </div>
              <h1 className="font-bold px-3">12 Months</h1>
            </div>
            {/* <p className="px-5 my-4">
              There are many variations of passages of with Lorem Ipsum
              available.
            </p>
            <div className="flex px-5 my-4">
              <div>
                <img src={logo4} alt="" />
              </div>
              <div className="flex flex-col px-3">
                <h1 className="font-semibold">Mark Herry</h1>
                <p>Instructor</p>
              </div>
              <h1 className="flex px-10 mt-5">
                <span className="text-red-700">6593+</span> Students
              </h1>
            </div> */}
          </div>
          <div className="lg:ml-0 ml-5 mt-10 ">
            <h1 className="font-semibold flex justify-start lg:text-3xl text-2xl">
              1. Comprehensive Preparation Classes:
            </h1>
            <p className="flex justify-start my-3">
              Full-fledged classes designed specifically for Sainik School,
              Navodaya Vidyalaya, ALIKE, Murarji Desai, and Muddenhalli <br />{" "}
              Entrance Examinations.Detailed subject materials provided to cover
              all aspects of the exam syllabi, ensuring thorough preparation.
            </p>
          </div>
          <div class="ml-5 md:ml-20 sm:ml-0 mt-5 sm:mt-7">
            <h1 class="font-semibold text-2xl sm:text-3xl">
              2. Regular Assessment and Monitoring:
            </h1>
            <p class="my-3">
              Weekly examinations conducted to gauge student progress and
              understanding. Monthly tests to assess overall comprehension and
              retention. <br /> Continuous monitoring focused on identifying
              areas for improvement, ensuring students are on track to achieve
              their academic goals.
            </p>
          </div>
        </div>
      )}
      {showVacation && (
        <div className="flex flex-wrap justify-evenly">
          {/* <!-- Repeat this block for each item --> */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  mt-7 mx-2">
            <a>
              <img className="rounded-t-lg w-full" src={gall2} alt="" />
            </a>
            <div className="p-5">
              <div className="flex gap-5">
                <p className="text-[#941932]">4th Grade</p>
                <p className="text-[#941932]">Vacation classes</p>
                <p className="text-[#941932]">Boys & Girls </p>
              </div>
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Basic Foundation - Comprehensive Foundation
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Full fledge classes for Sainik school , Navoday , ALIKE ,
                Murarji Desai , Muddenhalli Entrance Examinations
                <ul>
                  <li className="list-disc my-3 ml-5">
                    Basic foundation course
                  </li>
                  <li className="list-disc my-3 ml-5">
                    Foundation for Sainik school , Navoday , ALIKE , Murarji
                    Desai , Muddenhalli Entrance Examinations{" "}
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex items-center px-5 mb-5">
              <div className="text-[#941932]">
                <BsClock />
              </div>
              <h1 className="font-bold px-3">2 Months</h1>
            </div>
            {/* <p className="px-5 my-4">
              There are many variations of passages of with Lorem Ipsum
              available.
            </p> */}
            {/* <div className="flex px-5 my-4">
              <div>
                <img src={logo4} alt="" />
              </div>
              <div className="flex flex-col px-3">
                <h1 className="font-semibold">Mark Herry</h1>
                <p>Instructor</p>
              </div>
              <h1 className="flex px-10 mt-5">
                <span className="text-red-700">6593+</span> Students
              </h1>
            </div> */}
          </div>
          {/* <!-- End of repeated block --> */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  mt-7 mx-2">
            <a>
              <img className="rounded-t-lg w-full" src={gall1} alt="" />
            </a>
            <div className="p-5">
              <div className="flex gap-5">
                <p className="text-[#941932]">5th Grade</p>
                <p className="text-[#941932]">Vacation classes</p>
              </div>
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Basic Foundation - Comprehensive Foundation
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Full fledge classes for Sainik school , Navoday , ALIKE ,
                Murarji Desai , Muddenhalli Entrance Examinations
                <ul>
                  <li className="list-disc my-3 ml-5">
                    Basic foundation course
                  </li>
                  <li className="list-disc my-3 ml-5">
                    Foundation for Sainik school , Navoday , ALIKE , Murarji
                    Desai , Muddenhalli Entrance Examinations{" "}
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex items-center px-5  mb-5">
              <div className="text-[#941932]">
                <BsClock />
              </div>
              <h1 className="font-bold px-3 ">2 Months</h1>
            </div>
          </div>
          <div className="lg:mr-24 mt-10 ml-5  ">
            <h1 className="font-semibold flex justify-start md:text-3xl text-2xl">
              1. Comprehensive Foundation:
            </h1>
            <p className="flex justify-start my-3">
              Our 5th grade course content offers a solid groundwork covering
              essential subjects and skills for academic success.
            </p>
          </div>
          <div className="  mt-7 ml-5 lg:ml-1 ">
            <h1 className="font-semibold flex justify-start md:text-3xl text-2xl">
              2. Entrance Exam Preparation:
            </h1>
            <p className="flex justify-start my-3">
              Tailored to prepare students for entrance examinations of
              prestigious institutions like Sainik School, Navodaya Vidyalaya,
              ALIKE, <br /> Murarji Desai, and Muddenhalli, our curriculum
              ensures students are equipped to excel in these exams.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Explore;
