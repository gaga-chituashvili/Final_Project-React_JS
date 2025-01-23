import React from 'react'
import "../../reset.css"
import "./css/home.css"
import homeimg1 from "../home/images/homeimg1.png"
import image3 from "../home/images/image3.png"
import image4 from "../home/images/image4.png"
import image5 from "../home/images/image5.png"
import image7 from "../home/images/image7.png"
import image8 from "../home/images/image8.png"
import image9 from "../home/images/image9.png"
import image10 from "../home/images/image10.png"


const Home = () => {
  return (
    <section className='flex flex-col gap-y-[200px] p-[100px]'>
      <section className='flex items-center gap-x-[250px] px-[50px]'>
        <article className=' flex flex-col gap-y-[30px] text-center'>
        <p className='text-[50px] text-center'>We Make The Goods That Make Life Better.</p>
        <h2 className='text-[50px] text-center'>LENOMA</h2>
        </article>
      <img className='w-full h-[500px] object-cover' src={homeimg1}/>
      </section>
      <section className='flex gap-x-[20px] justify-center'>
        <article className=' flex flex-col gap-y-[30px] border border-solid border-black p-[20px] rounded-[15px]'>
          <img className='object-cover' src={image3}/>
          <h3>Button Downs</h3>
        </article>
        <article className=' flex flex-col gap-y-[30px] border border-solid border-black p-[20px] rounded-[15px]'>
        <img src={image4}/>
        <h3>T-Shirts</h3>
        </article>
        <article className=' flex flex-col gap-y-[30px] border border-solid border-black p-[20px] rounded-[15px]'>
        <img src={image5}/>
        <h3>Denims</h3>
        </article>
        <article className=' flex flex-col gap-y-[30px] border border-solid border-black p-[20px] rounded-[15px]'>
        <img src={image7}/>
        <h3>Shoes & Boots</h3>
        </article>
        <article className=' flex flex-col gap-y-[30px] border border-solid border-black p-[20px] rounded-[15px]'>
        <img src={image8}/>
        <h3>Big & Tall</h3>
        </article>
        <article className=' flex flex-col gap-y-[30px] border border-solid border-black p-[20px] rounded-[15px]'>
        <img src={image9}/>
        <h3>Pajamers</h3>
        </article>
      </section>
      <section className='flex flex-col'>
        <h3 className='text-[30px] text-center'>TRANDING BRANDS</h3>
        <img className='w-full' src={image10}/>
      </section>
    </section>
  )
}

export default Home