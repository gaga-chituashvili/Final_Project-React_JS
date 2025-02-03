import React, { useEffect, useState } from "react";
import { productApi } from "../../api/productApi";
import { UseAppContext } from "../../context/AppContextProvider";
import { DataAction, ErrorAction, LoadingAction } from "../../context/actionCreator";
import { useLocation } from "react-router-dom";
import LogoutButton from "../../pages/products/LogoutButton";
import ProductList from "../../pages/products/ProductList";
import CartSidebar from "../../pages/products/CartSidebar";
import ScrollToTopButton from "../../pages/products/ScrollToTopButton";

const Products = () => {
  const { state, dispatch } = UseAppContext();
  const { data, loading, error, cart } = state;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (hasFetched) return;

    setHasFetched(true);
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
  }, [dispatch, hasFetched, searchQuery]);

  const filteredProducts = data?.payload?.products?.filter((product) =>
    product.productTitle
      .toLowerCase()
      .includes(searchQuery?.toLowerCase() || "")
  );

  const hasProducts = filteredProducts?.length > 0;

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <section className="flex flex-col justify-end gap-y-[70px] relative">
      <section className="flex logout_cart justify-between items-center pr-[200px]">
        <LogoutButton hasProducts={hasProducts} />
        {hasProducts && (
          <article className="border border-solid border-gray-300 p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">Products in Cart:</h2>
            <button
              onClick={toggleCart}
              className="bg-slate-500 text-white px-6 py-3 rounded-md hover:bg-slate-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
            >
              {cart.length > 0
                ? `View Cart (${cart.length})`
                : "No items in cart"}
            </button>
            <CartSidebar isCartOpen={isCartOpen} toggleCart={toggleCart} />
          </article>
        )}
      </section>

      <ProductList
        filteredProducts={filteredProducts}
        loading={loading}
        hasProducts={hasProducts}
      />

      <ScrollToTopButton />
    </section>
  );
};

export default Products;