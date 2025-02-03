import React, { useState } from "react";
import { UseAppContext } from "../../context/AppContextProvider";
import { authHandler } from "../../api/auth";
import { authAction } from "../../constant/authAction";
import { ClimbingBoxLoader } from "react-spinners";
import "../../reset.css";
import {
  ErrorAction,
  LoadingAction,
  LoginAction,
} from "../../context/actionCreator";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constant/route";

const SignForm = () => {
  const navigate = useNavigate();

  const { state, dispatch } = UseAppContext();
  const { loading } = state;

  const [info, setinfo] = useState({
    userName: "",
    password: "",
  });

  const submitSignHandler = (e) => {
    e.preventDefault();
    dispatch(LoadingAction(true));
    authHandler(authAction.signIn, info)
      .then((data) => {
        dispatch(LoginAction(data));
        navigate(routes.products);
      })
      .catch((error) => {
        dispatch(ErrorAction(error.msg));
      })
      .finally(() => {
        dispatch(LoadingAction(false));
      });
  };

  return (
    <section className="flex flex-col items-center gap-y-[30px]">
      <form
        onSubmit={submitSignHandler}
        className="w-[400px] flex flex-col gap-y-[15px] border border-solid border-gray-300 p-[30px] rounded-[15px] bg-slate-300 shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
      >
        <lable>UserName or Email</lable>
        <input
          type="text"
          name="userName"
          className="h-[40px] rounded-[8px] border border-solid border-slate-100 bg-slate-100 px-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ease-in-out"
          onChange={(e) =>
            setinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <lable>Password</lable>
        <input
          type="password"
          name="password"
          className="h-[40px] rounded-[8px] border border-solid border-slate-100 bg-slate-100 px-3 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ease-in-out"
          onChange={(e) =>
            setinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <button
          className="bg-slate-700 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
          type="submit"
        >
          submit
        </button>
      </form>
      {loading && <ClimbingBoxLoader color="#2D3748" size={20} />}
    </section>
  );
};

export default SignForm;
