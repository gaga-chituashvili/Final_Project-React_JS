import React, { useState, useEffect } from "react";
import { detailsApi } from "../../api/detailsApi";
import Carddetails from "../../component/details/DetailsCard";

const Details = () => {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    detailsApi()
      .then((data) => setdata(data))
      .catch((error) => seterror(error))
      .finally(() => setloading(false));
  }, []);

  console.log(data?.payload?.products);

  return (
    <section>
      {data && data.payload && data.payload.products
        ? data?.payload?.products?.map((info) => (
            <Carddetails key={info.productId} data={info} />
          ))
        : loading && <h1>loading...</h1>}
    </section>
  );
};

export default Details;
