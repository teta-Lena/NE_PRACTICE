import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCar,
  faCarSide,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="h-[1/4%] px-3 pb-4 bg-[#293241] w-full flex justify-between">
      <div className="my-4">
        <p className="font-bold text-white mx-10">EDMS</p>
      </div>
      <div className="my-4 mx-10">
        <p className="font-bold text-white mx-10">Name</p>
      </div>
    </div>
  );
};

export default NavBar;
