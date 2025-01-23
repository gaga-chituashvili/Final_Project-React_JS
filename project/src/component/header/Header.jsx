import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AuthUpIn from './AuthUpIn';
import { Link } from 'react-router-dom';
import { routes } from '../../constant/route';
import "../../reset.css"

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  return (
    <header
      className={`w-full bg-slate-700 flex items-center justify-between p-[30px] fixed top-0 transition-all duration-300 ${
        visible ? 'opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <Link className='text-[50px] text-red-500 border border-solid border-black p-[10px] rounded-[10px]' to={routes.home}>
        Kolh's
      </Link>
      <Navbar />
      <section className='flex gap-x-[20px]'>
        <input className='w-[300px] rounded-[30px]' placeholder='Search Product' />
        <AuthUpIn />
      </section>
    </header>
  );
}

export default Header;
