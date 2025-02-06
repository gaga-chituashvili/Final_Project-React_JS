import React from "react";
import { routes } from "../../constant/route";
import { useNavigate } from "react-router-dom";
import "../../reset.css";

const Approutes = Object.entries(routes);

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="header_ul flex gap-x-[30px] text-[30px]">
        {Approutes.map(([key, value]) => (
          <li
            className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out"
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

export default Navbar;
