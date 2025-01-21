import React from 'react'
import {NavLink} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='w-full flex justify-between p-[50px] bg-slate-500'>
        <section className='flex flex-col gap-y-[20px]'>
            <h3 className='text-red-500 text-[30px]'>Customer service</h3>
            <NavLink>Contact US</NavLink>
            <NavLink>Shipping</NavLink>
            <NavLink>Return</NavLink>
            <NavLink>Rebates</NavLink>
        </section>
        <section className='flex flex-col gap-y-[20px]'>
            <h3 className='text-red-500 text-[30px]'>Shop Kolh's</h3>
            <NavLink>My List</NavLink>
            <NavLink>Store Locator</NavLink>
            <NavLink>Gift Card</NavLink>
            <NavLink>Kolh's Koupons</NavLink>
        </section>
        <section className='flex flex-col gap-y-[20px]'>
            <h3 className='text-red-500 text-[30px]'>About Kolh's</h3>
            <NavLink>Our Website</NavLink>
            <NavLink>Community</NavLink>
            <NavLink>Carrers</NavLink>
            <NavLink>Investor Relations</NavLink>
        </section>

    </footer>
  )
}

export default Footer