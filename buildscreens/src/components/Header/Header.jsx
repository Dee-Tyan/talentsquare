import React from "react";
import logo from "../../assets/Bani 5.svg";
import bell from "../../assets/bell.svg";
const Header = () => {
  return (
    <div className="flex items-center justify-between h-20 px-4 bg-white shadow-sm">
      <div>
        <img src={logo} />
      </div>

      <div className="flex flex-row">
        <img src={bell} className="px-2" />
        <div className="flex flex-row bg-lblue rounded-lg px-4 py-2">
          <div className="rounded-full bg-blue flex justify-center items-center w-10">
            <p className=" text-white text-center "> JT</p>
          </div>
          <div className="text-sm ml-4">
            <h3>JT Industry Limit..</h3>
            <p className="text-dtext">JamesT@gmail.com</p>
          </div>
          <div className="ml-4">
            <p> ⌄</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
