import React from 'react';
import Navbar from './Navbar';
import AuthUpIn from './AuthUpIn';
import "../../reset.css"
import { Link } from 'react-router-dom';
import { routes } from '../../constant/route';

const Header = () => {
  return (
  <header  className='w-full bg-slate-700 flex items-center justify-between p-[30px]'>
      <Link className='text-[50px] text-red-500 border border-solid border-black p-[10px] rounded-[10px]' to={routes.home}>Kolh's</Link>
    <Navbar/>
    <section className='flex gap-x-[20px]'>
    <input className='w-[300px] rounded-[30px]' placeholder='Search Product'></input>
    <AuthUpIn/>
    </section>
  </header>
  )
}

export default Header