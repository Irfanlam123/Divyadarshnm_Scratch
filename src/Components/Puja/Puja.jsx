import React from "react";
import { GiByzantinTemple } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export const Puja = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[#F56606] flex justify-center py-5">
        卐 :Upcoming Puja: 卐
      </h1>
      <div className="flex justify-center space-x-6 py-7">
        {" "}
        <div className="h-[500px] w-96 rounded-md shadow-2xl ">
          <img
            className="rounded-sm"
            src="https://divyadarshanm.in/wp-content/uploads/2024/12/Shri-Kaal-Bhairav-__Aapda-Haran-Yagya-Batuk-Bhairav-Stotra-Kaal-Bhairav-__Ashtakam-and-Maha-Aarti.jpg"
            alt=""
          />
          <p className="font-semibold text-lg py-3">
            Shri Kaal Bhairav Aapda Haran Yagya And Kaal Bhairav Ashtakam ,Maha
            Aarti
          </p>
          <p className="text-sm  font-bold">
            To Remove 7 Past Lifetimes Sins And Negativity
          </p>
          <p className="text-s font-bold flex py-4 items-center ">
            <p className="text-[#F56606] px-2">
              <GiByzantinTemple />
            </p>{" "}
            Shri Kaal Bhairav Temple , Kashi
          </p>
          <p className="text-s font-bold flex py-4 items-center">
            <p className="text-[#F56606] px-2">
              {" "}
              <CiCalendarDate />
            </p>{" "}
            18-Jan-2025
          </p>
          {/* <p className="border-2 font-[1100] border-[#F56606]"></p> */}
          <Link
            to="/participate"
            className="bg-[#FF8718] text-[#FFF] font-bold ml-[210px] rounded-sm py-2 px-4"
          >
            Partiicipate Now
          </Link>
        </div>
        <div className="h-[500px] w-96 rounded-md shadow-2xl ">
          <img
            className="rounded-sm"
            src="https://divyadarshanm.in/wp-content/uploads/2024/12/Shri-Kaal-Bhairav-__Aapda-Haran-Yagya-Batuk-Bhairav-Stotra-Kaal-Bhairav-__Ashtakam-and-Maha-Aarti.jpg"
            alt=""
          />
          <p className="font-semibold text-lg py-3">
            Somwar Mahamrityunjay Mantra Jaap And Rudra Abhishek In Kashi
          </p>
          <p className="text-sm  font-bold">
            To ‘God of Health’ Healing, Protection, And Warding Off Untimely
            Misfortunes
          </p>
          <p className="text-s font-bold flex py-4 items-center ">
            <p className="text-[#F56606] px-2">
              <GiByzantinTemple />
            </p>{" "}
            Mahamrityunjay Temple , Kashi
          </p>
          <p className="text-s font-bold flex py-2 items-center">
            <p className="text-[#F56606] px-2">
              {" "}
              <CiCalendarDate />
            </p>{" "}
            6-Jan-2025, Pasuh Maas
          </p>
          {/* <p className="border-2 font-[1100] border-[#F56606]"></p> */}
          <Link
            to="/participate"
            className="bg-[#FF8718] text-[#FFF] font-bold ml-[210px] rounded-sm py-2 px-4"
          >
            Partiicipate Now
          </Link>
        </div>
        <div className="h-[500px] w-96 rounded-md shadow-2xl ">
          <img
            className="rounded-sm"
            src="https://divyadarshanm.in/wp-content/uploads/2024/12/Shri-Kaal-Bhairav-__Aapda-Haran-Yagya-Batuk-Bhairav-Stotra-Kaal-Bhairav-__Ashtakam-and-Maha-Aarti.jpg"
            alt=""
          />
          <p className="font-semibold text-lg py-3">
            Makar Sankranti Special Brahman Bhojan, Gau Seva and Deep Daan in
            Kashi
          </p>
          <p className="text-sm  font-bold">
            To Get Rid of Misfortune, Horoscope Doshas, Anxiety and to satiate
            Ancestors’ Souls
          </p>
          <p className="text-s font-bold flex py-4 items-center ">
            <p className="text-[#F56606] px-2">
              <GiByzantinTemple />
            </p>{" "}
            Ganga Ghat , Kashi
          </p>
          <p className="text-s font-bold flex py-2 items-center">
            <p className="text-[#F56606] px-2">
              {" "}
              <CiCalendarDate />
            </p>{" "}
            28-Jan-2025
          </p>
          {/* <p className="border-2 font-[1100] border-[#F56606]"></p> */}
          <Link
            to="/participate"
            className="bg-[#FF8718] text-[#FFF] font-bold ml-[210px] rounded-sm py-2 px-4"
          >
            Partiicipate Now
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
