import React from "react";
import { IconContext } from "react-icons";
//components
import ToggleButton from "./ToggleButton";
//icons
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="h-16 bg-blue-900 font-RobotoM flex justify-between align-center  items-center px-2">
      <div className="text-[#e2e8f0]  font-bold text-2xl pb-1">
        <h1 className="">crypto</h1>
      </div>
      <section className="w-28 inline-flex items-center">
        <ToggleButton />
        <div className=" w-10 h-10 hover:text-red-400 cursor-pointer">
          <IconContext.Provider value={{ className: "text-[#e2e8f0] w-full h-full" }}>
            <FaBars />
          </IconContext.Provider>

          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg> */}
        </div>
      </section>
    </div>
  );
};

export default Header;
