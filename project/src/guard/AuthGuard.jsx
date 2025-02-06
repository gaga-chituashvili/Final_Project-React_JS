import React from "react";
import { UseAppContext } from "../context/AppContextProvider";
import { authAction } from "../constant/authAction";
import { Link } from "react-router-dom";
import "../reset.css";

const AuthGuard = ({ children }) => {
  const { state } = UseAppContext();
  return (
    <section
      className="w-full flex justify-center py-[100px] 
bg-[url('/src/guard/images/image11.png')] bg-no-repeat bg-cover bg-left"
    >
      {state.isAuthenticated ? (
        children
      ) : (
        <section className="w-[400px] flex flex-col items-center gap-y-[40px] p-[40px] border border-solid border-black rounded-[20px] bg-slate-700 my-[200px] shadow-lg">
          <h5 className="text-[20px] text-white text-center font-semibold">
            You Are Not Authenticated
          </h5>
          <h5 className="text-[20px] text-white text-center font-semibold">
            Please Sign IN OR Sign UP
          </h5>
          <article className="flex gap-x-[40px]">
            <button className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link
                className="text-[20px] hover:bg-red-500 px-[10px] py-[10px] rounded-[10px] text-white hover:text-white hover:border-red-500 border-2 border-transparent transition-all"
                to={authAction.signIn}
              >
                Sign IN
              </Link>
            </button>
            <button className="transition duration-300 ease-in-out transform hover:scale-105">
              <Link
                className="text-[20px] hover:bg-red-500 px-[10px] py-[10px] rounded-[10px] text-white hover:text-white hover:border-red-500 border-2 border-transparent transition-all"
                to={authAction.signUp}
              >
                Sign UP
              </Link>
            </button>
          </article>
        </section>
      )}
    </section>
  );
};

export default AuthGuard;
