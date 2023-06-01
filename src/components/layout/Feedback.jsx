import React from "react";
import { people } from "../../constants";
import { whatsapp, phone } from "../../assets/images";

const Person = ({ name, comma, icon, description }) => {
  return (
    <div className="bg-[#fff] z-[9999px] shadow-md rounded-lg my-4 lg:mx-16 md:mx-5 p-5 lg:h-72 md:h-[175%]  lg:w-[25%] md:w-[50%] md:-mt-40">
      <div className="flex justify-between">
        <h1 className="font-bold text-[20px]">{name}</h1>
        <img
          src={comma}
          alt=""
          className="lg:w-auto md:w-[30px] lg:h-auto md:h-[20px]"
        />
      </div>
      <img src={icon} alt="" className="w-16 my-3 h-16" />
      <p className="text-[18px] ">{description}</p>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className="absolute w-full h-80 bg-[#F3ECE0] -z-50 lg:top-[3740px] md:top-[4440px] sm:top-[6480px] xxs:top-[8800px]">
      <div className="text-center my-8">
        <h1 className="text-[#503E1D] font-bold text-[34px]">
          Customers Feedback
        </h1>
        <p className="font-bold text-[20px]">
          Explore the positive feedback from our valued customers
        </p>
      </div>
      <div className="md:flex absolute sm:grid sm:grid-cols-1 md:gap-0 sm:gap-3 xxs:gap-y-1 xxs:grid-cols-1 xxs:grid md:w-full sm:w-[100%] md:h-[200px] sm:h-[800px] xxs:h-[1000px] bg-gradient-to-t from-custom-color4 via-custom-color5 to-custom-color4 inset-0 font-lato md:top-[310px] sm:top-[180px] xxs:top-[180px]">
        {people.map((person, index) => (
          <Person key={index} {...person} />
        ))}
      </div>
      <div className="absolute w-full sm:h-48 xxs:h-56 md:top-[510px] sm:top-[980px] xxs:top-[1180px] bg-[#F3ECE0]">
        <h1 className="text-center font-bold text-[30px] my-6">
          Get in Touch with Us
        </h1>
        <div className="sm:flex sm:justify-center sm:items-center xxs:flex-col sm:flex-row xxs:flex xxs:items-center">
          <button
            type="button"
            className="flex mr-4 items-center rounded-lg p-2 shadow-md bg-[#BECEE8] "
          >
            <img src={whatsapp} />
            <h1 className="sm:text-[19px] xxs:text-[17px] text-[#040725] ml-2">
              Connect On Whatsapp
            </h1>
          </button>
          <button className="flex ml-4 xxs:mt-2 sm:mt-0 items-center rounded-lg p-3 shadow-md bg-[#BECEE8] ">
            <img src={phone} alt="" />
            <h1 className="sm:text-[19px] xxs:text-[17px] text-[#040725] ml-3">
              {" "}
              +918208338990
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
