import React from "react";
import {
  facebook,
  instagram,
  linkedIn,
  location,
  mail,
  phoneCall,
  twitter,
} from "../../assets/images";

const Contact = () => {
  return (
    <div>
      <div className="text-center lg:my-20 md:my-10 sm:my-10 xxs:my-10">
        <h1 className="font-bold bg-gradient-to-r from-custom-color3 via-custom-color2 to-custom-color3 bg-clip-text text-transparent xxs:w-auto leading-[50px] text-[35px]">
          Looking To Buy A New Property
        </h1>
        <p className="text-[#fff] text-[17px] font-lato">
          Fill up the below form and turn your dreams into reality
        </p>
      </div>
      <div className="md:flex md:flex-row md:justify-around sm:flex sm:flex-col xxs:flex xxs:flex-col md:ml-44 sm:ml-24">
        <div className="rounded-lg bg-[#BECEE8] pt-4 md:w-[35%] sm:w-[75%]">
          <h1 className="ml-8 font-lato font-bold text-[20px]">
            Arrange a Meeting
          </h1>
          <p className="ml-8 font-lato text-[15px] pb-2 ">
            Unlock the door to your new home
          </p>
          <div className="rounded-tl-3xl rounded-bl-lg rounded-br-lg bg-[#fff] md:h-[92%] lg:h-auto flex flex-col pl-8 pt-4">
            <p className="lg:w-[90%] md:w-auto  font-bold my-6">
              Discover your perfect home today! Explore our diverse listings and
              turn your dream of buying a new property into reality
            </p>
            <h2 className="font-bold text-[17px]"> Contact Details</h2>
            <div className="my-5">
              <p className="flex items-center">
                <img src={phoneCall} alt="" className="mr-4" />{" "}
                <span className="mr-2">+91</span>
                8208338990
              </p>
              <p className="flex my-2 items-center">
                <img src={mail} alt="" className="mr-3" />{" "}
                <span>info@proportunity.in</span>
              </p>
              <p className="flex items-center">
                <img src={location} alt="" className="mr-5" />{" "}
                <span className="w-[90%]">
                  Highland Corporate Center, SB-19, 2nd Floor, Kapurbawdi
                  Junction, Majiwade, Thane 400 607
                </span>
              </p>
            </div>
            <h2 className="font-bold text-[18px]">Follow Us On</h2>
            <div className="flex lg:pb-2 md:pb-1">
              <img src={twitter} />
              <img src={facebook} />
              <img src={instagram} />
              <img src={linkedIn} />
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-[#BECEE8] mr-32 pt-4 md:w-[35%] sm:w-[75%] xxs:w-[100%] md:mt-0 xxs:mt-4 md:h-[80%] sm:h-[10%]">
          <h1 className="ml-8 font-lato font-bold text-[20px]">Contact Us</h1>
          <p className="ml-8 font-lato text-[15px] pb-3">
            Feel free to get in touch with us
          </p>
          <div className="rounded-tl-3xl bg-[#fff] grid grid-rows-3 gap-1 rounded-bl-lg  rounded-br-lg pl-8 md:pb-6 pt-[52px]">
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 md:gap-1 md:grid md:grid-cols-1 sm:gap-1 sm:grid sm:grid-cols-1">
              <div>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First name"
                  class="w-[95%] border  rounded-md  p-2 "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  id="last-name"
                  class=" border  rounded-md w-[95%] p-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email id"
                  class="w-[95%] border  rounded-md  p-2"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  class="w-[95%] border  rounded-md  p-2"
                />
              </div>
            </div>

            <div>
              <textarea
                id="message"
                placeholder="Message"
                rows={3}
                class="w-[97%] rounded-md  border p-2"
              ></textarea>
            </div>
            <div className="lg:my-2 md:my-0">
              <button className="flex border justify-center items-center py-1 h-10 border-[#040725] rounded-md w-32">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
