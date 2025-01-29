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
        className="w-[400px] flex flex-col gap-y-[10px] border border-solid border-black p-[40px] rounded-[20px] bg-slate-300"
      >
        <lable>UserName or Email</lable>
        <input
          type="text"
          name="userName"
          className="h-[30px] rounded-[10px] border border-solid border-black bg-slate-100"
          onChange={(e) =>
            setinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <lable>Password</lable>
        <input
          type="password"
          name="password"
          className="h-[30px] rounded-[10px] border border-solid border-black bg-slate-100"
          onChange={(e) =>
            setinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <button
          className="hover:bg-red-500 px-[10px] py-[10px] rounded-2xl"
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
