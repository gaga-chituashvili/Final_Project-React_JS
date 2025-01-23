import React, { useEffect } from "react";
import { productApi } from "../../api/productApi";
import { MoonLoader } from "react-spinners";
import Card from "../../component/productcard/Card";
import { UseAppContext } from "../../context/AppContextProvider";
import {
  DataAction,
  ErrorAction,
  LoadingAction,
  LogoutAction,
} from "../../context/actionCreator";

const Products = () => {
  const { state, dispatch } = UseAppContext();

  const { data, loading, error } = state;

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
  }, []);

  return (
    <section className="flex flex-col justify-end gap-y-[70px]">
      <button
        className="w-[150px] h-[50px] border border-solid border-black hover:bg-red-500 ml-[150px] rounded-2xl"
        onClick={() => dispatch(LogoutAction())}
      >
        Log Out
      </button>
      <section className="flex flex-wrap justify-center gap-[20px]">
        {data && data.payload && data.payload.products
          ? data.payload.products.map((info) => (
              <Card key={info.productId} data={info} />
            ))
          : loading && <MoonLoader color="#522323" size={80} />}
      </section>
    </section>
  );
};

export default Products;
