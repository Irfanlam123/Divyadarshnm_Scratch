import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpeg";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src={logo}
          alt="Logo"
          className="h-80 w-80 object-cover py-10 shadow-2xl"
        />
      </div>
      <div className="py-10">
        <p className="flex justify-center items-center font-semibold text-[16px]  ">
          Experience the sacred rituals with Divyadarshanm simply book tour
          spiritual journey, Take part in Sevas, Poojas, Annadanam, Gau
        </p>{" "}
        <p className="flex justify-center items-center font-semibold text-[16px]">
          Poojas and more, All from your Home. Experience the sacred rituals
          with Divyadarshanm simply book tour spiritual journey, Take part
        </p>{" "}
        <p className="flex justify-center items-center font-semibold text-[16px]">
          in Sevas, Poojas, Annadanam, Gau Poojas and more, All from your Home.
        </p>
      </div>

      <div className="flex flex-wrap justify-center py-6 sm:py-8 md:py-10 lg:py-12 space-x-4 sm:space-x-6 md:space-x-8">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition-all"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-all"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition-all"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="flex justify-center space-x-80">
        <div>
          <h2 className="font-bold text-xl">Company</h2>
          <ul className="text-blue-400 space-y-4 py-3">
            <li>
              {" "}
              <Link
                to="/Cancellation and Refund Policy"
                className="hover:underline"
              >
                Cancellation and Refund Policy
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="/Cancellation and Refund Policy"
                className="hover:underline"
              >
                Privacy Policy
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="/Cancellation and Refund Policy"
                className="hover:underline"
              >
                Terms And Condition
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-xl py-3">Registered Address</h3>
          <p className="text-[17px] font-semibold">
            {" "}
            D 5/23 Tripura Bhairavi Varanasi 221001
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-5">
        <p>© Shri Vidya Tech | All rights reserved 2024.</p>
      </div>
    </div>
  );
};

export default Footer;
