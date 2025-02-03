import React from "react";
import { NavLink } from "react-router-dom";
import "../../reset.css";
import "../../App.css";

const Footer = () => {
  return (
    <footer className=" w-full flex justify-between py-[50px] px-[150px] bg-slate-700 footer">
      <ul className="flex flex-col gap-y-[20px] footer_ul">
        <h3 className="text-red-500 text-[30px]">Customer service</h3>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Contact US
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Shipping
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Return
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Rebates
        </NavLink>
      </ul>
      <ul className="flex flex-col gap-y-[20px] footer_ul">
        <h3 className="text-red-500 text-[30px]">Shop Kolh's</h3>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          My List
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Store Locator
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Gift Card
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Kolh's Koupons
        </NavLink>
      </ul>
      <ul className="flex flex-col gap-y-[20px] footer_ul">
        <h3 className="text-red-500 text-[30px]">About Kolh's</h3>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Our Website
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Community
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Carrers
        </NavLink>
        <NavLink className="cursor-pointer px-6 py-3 text-white rounded-lg hover:bg-red-500  hover:scale-120  transition-all duration-300 ease-in-out">
          Investor Relations
        </NavLink>
      </ul>
    </footer>
  );
};

export default Footer;
