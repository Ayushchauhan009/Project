import React from "react";
import { properties } from "../../constants";
import { phoneCall } from "../../assets/images";
import { Link } from "react-router-dom";

const Project = ({
  icon,
  title,
  range,
  imageArea,
  imageLayout,
  imageStatus,
  imageAddress,
  area,
  layout,
  status,
  address,
}) => {
  return (
    <div className="sm:m-8 xxs:my-6 sm:mx-8 bg-[#fff] my-5 sm:w-96 xxs:w-auto shadow-md border rounded">
      <img src={icon} className="rounded border" />
      <div className=" w-68 h-48 flex">
        <div className="border h-36">
          <h2 className="w-40 p-2 text-[#2B345B] text-[18px] font-semibold">
            {title}
          </h2>
          <p className="w-32 p-3 text-[16px] font-semibold">{range}</p>
        </div>
        <div className="text-[14px] flex flex-1 flex-col justify-center items-start border h-36 ">
          <div className="flex justify-between my-1 items-center">
            <img src={imageArea} alt="" className="w-4 h-4 ml-2" />
            <h2 className="ml-3">Area</h2>
            <p className="ml-10">{area}</p>
          </div>
          <div className="flex justify-between my-1 items-center">
            <img src={imageLayout} alt="" className="w-4 h-4 ml-2" />
            <h2 className="ml-3">Layout</h2>
            <p className="ml-7">{layout}</p>
          </div>
          <div className="flex justify-between items-center my-1">
            <img src={imageStatus} alt="" className="w-4 h-4 ml-2" />
            <h2 className="ml-3">Status</h2>
            <p className="ml-8">{status}</p>
          </div>
          <div className="flex justify-between items-start my-1">
            <img src={imageAddress} alt="" className="w-4 h-5 ml-2" />
            <h2 className="ml-3">Address</h2>
            <p className="ml-5">{address}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center -mt-6 pb-4 justify-around">
        <Link
          to="/property"
          type="button"
          className="border rounded border-[#9a9a9a] shadow-md px-2 py-1 flex items-center justify-between"
        >
          <h1>View Property</h1>
        </Link>
        <button
          type="button"
          className="border rounded border-[#9a9a9a] shadow-md px-2 py-1 flex items-center justify-between"
        >
          <img src={phoneCall} />
          <h1 className="ml-2">Call Advisor</h1>
        </button>
      </div>
    </div>
  );
};

const HomeProjects = () => {
  return (
    <div>
      <div className="absolute -z-10 inset-0 top-[592px] w-full lg:h-[1690px] md:h-[2250px] sm:h-[3950px] xxs:h-[4000px] blend-multiply bg-gradient-to-t from-custom-color4 via-custom-color5 to-custom-color4">
        <div className="z-50 text-center my-12 ">
          <h1 className="bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent font-bold xxs:w-auto leading-[50px] text-4xl">
            Our Projects
          </h1>
          <p className="text-[#fff] text-[15px] font-lato font-medium">
            Explore our collection of newly launched prime properties
          </p>
        </div>
        <div className="grid lg:grid-cols-3 xxs:grid-cols-1 md:grid-cols-2">
          {properties.map((property) => (
            <Project property={property} key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
