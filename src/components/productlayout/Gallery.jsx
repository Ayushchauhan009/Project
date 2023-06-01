import React from "react";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
} from "../../assets/images/productImages";

const Gallery = () => {
  return (
    <div className="relative top-80">
      <h1 className="font-bold text-center bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent leading-[50px] xxs:w-auto text-3xl">
        Gallery
      </h1>
      <div class="grid grid-cols-1 p-16 md:grid-cols-1 gap-4">
        <div class="md:col-span-4">
          <img src={photo1} alt="Image 1" />
        </div>
        <img src={photo2} alt="Image 2" className="w-72 h-60" />
        <img src={photo3} alt="Image 3" />
        <img src={photo4} alt="Image 4" />
        <img src={photo5} alt="Image 5" />
      </div>
    </div>
  );
};

export default Gallery;
