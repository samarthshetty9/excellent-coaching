// import React from "react";
import logo from "../assets/logo2.png";
import logo1 from "../assets/logo4.png";
import logo2 from "../assets/logo1.png";
import logo3 from "../assets/logo3.png";
import bg from "../assets/bg2.png";
import img from "../assets/img.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img14.png";
import img14 from "../assets/img15.png";
import img15 from "../assets/img16.png";
import img16 from "../assets/card4.jpg";
import img17 from "../assets/img18.png";
import img18 from "../assets/img19.png";
import img19 from "../assets/img20.png";
import img20 from "../assets/img21.png";
import img21 from "../assets/img22.png";
import img22 from "../assets/img23.png";
import img23 from "../assets/img24.png";
import img24 from "../assets/img26.png";
import img25 from "../assets/img27.png";
import img26 from "../assets/img28.png";
// import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { GrCatalogOption } from "react-icons/gr";
import img27 from "../assets/01.png";
import img28 from "../assets/02.png";
import img29 from "../assets/03.png";
import img30 from "../assets/04.png";
import img31 from "../assets/img13.png";
import img32 from "../assets/bg4.png";
import img33 from "../assets/img50.png";
// import MySlider from "./MySlider";
import img34 from "../assets/img53.png";
import logo6 from "../assets/img44.png";
import logo7 from "../assets/img45.png";
import logo8 from "../assets/img46.png";
import logo9 from "../assets/img47.png";
import logo10 from "../assets/img48.png";
import logo11 from "../assets/img49.png";
import pdf from "../assets/Excellent_BROCHURE.pdf";
import whatsapp from "../assets/whatsapp.png";
import React, { useEffect, useState } from "react";

