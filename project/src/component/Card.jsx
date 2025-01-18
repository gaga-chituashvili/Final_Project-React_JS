import React from 'react'

const Card = ({data}) => {
    console.log(data);
    
  return (
    <section>
        <h2>{data.productTitle}</h2>
        <img src={data.image.url} alt={data.title}/>
    </section>
  )
}

export default Card