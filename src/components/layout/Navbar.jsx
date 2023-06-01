import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navbarLogo } from "../../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <div className="flex lg:items-center xxs:flex-col lg:flex-row">
      <p className="xxs:p-2 lg:mx-4">
        <Link to={"/"}>Home</Link>
      </p>
      <p className="xxs:p-2 lg:mx-4">
        <a href="#properties">Properties</a>
      </p>
      <p className="xxs:p-2 lg:mx-4">
        <a href="#compare properties">Compare Properties</a>
      </p>
      <p className="xxs:p-2 lg:mx-4">
        <a href="#about">About Us</a>
      </p>
      <p className="xxs:p-2 lg:mx-4">
        <a href="#contact">Contact Us</a>
      </p>
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex font-semibold text-[14px] justify-between items-center mx-7">
      <div className="flex justify-between w-[75%] items-center">
        <div>
          <img src={navbarLogo} className="w-24 h-24" alt="logo" />
        </div>

        <div className="lg:flex lg:flex-1  lg:px-24 lg:justify-between lg:w-auto hidden text-white ">
          <Menu />
        </div>
      </div>
      <div className="p-3 lg:mr-0 xxs:absolute xxs:right-16 lg:right-0 lg:relative bg-white">
        <button type="button">Talk to Our Advisor</button>
      </div>

      <div className="lg:hidden sm:my-8">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
            className="ml-28"
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="bg-[#503E1D] absolute z-50 w-[150px] h-[190px]">
            <div>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
