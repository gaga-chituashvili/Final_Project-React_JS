import React from "react";
import Card from "../../component/productcard/Card";
import { ClimbingBoxLoader } from "react-spinners";

const ProductList = ({ filteredProducts, loading, hasProducts }) => {
  return (
    <section className="flex flex-wrap justify-center gap-[20px]">
      {hasProducts ? (
        filteredProducts.map((info) => <Card key={info.webID} data={info} />)
      ) : loading ? (
        <ClimbingBoxLoader color="#2D3748" size={20} />
      ) : (
        <p className="text-[30px] my-[150px] text-slate-700">
          No products found
        </p>
      )}
    </section>
  );
};

export default ProductList;
