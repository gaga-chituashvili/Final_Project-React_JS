import React from 'react'

const Card = ({data}) => {
    console.log(data);
    
  return (
   <article className='w-[350px] p-[30px] flex flex-col gap-y-[20px] rounded-[15px] border-[2px] border-solid border-black'>
    <img className='object-cover' src={data.image.url} alt={data.title}/>
    <h2>{data.productTitle}</h2>
   </article>
  )
}

export default Card