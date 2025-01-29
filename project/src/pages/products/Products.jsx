import React, { useEffect, useState } from "react"; 
import { productApi } from "../../api/productApi"; 
import { ClimbingBoxLoader } from "react-spinners"; 
import Card from "../../component/productcard/Card"; 
import { UseAppContext } from "../../context/AppContextProvider"; 
import { DataAction, ErrorAction, LoadingAction, LogoutAction } from "../../context/actionCreator"; 
import { useLocation } from "react-router-dom"; 

const Products = () => {
  const { state, dispatch } = UseAppContext(); 
  const { data, loading, error, cart } = state;  
  const location = useLocation(); 
  const searchParams = new URLSearchParams(location.search); 
  const searchQuery = searchParams.get("search");

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, lastScrollTop]);

  const filteredProducts = data?.payload?.products?.filter((product) =>
    product.productTitle.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  const hasProducts = filteredProducts?.length > 0;

  return (
    <section className="flex flex-col justify-end gap-y-[70px] relative">
      <section className="flex justify-between items-center">
        {hasProducts && (
          <button
            className="log_out w-[150px] h-[50px] border border-solid border-black hover:bg-red-500 ml-[150px] rounded-2xl"
            onClick={() => dispatch(LogoutAction())}
          >
            Log Out
          </button>
        )}
        {hasProducts && (
          <p className="mr-[150px] border border-solid border-black p-[10px] rounded-2xl">
            Items in Cart: {cart.length}
          </p>
        )}
      </section>
      <section className="flex flex-wrap justify-center gap-[20px]">
        {hasProducts ? (
          filteredProducts.map((info) => (
            <Card key={info.productId} data={info} />
          ))
        ) : loading ? (
          <ClimbingBoxLoader color="#2D3748" size={20} />
        ) : (
          <p className="text-[30px] my-[150px] text-slate-700">No products found</p>
        )}
      </section>

      {showScrollButton && (
        <div
          className="w-12 h-12 rounded-full bg-slate-400 fixed bottom-5 right-5 m-5 cursor-pointer opacity-90 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-slate-800 hover:transform hover:translate-y-[-5px] hover:opacity-100"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
        </div>
      )}
    </section>
  );
};

export default Products;
