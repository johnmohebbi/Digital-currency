import React from "react";
import { IconContext } from "react-icons";
//redux
import { useSelector } from "react-redux";
import { FaDollarSign } from "react-icons/fa";
const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  const data = useSelector((state) => state.cryptoState);

  return (
    <div className={`${data.darkMode ? "bg-[#f1faee] text-[#1d3557] shadow-white" :"bg-[#E1E5EA] text-[#1A374D] shadow-gray-300"} w-[96%]  xs:mx-0 xs:w-11/12  sm:w-3/4 h-20  px-2  flex justify-between items-center shadow-md   rounded-md my-3 "`}>
      {/* 1 */}
      <div className="w-[6.5%] md:w-1/12 sm:pl-0 md:pl-3 bg-center">
        <img src={image} alt="coin" className="w-full inline-block" />
      </div>
      {/* 2 */}
      <div className="w-2/12 md:w-2/12 text-sm sm:text-base sm:font-extrabold md:text-lg lg:text-xl pl-1 ">
        <span className=" font-semibold">{name}</span>
      </div>
      {/* 3 */}
      <div className="w-1/12 md:w-[6%] text-sm sm:text-base  md:text-lg lg:text-xl md:grow">
        <span className=" font-semibold">{symbol.toUpperCase()}</span>
      </div>
      {/* 4 */}
      <div className="w-2/12 md:w-2/12 text-sm sm:text-base  md:text-lg lg:text-xl">
        <span className=" font-semibold inline-flex items-center ">
          <span className="lg:mt-1">
            <IconContext.Provider value={{ className: `${data.darkMode ?"text-[#1d3557]":"text-[#1A374D]"}` }}>
              <FaDollarSign />
            </IconContext.Provider>
           
          </span>
          <span>{price.toLocaleString()}</span>
        </span>
      </div>
      {/* 5 */}
      <div className="w-1/12 md:w-1/12 text-xs sm:text-base  md:text-lg lg:text-xl">
        <span
          className={`mb-1 ${
            priceChange.toFixed(3) > 0 ? "text-[#38b000]" : "text-red-600"
          } font-medium inline-block`}
        >
          {priceChange.toFixed(3)}
        </span>
      </div>
      {/* 6 */}
      <div className="w-4/12 md:w-3/12 text-sm sm:text-base ml-3 md:pl-3 md:text-lg lg:text-xl  md:grow-2 inline-flex justify-around md:flex md:justify-center">
        <span className=" font-semibold inline-flex items-center ">
          <span className="lg:mt-1">
            <IconContext.Provider value={{ className: "text-[#1d3557] text-sm sm:text-base" }}>
              <FaDollarSign />
            </IconContext.Provider>
          
          </span>
          <span>{marketCap.toLocaleString()}</span>
        </span>
      </div>
    </div>
  );
};

export default Coin;
