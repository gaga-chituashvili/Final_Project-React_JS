import React from "react";
import xmark from "./images/xmark.svg";
import { RemoveFromCartAction } from "../../context/actionCreator";
import { UseAppContext } from "../../context/AppContextProvider";

const CartSidebar = ({ isCartOpen}) => {
  const { state, dispatch } = UseAppContext();
  const { cart } = state;

  const handleRemoveFromCart = (productId) => {
    dispatch(RemoveFromCartAction(productId));
  };

  return (
    <section
      className={`fixed top-[350px] right-0 w-[320px] bg-white shadow-xl border border-gray-300 rounded-md transition-transform duration-500 ease-in-out z-10 ${
        isCartOpen ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <section className="p-5 space-y-3">
        {cart.length > 0 ? (
          <>
            {cart.map((product, index) => (
              <article
                key={index}
                className="flex justify-between items-center gap-x-4 py-3 border-b border-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <p className="font-medium">{product.productTitle}</p>
                  <div className="flex items-center space-x-1">
                    <p className="text-sm text-gray-500">
                      ${product.prices[0].regularPrice.minPrice}
                    </p>
                    <span className="text-gray-400">USD</span>
                  </div>
                </div>
                <img
                  className="w-5 cursor-pointer hover:text-red-600 transition duration-200"
                  src={xmark}
                  alt="Remove"
                  onClick={() => handleRemoveFromCart(product.productId)}
                />
              </article>
            ))}

            <div className="flex justify-between py-3 border-t border-gray-200">
              <p className="text-lg font-semibold">Total Price:</p>
              <p className="text-xl font-bold">
                $
                {cart
                  .reduce((total, product) => {
                    return (
                      total +
                      parseFloat(product.prices[0].regularPrice.minPrice)
                    );
                  }, 0)
                  .toFixed(2)}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No items in cart yet.</p>
        )}
      </section>
    </section>
  );
};

export default CartSidebar;
