import React from "react";
import { useSelector } from "react-redux";
const Skeleton = () => {
  const data = useSelector((state) => state.cryptoState);
  return (
    <section className="flex justify-center">
      <div
        className={`animate-pulse ${
          data.darkMode
            ? "bg-[#f1faee] shadow-white"
            : "bg-[#E1E5EA] shadow-gray-300"
        } w-[96%]  xs:mx-0 xs:w-11/12  sm:w-3/4 h-20  px-2  flex justify-between items-center shadow-md   rounded-md my-3 "`}
      >
        {/* 1 */}
        <div className="w-10 h-10 md:w-12 md:h-12 sm:pl-0 md:pl-3 bg-center bg-[#a2b1c7] rounded-full"></div>
        {/* 2 */}
        <div className="w-2/12 h-6 bg-[#b8c6d8] pl-1 rounded-md"></div>
        {/* 3 */}
        <div className="w-1/12 h-6 bg-[#CBD5E1] pl-1 rounded-md"></div>
        {/* 4 */}
        <div className="w-2/12 h-6 bg-[#b8c6d8] pl-1 rounded-md"></div>
        {/* 5 */}
        <div className="w-1/12 h-6 bg-[#CBD5E1] pl-1 rounded-md"></div>
        {/* 6 */}
        <div className="w-4/12 h-6 bg-[#b8c6d8] pl-1 rounded-md"></div>
      </div>
    </section>
  );
};

export default Skeleton;
