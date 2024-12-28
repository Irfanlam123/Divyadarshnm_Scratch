import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpeg";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-12" src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className="flex items-center space-x-8 text-black font-bold text-md">
          <li>
            <Link to="/" className="hover:text-orange-400 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/puja" className="hover:text-orange-400 hover:underline">
              Puja
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-400 hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-400 hover:underline"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
