import React, { useState } from "react";
import logo1 from "../assets/img34.png";
import logo2 from "../assets/img35.png";
import logo3 from "../assets/img37.png";
import logo4 from "../assets/img38.png";
import logo5 from "../assets/img39.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import axios from "axios";
import whatsapp from "../assets/whatsapp.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, lastName, phoneNumber, email, address); // Changed query to address
    const reqbody = {
      adminEmail: "excellentdwd@gmail.com",
      firstName: name,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      queryText: address,
    };
    console.log(reqbody);
    try {
      const res = await axios.post(
        `https://mailsender.neodeals.in:8443/user/send `,

        reqbody
      );
      alert("Email Sent Succesfully");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Email Sending Failed");
    }
  };

  return (
    <>
      {/* <div>
        <img src={logo1} alt="" />
      </div> */}

      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center ml-3">
            <img className="lg:w-3/4 w-80" src={logo2} alt="" />
          </div>

          <div className="lg:col-span-7">
            <h1 className="max-w-2xl text-4xl mt-4 font-bold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Get In Touch With Us
            </h1>
            <br />
            <br />
            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
              Ready to get started on the journey to a fitter, brighter future
              for your child? Contact us today.
            </p>

            <div className="flex items-center my-3 gap-2">
              <div className="bg-purple-600 rounded-3xl w-10 flex justify-center items-center h-10 text-white">
                <IoLocationSharp style={{ width: "100px", height: "20px" }} />
              </div>

              <h1 className="font-semibold">
                RAJATGIRI 1ST CROSS, KALIDAS HOSTEL, NEAR MARUTI GARADI MANE,
                KALAGHATAGI ROAD, DHARWAD.
              </h1>
            </div>
            <div className="flex items-center my-3 gap-2">
              <div className="bg-red-600 rounded-3xl w-10 flex justify-center items-center h-10 text-white">
                <IoCallSharp style={{ width: "20px", height: "20px" }} />
              </div>

              <h1 className="font-semibold">
                +91 9035224486 , +91 7204387117 [Girls Campus]{" "}
              </h1>
            </div>

            <div className="flex items-center my-3 gap-2">
              <div className="bg-purple-600 rounded-3xl w-10 flex justify-center items-center h-10 text-white">
                <IoLocationSharp style={{ width: "100px", height: "20px" }} />
              </div>

              <h1 className="font-semibold">
                LAXMESHWAR GARDEN, 1ST CROSS, BHARATI NAGAR, DHARWAD.
              </h1>
            </div>
            <div className="flex items-center my-3 gap-2">
              <div className="bg-red-600 rounded-3xl w-10 flex justify-center items-center h-10 text-white">
                <IoCallSharp style={{ width: "20px", height: "20px" }} />
              </div>

              <h1 className="font-semibold">
                +91 9538001300 , +91 9538677021 [Boys Campus]{" "}
              </h1>
            </div>
            <div className="flex items-center my-3 gap-2 ">
              <div className="bg-amber-700 rounded-3xl w-10 flex justify-center items-center h-10 text-white">
                <CgMail style={{ width: "25px", height: "25px" }} />
              </div>
              <h1 className="font-semibold">excellentdwd@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-end  bottom-10 right-3 fixed z-50 object-contain">
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

      {/* contact */}
      <section className="bg-white  flex flex-col lg:flex-row ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900 ">
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 border border-gray-300 rounded-lg lg:p-6 p-12 "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="First Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  "
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Enter your number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900  "
              >
                Query
              </label>
              <textarea
                type="text"
                id="address"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full h-32 p-2.5 "
                placeholder="Text here"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center lg:ml-28 ml-8 text-white rounded-lg bg-red-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <img
            className="lg:w-96 w-80 lg:ml-0 ml-8 flex justify-center lg:my-40 mr-28  "
            src={logo5}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
