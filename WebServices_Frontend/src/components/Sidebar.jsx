import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCar,
  faCarSide,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ fname, lname }) => {
  console.log(fname + lname);
  return (
    <div className="h-full px-3 pb-4  bg-blue-800 w-1/4">
      <h3 className="text-center my-5 font-bold text-xl">Dashboard</h3>
      <ul className="flex flex-col items-center font-medium my-24">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg"
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="ml-3">Users</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg"
          >
            <FontAwesomeIcon icon={faCarSide} />

            <span className="flex-1 ml-3 whitespace-nowrap">Car owners</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg"
          >
            <FontAwesomeIcon icon={faCar} />
            <span className="ml-3">Cars</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg "
          >
            <FontAwesomeIcon icon={faBolt} />
            <span className="ml-3">Settings</span>
          </a>
        </li>
      </ul>
      <div className="flex justify-center gap-3">
        <FontAwesomeIcon icon={faUser} color="white" />
        {fname && lname && (
          <p className="text-center text-white">{`${fname} ${lname}`}</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
