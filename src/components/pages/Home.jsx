import React from "react";
import {
  HomeHeader,
  HomeProjects,
  CompareProperties,
  ChooseUs,
  Feedback,
  Footer,
} from "../layout";
const Home = () => {
  return (
    <div className="font-lato">
      <HomeHeader />
      <HomeProjects />
      <CompareProperties />
      <ChooseUs />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
