import React from "react";
import {
  home,
  play,
  singapore,
  whatsapp,
  youtube,
  hello,
} from "../../assets/images/productImages";

const ProjectAmenities = () => {
  return (
    <div>
      <div className="relative bg-[#F3ECE0] mx-16  top-80">
        <h1 className="text-[#503E1D] font-bold py-6 text-[26px] font-lato text-center">
          Project Amenities
        </h1>
        <div className="md:flex md:flex-row md:justify-around pb-10 md:items-center xxs:flex xxs:flex-col">
          <p className="text-center">
            <img src={home} alt="" />
            <span>Gym</span>
          </p>
          <p className="text-center">
            <img src={home} alt="" />
            <span>Gaming Zone</span>
          </p>
          <p className="text-center">
            <img src={home} alt="" />
            <span>MultiPurpose Hall</span>
          </p>
          <p className="text-center">
            <img src={home} alt="" />
            <span>Yoga Zone</span>
          </p>
          <p className="text-center">
            <img src={home} alt="" />
            <span>Kids Play Area</span>
          </p>
          <p className="text-center">
            <img src={home} alt="" />
            <span>Indoor Heated Zone</span>
          </p>
        </div>
        <img src={play} alt="" />
      </div>
      <div className="">
        <img src={singapore} alt="" className="mt-96 z-0  p-16" />
        <img src={youtube} alt="" className="-mt-80 absolute mx-[650px]" />
        <div>
          <p className="z-50 relative font-lato -mt-96 px-28 w-[30%] text-[#503E1D] font-bold text-[28px]">
            Lorem ipsum dolor sit amet
          </p>
          <p className="px-28 flex items-center mt-3">
            <img src={whatsapp} alt="" />{" "}
            <span className="ml-5 font-bold font-lato text-[17px]">
              +Lorem Ipsum
            </span>
          </p>
          <p className="px-28 flex items-center mt-3">
            <img src={hello} alt="" className="h-6 w-6 ml-1" />
            <span className="ml-6 font-bold font-lato text-[17px]">
              (123) 456- 7890
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectAmenities;
