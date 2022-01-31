import React from "react";
import { IconContext } from "react-icons";
//components
import ToggleButton from "./ToggleButton";
//icons
import { FaBars } from "react-icons/fa";
const Header = () => {
  const x = () => {
    console.log("ok");
  };
  return (
    
      <div className="fixed top-0 w-full h-16 bg-blue-900 flex justify-between align-center  items-center px-2 font-sans">
        <div className="text-[#e2e8f0]  font-bold text-xl pb-1">
          <h1 className="">DigitalCurrency</h1>
        </div>
        <section className="w-28 inline-flex items-center">
          <ToggleButton />
          <div className=" w-10 h-10 hover:text-red-400 cursor-pointer">
            <IconContext.Provider
              value={{ className: "text-[#e2e8f0] w-full h-full" }}
            >
              <FaBars onClick={x} />
            </IconContext.Provider>
          </div>
        </section>
      </div>
    
  );
};

export default Header;
