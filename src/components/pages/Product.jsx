import React from "react";
import {
  ProductHeader,
  AboutProduct,
  Gallery,
  ProjectAmenities,
  Advantages,
  ProductFooter,
} from "../productlayout";

import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="bg-gradient-to-b -z-50 from-custom-color4 via-custom-color5 to-custom-color4 h-[6400px]">
        <p>{id}</p>
        <ProductHeader />
        <AboutProduct />
        <Gallery />
        <ProjectAmenities />
        <Advantages />
        <ProductFooter />
      </div>
    </div>
  );
};

export default Product;
