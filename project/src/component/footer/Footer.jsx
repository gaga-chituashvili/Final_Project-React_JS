import React from 'react'
import {NavLink} from "react-router-dom"
import "../../reset.css"
import "../../App.css"

const Footer = () => {
  return (
    <footer className=' w-full flex justify-between py-[50px] px-[150px] bg-slate-700 footer'>
        <ul className='flex flex-col gap-y-[20px] footer_ul'>
            <h3 className='text-red-500 text-[30px]'>Customer service</h3>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Contact US</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Shipping</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Return</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Rebates</NavLink>
        </ul>
        <ul className='flex flex-col gap-y-[20px] footer_ul'>
            <h3 className='text-red-500 text-[30px]'>Shop Kolh's</h3>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>My List</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Store Locator</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Gift Card</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Kolh's Koupons</NavLink>
        </ul>
        <ul className='flex flex-col gap-y-[20px] footer_ul'>
            <h3 className='text-red-500 text-[30px]'>About Kolh's</h3>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Our Website</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Community</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Carrers</NavLink>
            <NavLink className='px-6 py-3 text-white rounded-lg hover:bg-red-500'>Investor Relations</NavLink>
        </ul>

    </footer>
  )
}

export default Footer