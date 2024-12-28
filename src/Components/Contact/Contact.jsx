import React from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div className="p-16">
        <h1 className="text-xl font-bold text-gray-600">
          Thank you for choosing Divyadarshanm!
        </h1>
        <p className="text-[17px] text-gray-600 py-5 font-semibold">
          we are service base campany
        </p>
        <div>
          <p className="text-[17px] text-gray-600  py-5">
            Email:{" "}
            <a
              className="text-[17px] text-blue-400 py-5 hover:underline"
              href="#"
            >
              support@Divyadarshanm.in
            </a>
          </p>
          <p className="text-gray-600 text-[17px]">Phone: +91 7991522694</p>
        </div>
        <p className="text-[17px] text-gray-600  py-6">
          Thank you for shopping with Divyadarshanm!
        </p>
        <p className="text-[17px] text-gray-600 font-bold py-5">
          Thank you for choosing Divyadarshanm!
        </p>
        <p className="text-[17px] text-gray-600 font-bold py-5">
          we are service base campany
        </p>
        <div>
          <p className="text-[17px] text-gray-600  py-5">
            Email:{" "}
            <a
              className="text-[17px] text-blue-400 py-5 hover:underline"
              href="#"
            >
              support@Divyadarshanm.in
            </a>
          </p>
          <p className="text-gray-600 text-[17px]">Phone: +91 7991522694</p>
        </div>
        <p className="text-[17px] text-gray-600  py-8">
          Thank you for shopping with Divyadarshanm!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