const Home = () => {
  const Excellent_BROCHURE = "Excellent_BROCHURE.pdf";
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  AOS.init();
  useEffect(() => {
    setIsVisible(true);

    // Show the pop-up when the component mounts
    setShowPopup(true);

    // Hide the pop-up after 10 seconds
    // const timer = setTimeout(() => {
    //   setShowPopup(false);
    // }, 5000);

    // // Cleanup timer on component unmount
    // return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <section className="bg-white lg:ml-0   ">
          <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="lg:mt-0 lg:col-span-5 lg:flex  ">
              <img
                className="lg:w-full w-72 lg:ml-0 ml-5 "
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                src={img33}
                alt=""
              />
            </div>

            <div
              className="place-self-center lg:col-span-7 px-6 lg:px-0 lg:pl-9 "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h1
                className="max-w-2xl lg:mb-4 text-xl lg:text-left text-center mt-4 ml-2 font-semibold tracking-tight leading-none md:text-5xl xl:text-5xl text-[#941932] "
                style={{ lineHeight: "1.2", fontFamily: "Times New Roman" }}
              >
                The Only Institution In Karnataka To Send The Highest Number of{" "}
                {/* <br /> */}
                Students To Sainik School Every Year. "Since 20 Years"
              </h1>

              <br />

              <p className="max-w-2xl  lg:mb-8  md:text-lg lg:text-2xl  font-medium lg:text-left text-center">
                Empowering Young Minds for a Brighter Future
              </p>
            </div>
          </div>

          {/* <div className="flex justify-center absolute right-20 bottom-32 h-36">
            <img src={img34} alt="" className="hidden md:block" />
          </div> */}

          <div className="hidden md:flex justify-center absolute top-10 right-1/2 my-10 w-48">
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
        {/* cards */}
        <div className="flex flex-col lg:flex-row lg:mt-5  justify-center items-center lg:ml-10 md:mr-20 lg:p-10">
          <div className="lg:mr-0 ml-14  flex-col justify-center align-middle">
            <h1 className="text-2xl text-center mr-12 lg:text-3xl font-bold  lg:text-left w-96">
              Coaching Services <br /> for Students
            </h1>
            <p className="text-center mr-10 lg:text-left my-4">
              "Tailored for Sainik School and Navodaya exams,
              <br /> our coaching provides personalized support and <br /> smart
              strategies for success. Get the help you <br /> to excel and boost
              your confidence for a brighter future."
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mt-5 lg:mt-0 justify-between w-100">
            <div className="mb-5 lg:mb-0 lg:mr-3  ">
              <a className="block w-80 h-70 mx-auto lg:mx-0 lg:p-3 bg-[#F8EBD3] border border-red-900 rounded-lg  ">
                <img
                  className="mx-auto lg:mx-0 lg:mt-0 mt-2"
                  src={img}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  text-center lg:text-left my-1">
                  4th Grade
                </h5>
                <p className="font-normal text-gray-700  text-center lg:text-left ">
                  Engage young minds with our dynamic 4th-grade curriculum,
                  blending core subjects with interactive learning for academic
                  excellence.
                  <br />
                  <br />
                </p>
              </a>
            </div>
            <div className="mb-5 lg:mb-0 lg:mx-5">
              <a className="block w-80 h-70 mx-auto lg:mx-0 p-3 bg-[#F8EBD3] border border-red-900 rounded-lg  ">
                <img className="mx-auto lg:mx-0" src={img1} alt="" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  text-center lg:text-left my-1">
                  5th Grade
                </h5>
                <p className="font-normal text-gray-700  text-center lg:text-left ">
                  Embark on an educational adventure with our enriching
                  curriculum tailored for young learners, inspiring curiosity
                  and igniting a passion for discovery.
                  <br />
                  <br />
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="gradientc lg:py-5  flex flex-col justify-center lg:p-0 p-5">
          <div className="flex flex-col justify-center items-center mt-16">
            <h1 className="text-[#941932] font-semibold relative">
              <span className="border-b-2 border-[#941932] lg:text-xl text-xl">
                Students
              </span>
            </h1>
            <p className="lg:text-2xl text-2xl font-semibold lg:font-semibold text-center ">
              What are you looking for?
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-5 md:gap-10">
            <div className="max-w-sm ">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <img
                  className=" p-3 w-24 h-24 mx-auto mb-4"
                  src={logo6}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  text-center">
                  Experienced Facility
                </h5>
                <p className="font-normal text-gray-700  text-center">
                  Led by a seasoned team of educators, our experienced faculty
                  brings decades of expertise to guide each student's journey
                  towards success. With a passion for teaching and a commitment
                  to excellence, they make learning an enriching and joyful
                  experience.
                </p>
              </a>
            </div>
            <div className="max-w-sm">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <img
                  className=" p-3 w-24 h-24 mx-auto mb-4"
                  src={logo7}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  text-center">
                  Innovative Curriculum
                </h5>
                <p className="font-normal text-gray-700  text-center">
                  Up to date curriculum that helps the students to tackle modern
                  problems We use the latest methods and tools to make sure kids
                  learn in the best possible way for today. <br />
                  <br />
                  <br />
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-5 md:gap-10">
            <div className="max-w-sm">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <img
                  className=" p-3 w-24 h-24 mx-auto mb-4"
                  src={logo8}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  text-center">
                  Holistic Development
                </h5>
                <p className="font-normal text-gray-700  text-center">
                  At Excellent Coaching Classes Dharwad, we believe in nurturing
                  the whole child. Beyond academics, our approach focuses on
                  fostering social, emotional, and physical growth. Through a
                  range of activities and programs, we support students in
                  developing into well-rounded individuals ready to tackle
                  life's challenges with confidence.
                </p>
              </a>
            </div>
            <div className="max-w-sm">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <img
                  className=" p-3 w-24 h-24 mx-auto mb-4"
                  src={logo9}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  text-center">
                  Art Facilities
                </h5>
                <p className="font-normal text-gray-700  text-center">
                  boasts state-of-the-art facilities, including well-equipped
                  classrooms, libraries, science labs, sports facilities, and
                  technology resources, creating an optimal learning
                  environment.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-5 md:gap-10">
            <div className="max-w-sm">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <img
                  className=" p-3 w-24 h-24 mx-auto mb-4"
                  src={logo10}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  text-center">
                  Global Perspective
                </h5>
                <p className="font-normal text-gray-700  text-center">
                  We help students see the world from a global perspective,
                  learning about different cultures, languages, and issues. This
                  prepares them to succeed in a connected world, where they can
                  make a positive difference with understanding and respect.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </a>
            </div>
            <div className="max-w-sm">
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <img
                  className=" p-3 w-24 h-24 mx-auto mb-4"
                  src={logo11}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  text-center">
                  Parental Involvement
                </h5>
                <p className="font-normal text-gray-700  text-center">
                  We value the active involvement of parents in their child's
                  education journey. At Excellent Coaching Classes Dharwad, we
                  encourage open communication and collaboration between
                  parents, teachers, and students. Through regular updates,
                  parent-teacher meetings, and involvement in school events, we
                  strive to create a supportive partnership that nurtures
                  student success and well-being.
                </p>
              </a>
            </div>
          </div>
        </div>
        <section
          className="bg-white "
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="grid place-content-center  max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12  ">
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
              <img className="lg:min-w-96    " src={img8} alt="" />
            </div>

            <div className=" place-self-center lg:col-span-7 lg:ml-20 ml-3 ">
              <p className="text-[#941932] font-bold">
                Explore Excellent <br /> Academy
              </p>
              <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl">
                Why Choose <span className="text-[#941932]">Us?</span>
              </h1>
              <br />

              <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl ">
                Only Institution to send highest number of students to sainik
                school since 20 years
              </p>

              <div className="flex my-3 gap-2">
                <span className="h-2 w-2 bg-black rounded-full self-center"></span>
                <h1 className="font-semibold">Excellence in Academics</h1>
              </div>

              <div className="flex my-3 gap-2">
                <span className="h-2 w-2 bg-black rounded-full self-center"></span>
                <h1 className="font-semibold ">City Centre Campus</h1>
              </div>
              <div className="flex my-3 gap-2">
                <span className="h-2 w-2 bg-black rounded-full self-center"></span>
                <h1 className="font-semibold ">
                  {" "}
                  Friendly and Parental Environment
                </h1>
              </div>
              <div className="flex my-3 gap-2">
                <span className="h-2 w-2 bg-black rounded-full self-center"></span>
                <h1 className="font-semibold ">
                  {" "}
                  Separate Residential Facilities
                </h1>
              </div>
              <div className="flex my-3 gap-2">
                <span className="h-2 w-2 bg-black rounded-full self-center"></span>
                {/* <img src={img15} alt="" /> */}
                <h1 className="font-semibold ">
                  {" "}
                  Dedicated Non-Residential Spaces
                </h1>
              </div>
              <div className="my-10">
                <a
                  href={pdf}
                  download={Excellent_BROCHURE}
                  type="button"
                  className="text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  "
                >
                  OUR BROCHURE
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white ">
          <div className="gap-16  items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg ">
              <h2
                className="mb-4 text-2xl md:text-4xl tracking-tight font-bold text-gray-900 "
                style={{ lineHeight: "1.3" }}
              >
                Experience the integration of traditional wisdom and modern
                educational practices at our institution.
              </h2>

              <p className="lg:my-5 my-7 sm:my-20">
                Learnability in teachers - teachers with learnability ensure
                continuous growth and adaptation to evolving educational needs.
              </p>
              <p className="font-bold text-black">
                A good teacher is one who can learn
              </p>
              <p className="my-4">
                Teachability in students - teachability in students cultivates a
                mindset of openness and eagerness to learn, enhancing their
                educational journey.
              </p>
              <h1 className="font-bold text-black">
                A good student is one who can teach
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-5">
                <div>
                  <img src={img17} alt="" className="w-15" />
                  <div>
                    <h3 className="text-xl md:text-2xl text-[#941932] font-semibold">
                      Higher Success
                    </h3>
                    <p className="my-3 text-sm md:text-base">
                      At Higher Success, we empower school students to achieve
                      academic excellence and personal growth through
                      comprehensive coaching classes.
                    </p>
                  </div>
                </div>
                <div>
                  <img src={img18} alt="" className="w-15" />
                  <div>
                    <h3 className="text-xl md:text-2xl text-[#941932] font-semibold">
                      Improved Skills
                    </h3>
                    <p className="my-3 text-sm md:text-base">
                      "Improved Skills offers targeted training to enhance your
                      abilities and excel in your endeavors."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative bottom-15 left-0 md:left-28">
              <img
                class="hidden md:block md:absolute right-3/4 transform -translate-y-1/2"
                src={logo1}
                alt=""
              />
              <img
                class="mt-4 lg:min-w-96 lg:mt-16 rounded-2xl w-80 lg:ml-0 ml-4"
                src={img16}
                alt="office content 2"
              />
              <img
                class="hidden md:block md:absolute left-80 top-80 transform -translate-y-1/2"
                src={img19}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* <MySlider /> */}
        <div class="px-5 md:px-10 mt-10">
          <div class="flex flex-col md:flex-row md:justify-between">
            <div class="md:mr-5">
              <p class="text-[#941932] font-semibold relative">
                <span class="border-b-2 border-[#941932]">Feedback</span>
              </p>
              <h1 class="text-3xl md:text-4xl font-bold mt-2 md:mt-0">
                Explore Experiences
              </h1>
            </div>
            <div class="mt-4 md:mt-0">
              <a
                href="https://www.justdial.com/Dharwad/Excellent-Coaching-Classes-Beside-Sagar-Hotel-Near-Garadi-Mani-Kalghatgi-Road/0836PX836-X836-190228163539-I8G3_BZDET/reviews"
                target="blank"
                type="button"
                class="text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm md:text-base px-4 md:px-5 py-2.5 md:py-3 text-center mb-2 md:mb-0 "
              >
                Read All Reviews
              </a>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="flex flex-col md:flex-row justify-center items-center px-4 lg:px-10 w-full gap-12 mt-10">
          <div className="max-w-md ">
            <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100 ">
              <div className="flex justify-start items-center p-3 mr-20 gap-4 leading-normal">
                <img
                  className="object-cover w-20 rounded-t-lg md:rounded-none md:rounded-s-lg"
                  src={img1}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Suresh Handage
                </h5>
              </div>
              <div className="p-3">
                <h2 className="text-center md:text-left ">
                  Excellent Coaching Classes offers top-notch coaching
                  facilities with experienced instructors. The multiple
                  facilities cater to a variety of subjects, providing students
                  with a well-rounded education.
                </h2>
                <img className="mt-3 mx-auto md:mx-0" src={img26} alt="" />
              </div>
            </a>
          </div>
          <div className="max-w-md ">
            <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100 ">
              <div className="flex justify-start items-center p-3 mr-20 gap-4 leading-normal">
                <img
                  className="object-cover w-20 rounded-t-lg md:rounded-none md:rounded-s-lg"
                  src={img1}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Bhagyashree
                </h5>
              </div>
              <div className="p-3">
                <h2 className="text-center md:text-left ">
                  This is the best platform for students.Thanks for all team of
                  excellent coaching centre.good environment and satisfied
                  services. <br />
                  <br />
                </h2>
                <img className="mt-3 mx-auto md:mx-0" src={img26} alt="" />
              </div>
            </a>
          </div>

          <div className="max-w-md ">
            <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100 ">
              <div className="flex justify-start items-center p-3 mr-28 gap-4 leading-normal">
                <img
                  className="object-cover w-20 rounded-t-lg md:rounded-none md:rounded-s-lg"
                  src={img1}
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Parashuram
                </h5>
              </div>
              <div className="p-3">
                <h2 className="text-center md:text-left ">
                  One of the Best Coaching Center we have ever seen,, celebrate
                  all festival with students and give fantastic Results, this is
                  not easy for all. Thank you all the Excellent Staff❤
                </h2>
                <img className="mt-3 mx-auto md:mx-0" src={img26} alt="" />
              </div>
            </a>
          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 shadow-2xl lg:px-0 px-4">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Welcome to Excellent Coaching Classes!
              </h2>
              <p className="text-[#941932] font-semibold">ADMISSION ARE OPEN</p>
              <div className="flex justify-between">
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-4 text-[#941932] font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => (window.location.href = "contact")}
                  className="mt-4 text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
