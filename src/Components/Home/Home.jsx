import React from "react";
import Header from "../Home/header.webp";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between p-8 lg:p-20 space-y-8 lg:space-y-0">
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Your Way to</h2>
          <p className="text-4xl font-semibold text-orange-500">
            Sanatana Dharma!
          </p>
          <p className="text-blue-400 text-lg font-medium">
            Daily darshans, Puja rituals, and Chadhava offerings, all in one.
          </p>
          <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300">
            Puja Now
          </button>
        </div>

        <div className="lg:w-1/2">
          <img
            src={Header}
            alt="Header"
            className="w-full max-w-lg mx-auto lg:max-w-full"
          />
        </div>
      </div>

      <div className="bg-white py-12">
        <h1 className="text-3xl text-orange-500 font-semibold text-center">
          Upcoming Sevas
        </h1>
        <p className="text-center text-gray-700 font-medium mt-4 px-4 lg:px-32">
          Book Pujas in your and your family’s name at renowned temples in
          India. Receive divine blessings along with a special video of the
          sacred rituals and tirth prasad.
        </p>
        <Link
          to="/puja"
          className="block text-center text-orange-500 font-semibold mt-6 hover:underline"
        >
          View All Pujas
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
