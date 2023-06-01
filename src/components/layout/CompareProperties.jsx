import React from "react";
import {
  compare1,
  compare2,
  select,
  thane,
  chembur,
  powai,
  mulund,
  rectangle,
} from "../../assets/images";

const CompareProperties = () => {
  return (
    <div className="absolute inset-0 font-lato lg:top-[1900px] md:top-[2500px] sm:top-[4200px] xxs:top-[4300px]">
      <div className="text-center">
        <h1 className="font-bold bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent xxs:w-auto leading-[50px] text-[40px]">
          Compare Properties
        </h1>
        <p className="font-lato text-white mt-2 text-[16px]">
          Discover the perfect property that suits your needs
        </p>
        <ul className="flex justify-evenly font-lato text-[18px] text-white items-center my-4 mx-16">
          <li className="flex items-center">
            {" "}
            <img src={select} className="mb-1" />
            <h1 className="ml-4">All Projects</h1>
          </li>
          <li>Newly Launched</li>
          <li>OC Ready Homes</li>
        </ul>
      </div>
      <div className="sm:flex my-20 sm:justify-evenly xxs:grid xxs:grid-cols-1 xxs:gap-2 sm:gap-0">
        <div>
          <img
            src={compare1}
            alt=""
            className="sm:w-[75%] sm:h-[220px] md:w-[90%] md:h-[260px] lg:w-[100%] lg:h-[325px]"
          />
        </div>
        <div>
          <img
            src={compare2}
            alt=""
            className="sm:w-[75%] sm:h-[220px] md:w-[90%] md:h-[260px] lg:w-[100%] lg:h-[325px]"
          />
        </div>
        <div className="bg-[#BCCEE8] sm:w-[25%] sm:h-[220px] xxs:h-[320px] md:w-[25%] md:h-[260px] lg:w-[25%] lg:h-[325px] rounded-lg">
          <p className=" text-center lg:mt-40 md:mt-28 sm:mt-24 xxs:mt-32 text-[20px]">
            +Add
          </p>
        </div>
      </div>
      <div className=" my-20 xxs:mx-10 sm:mx-0">
        <div className="text-center my-12">
          <h1 className="text-[#503E1D] font-bold text-[40px]">
            Top Localities
          </h1>
          <p className="font-semibold">
            Uncover finest properties in exclusive localities
          </p>
        </div>
        <div className="md:flex md:justify-around sm:grid xxs:grid xxs:grid-cols-1 xxs:gap-28 md:mx-0 sm:mx-4 sm:grid-cols-2 sm:gap-20">
          <div className="">
            <img
              src={thane}
              alt=""
              className="bg-[#00151E] -z-50 md:w-48 md:h-44 sm:w-80"
            />
            <img
              src={rectangle}
              alt=""
              className="absolute md:w-48 md:h-44 sm:w-80 -mt-44 opacity-10"
            />
            <p className="text-center z-[9999px] -mt-24 font-lato text-[20px] text-[#fff]">
              Thane
            </p>
          </div>
          <div>
            <img
              src={mulund}
              alt=""
              className="bg-[#00151E] -z-50 md:w-48 md:h-44 sm:w-80"
            />
            <img
              src={rectangle}
              alt=""
              className="absolute md:w-48 md:h-44 sm:w-80 sm:h-32  sm:-mt-44 xxs:-mt-48 opacity-50"
            />
            <p className="text-center z-50 -mt-24 font-lato text-[20px] opacity-100 text-[#fff]">
              Mulund
            </p>
          </div>
          <div>
            <img
              src={rectangle}
              alt=""
              className="absolute md:w-48 md:h-44 sm:w-80 opacity-40"
            />
            <img
              src={chembur}
              alt=""
              className="bg-[#00151E] z-10 md:w-48 md:h-44 sm:w-80"
            />
            <p className="text-center z-50 -mt-24 font-lato text-[20px] text-[#fff]">
              Chembur
            </p>
          </div>
          <div>
            <img
              src={powai}
              alt=""
              className="bg-[#00151E] md:w-48 md:h-44 sm:w-80"
            />
            <img
              src={rectangle}
              alt=""
              className="absolute md:w-48 md:h-44 sm:w-80 sm:h-28 sm:-mt-44 xxs:-mt-48 opacity-20"
            />
            <p className="text-center z-50 -mt-24 font-lato text-[20px] text-[#fff]">
              Powai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProperties;
