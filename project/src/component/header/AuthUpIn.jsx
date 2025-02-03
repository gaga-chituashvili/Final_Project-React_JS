import React from "react";
import { useNavigate } from "react-router-dom";
import { authAction } from "../../constant/authAction";
import "../../reset.css";

const Approutes = Object.entries(authAction);

const AuthUpIn = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="flex gap-x-[10px] text-[20px] rounded-2xl bg-slate-500">
        {Approutes.map(([key, value]) => (
          <li
            className="sign cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out"
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
