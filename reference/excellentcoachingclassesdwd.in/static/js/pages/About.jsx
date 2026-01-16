import React, { useState } from "react";
import logo from "../assets/logo2.png";
import logo1 from "../assets/logo4.png";
import logo2 from "../assets/logo1.png";
import logo3 from "../assets/logo3.png";
import bg from "../assets/bg2.png";
import img4 from "../assets/img4.png";
import img7 from "../assets/img7.png";
import chairman from "../assets/chairman.png";

import logo12 from "../assets/logo1.png";
import logo13 from "../assets/img51.png";
import Timeline from "./Timeline";
import whatsapp from "../assets/whatsapp.png";

const About = () => {
  const [showMission, setShowMission] = useState(true);
  const [showVision, setShowVision] = useState(false);
  const toggleContent = (content) => {
    if (content === "mission") {
      setShowMission(true);
      setShowVision(false);
    } else if (content === "vision") {
      setShowMission(false);
      setShowVision(true);
    }
  };
  return (
    <>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-5 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img className="w-3/4" src={logo13} alt="" />
          </div>

          <div className=" place-self-center lg:col-span-7">
            <p className="text-[#941932] font-semibold relative">
              <span className="border-b-2 border-[#941932]">About Us</span>
            </p>

            <h1
              className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-4xl xl:text-4xl  mt-8"
              style={{ lineHeight: "1.2" }}
            >
              Simplify Learning, Amplify Fun: Join the Excellent Group of
              Institutions!
            </h1>
            <br />
            <br />
            <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl  ">
              At the Excellent Group of Institutions, we believe in making
              learning enjoyable while achieving remarkable results. With a
              proud legacy of consistently sending the highest number of
              students to Sainik Schools and Navodaya for over two decades.
              Along side that ensuring the student is ready for upcoming
              competitive exams
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <img src={logo1} alt="" />
        </div> */}
        <div className="hidden md:flex justify-center absolute top-10 right-32 my-10 w-48">
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
      </section>

      <div className="flex justify-center items-center my-14">
        <h1 className="text-[#941932] text-3xl font-semibold">Milestones</h1>
      </div>

      <Timeline />

      <section className="bg-white  ml-15 px-3 md:ml-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className=" place-self-center lg:col-span-7">
            <p className="text-[#941932] font-semibold">
              At Excellent Coaching classes
            </p>
            <h1
              className=" mb-4 text-2xl font-semibold tracking-tight leading-none md:text-5xl xl:text-5xl "
              style={{ lineHeight: "1.2" }}
            >
              Together we build a brighter future for every student
            </h1>
            <br />
            <br />
            <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl lg:ml-5">
              Join us at Excellent Coaching classes and embark a journey of
              discovery growth and success
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-5 ml-10 lg:flex">
            <img className="w-3/4" src={logo12} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:gap-16 px-14">
          <button
            type="button"
            className={` ${
              showMission
                ? "bg-red-900 text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
                : ""
            } font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 md:mb-0 md:me-0 ${
              showMission ? "" : " text-red-600 "
            } w-full md:w-auto`}
            onClick={() => toggleContent("mission")}
          >
            Mission
          </button>
          <button
            className={` ${
              showVision
                ? "bg-red-900 text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
                : ""
            } font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 md:mb-0 md:me-0 ${
              showVision ? "" : " text-red-600 "
            } w-full md:w-auto`}
            onClick={() => toggleContent("vision")}
          >
            Vision
          </button>
        </div>
        {showMission && (
          <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl mt-7 lg:ml-12  ">
            <ul>
              <li className="font-bold">
                {" "}
                Our goal is to give students a well-rounded education. We want
                to:
              </li>
              <li className="my-3 ml-7 list-disc">
                Teach discipline and a love for learning
              </li>
              <li className="my-3 ml-7 list-disc">
                Promote physical health through academics, activities, and
                sports
              </li>
              <li className="my-3 ml-7 list-disc">
                We aim to equip students with the skills, values, and strength
                they need to succeed in school, leadership roles, and life.
              </li>
            </ul>
          </p>
        )}
        {showVision && (
          <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl mt-7 lg:ml-16">
            <ul>
              <li className="font-semibold">
                {" "}
                Our vision is to create strong leaders who do well in school,
                work well in teams, and stay fit. We want to offer a balanced
                education that encourages a passion for learning and good
                health. Our aim is to build a culture of respect,
                responsibility, and strength, getting students ready for a
                successful future.
              </li>

              <li className="list-disc ml-5 my-2 text-xl ">
                Empower students through personalized learning experiences.
              </li>
              <li className="list-disc ml-5 my-2 text-xl ">
                Cultivate a dynamic learning environment for future leaders.
              </li>
              <li className="list-disc ml-5 my-2 text-xl ">
                Champion academic excellence with a focus on individual
                strengths.
              </li>
            </ul>
          </p>
        )}

        <p className="text-[#941932] font-semibold lg:ml-14">
          We are committed to{" "}
        </p>
        <div className="px-3 mt-2 lg:ml-12">
          <p>
            fostering a love for learning, promoting critical thinking skills
          </p>
          <p>
            cultivating a strong sense of community and respect among our
            students, staff, and parents.
          </p>
          <p>
            Innovative teaching methods, personalized attention, and a focus on
            holistic development,
          </p>
        </div>
        <p className="text-[#941932] font-semibold mt-5 lg:ml-14">
          we aim to empower our students to become lifelong learners,
          responsible global citizens, and leaders of tomorrow.
        </p>
      </section>

      <div className="mt-14 lg:ml-20 flex flex-col lg:flex-row p-5 ">
        <div className="flex flex-col">
          <img
            className="lg:max-w-80 w-96 mt-6 lg:mt-0"
            src={chairman}
            alt=""
          />
          <h1 className="lg:ml-16 ml-16 my-3 font-semibold text-[#941932]">
            Shree. BASAVARAJ KOULAGI
          </h1>
          <p className="lg:ml-28 ml-28 font-semibold">Hon . Chairman</p>
        </div>
        <div className="flex flex-col lg:ml-20">
          <h1 className="text-3xl font-semibold text-[#941932] underline lg:ml-0 ml-24 lg:mt-0 mt-4">
            Chairman
          </h1>
          <p className="text-xl font-semibold my-4">
            Success in Excellent Education is no accident. It is hard work,
            perseverance, learning, studying, sacrifice, and most of all, love
            of what you are doing or learning to do.
          </p>
          <p>
            Mr. Basavaraj Koulagi, the eminent educationalist in Karnataka, is
            the founding chairman of the Excellent Group of Institutions. The
            journey began modestly in 1996 with just four students in a single
            room. Over the span of 28 years, the Excellent Group has flourished
            remarkably, now serving over 10,000 students. Its branches are
            strategically dispersed across the state, making quality education
            accessible to a wide spectrum of learners.
          </p>
          <p className="my-5">
            One notable achievement of the Excellent Group is its coaching arm,
            Excellent Coaching Classes. For the past 25 years, it has maintained
            a distinguished record of sending the highest number of students to
            prestigious institutions like Sainik School and Navodaya in the
            state. This remarkable feat underscores the institution's commitment
            to academic excellence and its pivotal role in shaping the
            educational landscape of Karnataka.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
