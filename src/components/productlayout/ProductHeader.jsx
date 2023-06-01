import React from "react";
import { productBanner, rectangle2 } from "../../assets/images/productImages";
import { Navbar } from "../layout";

const ProductHeader = () => {
  return (
    <div>
      <img src={productBanner} alt="" className="absolute z-0" />
      <img src={rectangle2} alt="" className="z-50 absolute opacity-100" />
      <div className="relative z-50">
        <Navbar />
        <div className="px-40 mt-36">
          <h1 className="font-bold text-center bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent lg:w-[27%] leading-[50px] xxs:w-auto  text-4xl">
            Maximum City
          </h1>
          <p className="font-semibold text-white mt-2 text-[16px]">
            Lorem ipsum dolor sit amet, consectetuer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
