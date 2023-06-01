import React from "react";
import { mapgeo, arrowtick } from "../../assets/images/productImages";

const Advantages = () => {
  return (
    <div className="relative top-64">
      <h1 className="font-bold text-center bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent leading-[50px] xxs:w-auto text-4xl">
        Location Advantages
      </h1>
      <p className="text-center text-white text-[18px]">
        Experience the joy of unparalleled connectivity
      </p>
      <div>
        <div className="flex font-lato p-16">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-8 text-white">
              <div>
                <h1 className="font-bold text-[22px]">Schools</h1>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">New Horizon Scholar School 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Podar International School 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">School of Law 10 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">
                    Rustomjee Cambridge International School 10 min
                  </span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">D.A.V. Public School 10 min</span>
                </p>
              </div>
              <div>
                <h1 className="font-bold text-[22px]">Malls</h1>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Big Shopping Centre 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Hypercity 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">D-Mart 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Wonder Mall 10 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">High Street Mall 10 min</span>
                </p>
              </div>
              <div>
                <h1 className="font-bold text-[22px]">HealthCare</h1>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Hiranandani Hospital 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">
                    Dhanwantri Multi-Speciality Hospital 5 min
                  </span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Currae Hospital 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Vedant Hospital 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Highland Hospital 20 min</span>
                </p>
              </div>
              <div>
                <h1 className="font-bold text-[22px]">Religious Places</h1>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Shakti Peeth Mandir 5 min</span>
                </p>
                <p className="my-3 flex items-center">
                  <img src={arrowtick} alt="" />{" "}
                  <span className="mx-3">Datta Mandir 20 min</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={mapgeo} alt="" className=" w-80 h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
