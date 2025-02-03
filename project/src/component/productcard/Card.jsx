import React from "react";
import "../../reset.css";
import cart from "../../pages/products/images/cart.svg";
import { AddToCartAction } from "../../context/actionCreator";
import { UseAppContext } from "../../context/AppContextProvider";

const Card = ({ data }) => {
  const { dispatch } = UseAppContext();

  const handleAddToCart = () => {
    dispatch(AddToCartAction(data));
  };

  return (
    <section className="w-[350px] flex flex-col gap-y-[20px] border border-solid border-black p-[20px] rounded-[15px] bg-slate-200 hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
      <img className="object-cover" src={data.image.url} alt={data.title} />
      <h2 className="text-[15px]">{data.productTitle}</h2>
      <p className="text-[20px] font-bold">
        {data.prices[0].regularPrice.minPrice} $
      </p>
      <span className="w-[40px] flex justify-center items-center border border-solid border-black rounded-full p-[10px] bg-gray-50">
        {data.rating.avgRating || ""}
      </span>
      <button
        className="flex items-center gap-x-[20px] border border-solid border-black p-[5px] justify-center rounded-2xl bg-slate-500  text-white hover:bg-slate-600 transition-colors duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        onClick={handleAddToCart}
      >
        <img className="w-[50px]" src={cart} />
        Add To Cart
      </button>
    </section>
  );
};

export default Card;



// import React from "react";
// import "../../reset.css";
// import cart from "../../pages/products/images/cart.svg";
// import { AddToCartAction } from "../../context/actionCreator";
// import { UseAppContext } from "../../context/AppContextProvider";

// const Card = ({ data }) => {
//   const { dispatch } = UseAppContext();

//   const handleAddToCart = () => {
//     dispatch(AddToCartAction(data));
//   };

//   return (
//     <section className="w-[350px] flex flex-col gap-y-[20px] border border-solid border-black p-[20px] rounded-[15px] bg-slate-200 hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 ease-in-out">
//       <img className="object-cover rounded-md" src={data.image.url} alt={data.title} />
//       <h2 className="text-[16px] font-semibold text-gray-800">{data.productTitle}</h2>
//       <p className="text-[18px] font-bold text-gray-900">
//         {data.prices[0].regularPrice.minPrice} $
//       </p>
//       <span className="w-[40px] flex justify-center items-center border border-solid border-black rounded-full p-[10px] bg-gray-50">
//         {data.rating.avgRating || "No Rating"}
//       </span>
//       <button
//         className="flex items-center gap-x-[20px] border border-solid border-black p-[10px] justify-center rounded-2xl bg-slate-500 text-white hover:bg-slate-600 transition-colors duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
//         onClick={handleAddToCart}
//       >
//         <img className="w-[20px] h-[20px]" src={cart} alt="cart" />
//         Add To Cart
//       </button>
//     </section>
//   );
// };

// export default Card;
