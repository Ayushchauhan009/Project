import React from "react";
import { choosers } from "../../constants";

const Choose = ({ icon, title, description }) => {
  return (
    <div className="bg-[#F3ECE0] rounded-lg shadow-md m-8 w-[85%] p-6">
      <div className="bg-[#BECEE8] border border-[#BECEE8] ml-2 -mt-16 w-[70px] h-[70px] flex justify-center items-center rounded-full shadow-md">
        <img src={icon} alt="" className="w-9 h-8 " />
      </div>
      <div className="choose-item-content  flex flex-col justify-around items-start">
        <h2 className="text-[#040725] font-bold my-4 text-[22px]">{title}</h2>
        <p className="text-[18px]">{description}</p>
      </div>
    </div>
  );
};

const ChooseUs = () => {
  return (
    <div className="absolute -z-10 w-full lg:h-[800px] md:h-[940px] sm:h-[1140px] xxs:h-[2100px] blend-multiply bg-gradient-to-t from-custom-color4 via-custom-color5 to-custom-color4 inset-0 font-lato lg:top-[2940px] md:top-[3500px] sm:top-[5350px] xxs:top-[6700px]">
      <div className="text-center my-12">
        <h1 className="font-bold bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent xxs:w-auto leading-[50px] text-[35px]">
          Why Choose Us?
        </h1>
        <p className="font-lato text-white mt-2 xxs:mx-2 text-[18px]">
          Trust in our expertise and personalized approach for your real estate
          journey
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 sm:grid sm:grid-cols-2">
        {choosers.map((chooser, index) => (
          <Choose key={index} {...chooser} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
