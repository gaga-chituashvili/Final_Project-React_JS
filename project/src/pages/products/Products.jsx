import React, { useEffect, useState } from "react";
import { productApi } from "../../api/productApi";
import { ClimbingBoxLoader } from "react-spinners";
import Card from "../../component/productcard/Card";
import xmark from "./images/xmark.svg";
import { UseAppContext } from "../../context/AppContextProvider";
import {
  DataAction,
  ErrorAction,
  LoadingAction,
  LogoutAction,
  RemoveFromCartAction,
} from "../../context/actionCreator";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { state, dispatch } = UseAppContext();
  const { data, loading, error, cart } = state;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    dispatch(LoadingAction(true));
    productApi()
      .then((data) => {
        dispatch(DataAction(data));
      })
      .catch((error) => {
        dispatch(ErrorAction(error.msg));
      })
      .finally(() => {
        dispatch(LoadingAction(false));
      });

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
      setLastScrollTop(currentScroll || 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, lastScrollTop]);

  const filteredProducts = data?.payload?.products?.filter((product) =>
    product.productTitle
      .toLowerCase()
      .includes(searchQuery?.toLowerCase() || "")
  );

  console.log(data?.payload?.products[0]);

  const hasProducts = filteredProducts?.length > 0;

  const handleRemoveFromCart = (productId) => {
    dispatch(RemoveFromCartAction(productId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <section className="flex flex-col justify-end gap-y-[70px] relative">
      <section className="flex justify-between items-center pr-[200px]">
        {hasProducts && (
          <button
            className="log_out w-[150px] h-[50px] border border-solid border-black hover:bg-red-500 ml-[150px] rounded-2xl"
            onClick={() => dispatch(LogoutAction())}
          >
            Log Out
          </button>
        )}
        {hasProducts && (
          <article className="border border-solid border-black p-[15px] rounded-2xl">
            <h2 className="text-lg font-bold">Products in Cart:</h2>
            <button
              onClick={toggleCart}
              className="bg-slate-500 text-white px-4 py-2 rounded-md"
            >
              {cart.length > 0
                ? `View Cart (${cart.length})`
                : "No items in cart"}
            </button>

            <section
              className={`fixed top-[350px] right-0 w-[300px] bg-white shadow-xl border border-gray-300 rounded-md transition-all duration-500 ease-in-out z-10 ${
                isCartOpen
                  ? "transform translate-x-0"
                  : "transform translate-x-full"
              }`}
            >
              <section className="p-4">
                {cart.length > 0 ? (
                  <>
                    {cart.map((product, index) => (
                      <article
                        key={index}
                        className="flex justify-between items-center gap-x-[20px] py-2"
                      >
                        <article className="flex">
                          <p>{product.productTitle}</p>
                          <article className="flex justify-center items-center">
                            <p>{product.prices[0].regularPrice.minPrice}</p>
                            <p>$</p>
                          </article>
                        </article>
                        <img
                          className="w-[20px] cursor-pointer"
                          src={xmark}
                          alt="Remove"
                          onClick={() =>
                            handleRemoveFromCart(product.productId)
                          }
                        />
                      </article>
                    ))}

                    <div className="flex justify-between py-2">
                      <p>Total Price:</p>
                      <p>
                        $
                        {cart
                          .reduce((total, product) => {
                            return (
                              total +
                              parseFloat(
                                product.prices[0].regularPrice.minPrice
                              )
                            );
                          }, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="">No items in cart yet.</p>
                )}
              </section>
            </section>
          </article>
        )}
      </section>

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

      {showScrollButton && (
        <div
          className="w-12 h-12 rounded-full bg-slate-400 fixed bottom-5 right-5 m-5 cursor-pointer opacity-90 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-slate-800 hover:transform hover:translate-y-[-5px] hover:opacity-100"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></div>
      )}
    </section>
  );
};

export default Products;
