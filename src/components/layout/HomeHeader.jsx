import React from "react";
import Navbar from "./Navbar";
import { homeHeaderBg } from "../../assets/images";

const HomeHeader = () => {
  return (
    <div>
      <img
        src={homeHeaderBg}
        className="absolute -z-10 xxs:w-full sm:w-full sm:h-[60.2%] md:h-[60.2%] lg:w-full xxs:h-[70.2%] lg:h-[600px] "
      />
      <Navbar />
      <div className="px-10 mt-16">
        <div className="bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent">
          <h1 className="font-bold lg:w-[30%] xxs:w-auto leading-[50px] xxs:text-2xl sm:2xl lg:text-4xl">
            Discover the Key to Your Dream Home
          </h1>
          <p className="lg:font-semibold mt-4 xxs:text-[18px] sm:text-[17px] lg:text-[16px] xxs:font-bold">
            Elevate your property journey with Mumbai's Top Real Estate Advisor
          </p>
        </div>
        <div className="sm:my-24 xxs:my-12 sm:flex sm:flex-row xxs:flex xxs:flex-col xxs:items-center">
          <button
            type="button"
            className="border button-gradient py-2 px-3 font-semibold text-[16px] text-[#fff] bg-[#121A37]"
          >
            Explore Properties
          </button>
          <button
            type="button"
            className="border button-gradient xxs:ml-0 sm:ml-6 xxs:mt-3 sm:mt-0 py-2 font-semibold text-[16px] px-8 text-[#fff] bg-[#121A37]"
          >
            Contact Us
          </button>
        </div>
        <div className="flex xxs:flex-row justify-between lg:w-[50%] xxs:w-[100%] xxs:-mt-3 sm:-mt-0 items-center">
          <div className="sm:p-0 xxs:p-3">
            <h1 className="bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent lg:text-2xl sm:text-2xl font-bold">
              35 Years+
            </h1>
            <p className="sm:text-lg xxs:text-md text-[#fff] text-[13px] ">
              Experience
            </p>
          </div>
          <div className="bg-gradient-custom h-14 w-0.5"></div>
          <div className="sm:p-0 xxs:p-3">
            <h1 className="bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent lg:text-2xl sm:text-2xl font-bold">
              10000 Cr+
            </h1>
            <p className="sm:text-lg xxs:text-md text-[#fff] text-[13px] ">
              Inventory Sold
            </p>
          </div>
          <div className="bg-gradient-custom h-14 w-0.5"></div>
          <div className="sm:p-0 xxs:p-3">
            <h1 className="bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent lg:text-2xl xxs:text-2xl text-center font-bold ">
              5000+
            </h1>
            <p className="sm:text-lg xxs:text-md text-[#fff] text-[13px] ">
              Happy Customers Served
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
