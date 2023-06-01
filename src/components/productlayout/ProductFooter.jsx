import React from "react";
import {
  navbarLogo,
  fb,
  insta,
  linked,
  mail2,
  phone2,
} from "../../assets/images";
import { wapp } from "../../assets/images/productImages";
import Contact from "../layout/Contact";

const ProductFooter = () => {
  return (
    <div className="relative top-48 font-lato">
      <div className="text-center my-16">
        <h1 className="font-bold bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent xxs:w-auto leading-[50px] text-[35px]">
          Disclaimer
        </h1>
        <p className="text-[#fff] font-semibold pb-5 font-lato text-[19px]">
          MahaRera Registration Number: Maximum City - P51700050827,
          P51700050828, P51700050829.
        </p>
        <p className="text-[#fff] text-center font-lato text-[17px] px-64">
          Thank you for visiting our website. The content provided on this
          website is for informational purposes only, and should not be
          construed as legal advice on any subject matter. Without any
          limitation or qualification, users hereby agree with this Disclaimer,
          when accessing or using this website.
        </p>
      </div>
      <div className="absolute w-full flex flex-col items-center -mt-56 justify-center">
        <img src={mail2} alt="" className="self-end mr-12" />
        <img src={wapp} alt="" className="self-end w-7 h-7 my-6 mr-12" />
        <img src={phone2} alt="" className="self-end mr-12" />
      </div>
      <Contact />
      <div className="bg-gradient-to-br from-indigo-900 via-yellow-400 to-blue-900 border opacity-25 mt-16 mb-4"></div>
      <div className="flex justify-around items-center">
        <div className="w-[25%]">
          <img src={navbarLogo} alt="" className="w-24 h-24 " />
          <p className="text-[#fff]">
            Welcome to Proportunity. Discover new properties with expert
            guidance, and personalized approach for unparalleled success.
            Elevate your real estate ventures with us.
          </p>
        </div>
        <div>
          <h1 className="mb-8 text-white font-bold text-[23px]">Quick Links</h1>
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

export default ProductFooter;
