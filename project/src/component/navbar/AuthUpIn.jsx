import React from "react";
import { useNavigate } from "react-router-dom";
import "../../reset.css";
import { authAction } from "../../constant/authAction";


const Approutes = Object.entries(authAction);

const AuthUpIn = () => {
  const navigate = useNavigate();

  return (
    <nav className="">
      <ul className="flex gap-x-[30px] text-[30px]">
      {Approutes.map(([key, value]) => (
          <li
            className="cursor-pointer border border-solid border-black"
            key={key}
            onClick={() => navigate(value)}
           >
            {key}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AuthUpIn;