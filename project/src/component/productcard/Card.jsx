import React from 'react'
import "../../reset.css"

const Card = ({data}) => {
    console.log(data);
    
  return (
    <section className='w-[350px] flex flex-col gap-y-[20px] border border-solid border-black p-[20px] rounded-[15px] bg-slate-200'>
       <img className='object-cover' src={data.image.url} alt={data.title}/>
        <h2>{data.productTitle}</h2>
    </section>
  )
}

export default Card