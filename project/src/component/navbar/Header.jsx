import React from 'react';
import Navbar from './Navbar';
import AuthUpIn from './AuthUpIn';

const Header = () => {
  return (
  <header  className='w-full bg-slate-500 flex items-center justify-between p-[30px]'>
      <h2>Kolh's</h2>
    <Navbar/>
    <AuthUpIn/>
  </header>
  )
}

export default Header