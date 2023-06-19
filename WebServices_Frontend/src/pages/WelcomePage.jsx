import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center  w-full h-full ">
      <div className="my-10 ">
        <p className="text-3xl font-bold">Welcome</p>
        <button
          onClick={handleClick}
          className="p-2 border bg-blue-500 color-white my-4 text-white rounded-md"
        >
          Navigate To login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
