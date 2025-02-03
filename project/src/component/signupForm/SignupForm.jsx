import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import { authAction } from "../../constant/authAction";
import Error from "../error/Error";
import { ClimbingBoxLoader } from "react-spinners";
import "../../reset.css";
import { UseAppContext } from "../../context/AppContextProvider";
import { ErrorAction, LoadingAction } from "../../context/actionCreator";

const SignupForm = () => {
  const { state, dispatch } = UseAppContext();

  const { error, loading } = state;

  const [user, setuser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  if (error) {
    return (
      <article>
        <Error status={error.status} text={error.text} />
      </article>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LoadingAction(true));
    authHandler(authAction.signUp, user)
      .then((data) => console.log(data))
      .catch((err) => {
        dispatch(ErrorAction(err.msg));
      })
      .finally(() => {
        dispatch(LoadingAction(false));
      });
  };

  return (
    <section className="flex flex-col items-center gap-y-[30px]">
      <form
        className="w-[400px] flex flex-col gap-y-[15px] border border-solid border-gray-300 p-[30px] rounded-[15px] bg-slate-300 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 "
        onSubmit={submitHandler}
      >
        <label className="text-sm text-gray-600 font-semibold">UserName</label>
        <input
          className="h-[40px] rounded-[8px] border border-solid border-slate-100 bg-slate-100 px-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ease-in-out"
          name="userName"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />

        <label className="text-sm text-gray-600 font-semibold">Email</label>
        <input
          className="h-[40px] rounded-[8px] border border-solid border-slate-100 bg-slate-100 px-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ease-in-out"
          type="text"
          name="email"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />

        <label className="text-sm text-gray-600 font-semibold">Password</label>
        <input
          className="h-[40px] rounded-[8px] border border-solid border-slate-100 bg-slate-100 px-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ease-in-out"
          type="password"
          name="password"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />

        <button
          className="bg-slate-700 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
          type="submit"
        >
          Submit
        </button>
      </form>

      {loading && <ClimbingBoxLoader color="#2D3748" size={20} />}
    </section>
  );
};

export default SignupForm;
