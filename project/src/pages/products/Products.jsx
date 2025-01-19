import React, { useState, useEffect } from "react";
import {productApi } from "../../api/productApi";
import { MoonLoader } from "react-spinners";
import Card from '../../component/Card';

const Products = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    productApi()
      .then((data) => setData(data))
      .catch((error) => setError(error)).finally(()=>setloading(false))
  }, []);

  return (
    <section className="flex flex-wrap justify-center gap-[30px]">
      {data.payload?.products?.map((info) => (
       <Card key={info.productId} data={info}/>
      ))}
      {loading&& <MoonLoader
  color="#522323"
  size={80}
/>}
</section>
  );
};

export default Products;
