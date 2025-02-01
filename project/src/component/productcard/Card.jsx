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
    <section className="w-[350px] flex flex-col gap-y-[20px] border border-solid border-black p-[20px] rounded-[15px] bg-slate-200">
      <img className="object-cover" src={data.image.url} alt={data.title} />
      <h2>{data.productTitle}</h2>

      <button
        className="flex items-center gap-x-[20px] border border-solid border-black p-[5px] justify-center rounded-2xl bg-slate-500"
        onClick={handleAddToCart}
      >
      {/* {data.prices.map((prod, prodIndex) => (
  <span key={prodIndex}>
    {prod.map((item, itemIndex) => (
      <span key={itemIndex}>
        {item.map((innerItem, innerIndex) => (
          <span key={innerIndex}>{innerItem.minPrice}</span>
        ))}
      </span>
    ))}
  </span>
))} */}

        <img className="w-[50px]" src={cart} />
        Add To Cart
      </button>
    </section>
  );
};

export default Card;
