import React, { useState, useEffect } from "react";
import "../../reset.css";
import "../../App.css";
import Navbar from "./Navbar";
import AuthUpIn from "./AuthUpIn";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../constant/route";
import { authAction } from "../../constant/authAction";
import burger from "../header/headerimg/burger.svg";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/products?search=${searchQuery}`);
    } else {
      navigate(`/products`);
    }
  };

  return (
    <header
      className={`w-full bg-slate-700 flex items-center justify-between p-[30px] fixed top-0 transition-all duration-300 z-50  ${
        visible ? "opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <Link
        className="logo text-[50px] text-red-500 border-2 border-solid border-red-500 p-[10px] rounded-[10px]"
        to={routes.home}
      >
        Kolh's
      </Link>
      <Navbar />
      <section className="flex items-center gap-x-[20px]">
        <form onSubmit={handleSearchSubmit}>
          <input
            className="w-[300px] h-[30px] rounded-[30px] bg-slate-500 placeholder:text-white header_input"
            placeholder="Search Product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <AuthUpIn />
        <img
          className="burger w-[50px] cursor-pointer "
          src={burger}
          alt="Burger Menu"
          onClick={toggleMenu}
        />
      </section>
      <article
        className={`w-[200px] absolute top-[111px] right-0  bg-slate-700 p-4  flex flex-col items-center transition-all duration-500 
               ${
                 menuOpen
                   ? "transform translate-x-0"
                   : "transform translate-x-full"
               }`}
      >
        <Link
          to={routes.home}
          className="cursor-pointer text-[20px] px-6 py-3 text-white rounded-lg hover:bg-red-500 "
        >
          Home
        </Link>
        <Link
          to={routes.products}
          className="cursor-pointer text-[20px] px-6 py-3 text-white rounded-lg hover:bg-red-500"
        >
          Products
        </Link>
        <Link
          to={routes.contact}
          className="cursor-pointer text-[20px] px-6 py-3 text-white rounded-lg hover:bg-red-500"
        >
          Contact
        </Link>
        <Link
          to={authAction.signIn}
          className="cursor-pointer text-[20px] px-6 py-3 text-white rounded-lg hover:bg-red-500"
        >
          Sign In
        </Link>
        <Link
          to={authAction.signUp}
          className="cursor-pointer text-[20px] px-6 py-3 text-white rounded-lg hover:bg-red-500"
        >
          Sign Up
        </Link>
      </article>
    </header>
  );
};

export default Header;
