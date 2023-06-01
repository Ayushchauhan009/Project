import React from "react";
import {
  apartment,
  building,
  building1,
  check,
  floorPlan,
  fullScreen,
  map,
  residence,
  subtract,
} from "../../assets/images/productImages";

const AboutProduct = () => {
  return (
    <div className="relative font-lato top-72">
      <div>
        <h1 className="font-bold text-center bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent leading-[50px] xxs:w-auto  text-4xl">
          About Project
        </h1>
        <p className="font-semibold text-center text-white text-[16px]">
          Welcome to Raunak's Maximum City
        </p>
      </div>
      <div className="flex py-16 justify-around text-white">
        <div className="w-[50%] flex flex-col justify-between">
          <p>
            Raunak Group, a prominent real estate company, has meticulously
            crafted residential apartments in a highly sought-after location in
            Thane West, near Ghodbunder Road. Raunak Maximum City offers a
            variety of affordable, comfortable and well-ventilated apartment
            units. It is a 30 Storey Tower, part of a 20-acre Mega opulent
            township located at the prime location of the Thane West.
          </p>

          <p className="my-6">
            These apartments offer affordable and comfortable 1 BHK units with a
            carpet area of 450-500 sqft, and 2 BHK units with a carpet area of
            610-622 sqft. The possession is expected in 3-4* years. Raunak
            Maximum City boasts multiple amenities and is part of a 20-acre
            township.
          </p>
          <div className="my-6">
            <p className="flex items-center">
              <img src={check} alt="" />
              <span className="ml-6">
                Fully-furnished 1 & 2 BHKs designed for big space
              </span>
            </p>
            <p className="flex my-2 items-center">
              <img src={check} alt="" />
              <span className="ml-6">
                Multi-Zone Life created to bring nature & leisure together
              </span>
            </p>
            <p className="flex items-center">
              <img src={check} alt="" />
              <span className="ml-6">
                Ghodbunder Lifestyle Belt where you get all the best
                infrastructure on one main road
              </span>
            </p>
            <p className="flex my-2 items-center">
              <img src={check} alt="" />
              <span className="ml-6">
                Your nature at maximum with a 30-acres layout at Yeoor foothills
              </span>
            </p>
          </div>
          <p>
            Maximum City is rightly named because you will find that every
            important feature and amenity has been innovated to the maximum. A
            Jacuzzi is not a Jacuzzi, it's a Skyline Jacuzzi. A leisure walkway
            is not a walkway, it's a tropical forest track.
          </p>
        </div>
        <div>
          <img src={building1} alt="" className="w-96 h-[500px]" />
        </div>
      </div>
      <div className="flex justify-around px-6 text-white item-center">
        <p className="flex flex-col justify-center  items-center">
          <img src={residence} alt="" />{" "}
          <span className="w-[50%] text-center">Property Residential</span>
        </p>
        <p className="flex flex-col justify-center items-center mt-4">
          <img src={fullScreen} alt="" />{" "}
          <span className="mt-4 w-[60%] text-center">Land Size 32 Acres</span>
        </p>
        <p className="flex flex-col justify-center items-center">
          <img src={building} alt="" />{" "}
          <span className="w-[60%] text-center">Floors 30 storey</span>
        </p>
        <p className="flex flex-col justify-center items-center">
          <img src={apartment} alt="" />{" "}
          <span className="w-[55%] text-center">Apartments 1, 2 & 3 BHK</span>
        </p>
        <p className="flex flex-col justify-center items-center">
          <img src={map} alt="" />{" "}
          <span className="w-[60%] text-center">Area 435-600 sq ft</span>
        </p>
        <p className="flex flex-col justify-center mt-1 items-center ">
          <img src={subtract} alt="" />{" "}
          <span className="mt-4 w-[60%] text-center">Possession July 2027</span>
        </p>
      </div>
      <div className="flex p-16">
        <div className="flex-1">
          <h1 className="font-bold text-center bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent leading-[50px] xxs:w-auto  text-2xl">
            Configuration
          </h1>
          <div className="flex text-white mt-6 justify-around">
            <div>
              <h1 className="font-bold text-[20px]">Type</h1>
              <p className="my-3">1 BHK</p>
              <p>2 BHK</p>
              <p className="my-3">3 BHK</p>
            </div>
            <div>
              <h1 className="font-bold text-[20px]">Carpet Area</h1>
              <p className="my-3">435 sq ft</p>
              <p>610 - 650 sq ft</p>
              <p className="my-3">860 sq ft</p>
            </div>
            <div>
              <h1 className="font-bold text-[20px]">Price</h1>
              <p className="my-3">58 Lacs*</p>
              <p>87 Lacs*</p>
              <p className="my-3">1.21 Cr*</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-center bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent leading-[50px] xxs:w-auto  text-2xl">
            Floor Plan
          </h1>
          <img src={floorPlan} alt="" className="mt-6 w-80 h-56" />
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
