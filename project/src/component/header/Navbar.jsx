import React from "react";
import { routes } from "../../constant/route";
import { useNavigate } from "react-router-dom";
import "../../reset.css";

const Approutes = Object.entries(routes);

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav >
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

export default Navbar;