import React, { useState, useEffect } from 'react';
import "../../reset.css"
import "../../App.css"
import Navbar from './Navbar';
import AuthUpIn from './AuthUpIn';
import { Link, useNavigate } from 'react-router-dom'; 
import { routes } from '../../constant/route';
import burger from "../header/headerimg/burger.svg"


const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");  
  const navigate = useNavigate();  

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/products?search=${searchQuery}`);
    }else{
      navigate(`products`)
    }
  };

  return (
    <header
      className={`w-full bg-slate-700 flex items-center justify-between p-[30px] fixed top-0 transition-all duration-300 z-50  ${
        visible ? 'opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <Link className='logo text-[50px] text-red-500 border border-solid border-black p-[10px] rounded-[10px]' to={routes.home}>
        Kolh's
      </Link>
      <Navbar />
      <section className='flex items-center gap-x-[20px]'>
        <form onSubmit={handleSearchSubmit}>
          <input
            className='w-[300px] h-[30px] rounded-[30px] bg-slate-500 placeholder:text-white header_input'
            placeholder='Search Product'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  
          />
        </form>
        <AuthUpIn />
        <img className='burger w-[50px]' src={burger}/>
      </section>
    </header>
  );
}

export default Header;
