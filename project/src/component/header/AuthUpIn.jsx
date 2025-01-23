import React from "react";
import { useNavigate } from "react-router-dom";
import { authAction } from "../../constant/authAction";
import "../../reset.css"


const Approutes = Object.entries(authAction);

const AuthUpIn = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="flex gap-x-[30px] text-[30px]">
      {Approutes.map(([key, value]) => (
          <li
            className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500"
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