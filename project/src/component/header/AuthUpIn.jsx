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
            className="sign cursor-pointer px-2 py-2 text-white rounded-lg hover:bg-red-500"
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
