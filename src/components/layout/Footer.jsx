import React from "react";
import {
  navbarLogo,
  photo,
  fb,
  insta,
  linked,
  mail2,
  phone2,
} from "../../assets/images";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="absolute w-full lg:h-[1320px] md:h-[1572px] sm:h-[2000px] xxs:h-[2540px] -z-50 lg:top-[4440px] md:top-[5140px] sm:top-[7650px] xxs:top-[10200px] bg-gradient-to-t from-custom-color4 via-custom-color5 to-custom-color4 inset-0 font-lato">
      <div className="text-center my-16">
        <h1 className="font-bold bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent xxs:w-auto leading-[50px] text-[35px]">
          A Trusted Partner For Leading Developers
        </h1>
        <p className="text-[#fff] font-lato text-[17px]">
          We collaborate with developers to deliver exceptional results,
          fostering success in every success
        </p>
      </div>
      <div className="flex justify-around">
        <img src={photo} alt="" className="w-8 h-8" />
        <img src={photo} alt="" className="w-8 h-8" />
        <img src={photo} alt="" className="w-8 h-8" />
        <img src={photo} alt="" className="w-8 h-8" />
        <img src={photo} alt="" className="w-8 h-8" />
        <img src={photo} alt="" className="w-8 h-8" />
        <img src={photo} alt="" className="w-8 h-8" />
        <img src={photo} alt="" className="w-8 h-8" />
      </div>
      <Contact />
      <div className="bg-gradient-to-br from-indigo-900 via-yellow-400 to-blue-900 border opacity-25 mt-16 mb-4"></div>
      <div className="sm:flex sm:flex-row sm:justify-around sm:items-center xxs:flex xxs:flex-col">
        <div className="sm:w-[25%] xxs:w-auto">
          <img src={navbarLogo} alt="" className="w-24 h-24 " />
          <p className="text-[#fff]">
            Welcome to <b>Proportunity</b>. Discover new properties with expert
            guidance, and personalized approach for unparalleled success.
            Elevate your real estate ventures with us.
          </p>
        </div>
        <div className="sm:my-0 xxs:my-6">
          <h1 className="sm:mb-8 xxs:mb-4 text-white font-bold text-[23px]">
            Quick Links
          </h1>
          <ul className="grid grid-cols-2 gap-4 text-white">
            <li>Home</li>

            <li>Contact Us</li>
            <li>Properties</li>
            <li>About Us</li>
            <li>Compare Properties</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-3  text-white font-bold text-[23px]">
            Connect With Us
          </h1>
          <div className="flex items-center mb-3  justify-start">
            <img src={fb} alt="" className="w-4 h-6" />
            <img src={insta} alt="" className="w-6 h-6 mx-4 " />
            <img src={linked} alt="" className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center my-3">
              <img src={mail2} alt="" className="w-5 h-4 mr-4 " />
              <div className="text-white">
                <p>info@proportunity.in</p>
                <p>connect@proportunity.in</p>
              </div>
            </div>
            <div className="flex mt-3">
              <img src={phone2} alt="" className="mr-5" />
              <p className="text-white">8208338990</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-indigo-900 via-yellow-400 to-blue-900 border opacity-25 mt-16 mb-4"></div>
      <div>
        <p className="text-center text-white">
          Copyright &copy; 2023 Proportunity
        </p>
      </div>
    </div>
  );
};

export default Footer;
