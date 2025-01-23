import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import { authAction } from "../../constant/authAction";
import Error from "../error/Error";
import { MoonLoader } from "react-spinners";
import "../../reset.css";
import { UseAppContext } from "../../context/AppContextProvider";
import { ErrorAction, LoadingAction } from "../../context/actionCreator";

const SignupForm = () => {
 

  const{state,dispatch}=UseAppContext()
  
  const {error,loading}=state

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
    dispatch(LoadingAction(true))
    authHandler(authAction.signUp, user)
      .then((data) => console.log(data))
      .catch((err) => {dispatch(ErrorAction(err.msg))})
      .finally(() => {dispatch(LoadingAction(false))});
  };

  

  

  return (
    <section className="flex flex-col items-center gap-y-[30px]">
      <form
        className="w-[400px] flex flex-col gap-y-[10px] border border-solid border-black p-[40px] rounded-[20px] bg-slate-300"
        onSubmit={submitHandler}
      >
        <label>UserName</label>
        <input
          className="h-[30px] rounded-[10px] border border-solid border-black"
          name="userName"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <label>Email</label>
        <input
          className="h-[30px] rounded-[10px] border border-solid border-black bg-slate-100"
          name="email"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <label>Password</label>
        <input
          className="h-[30px] rounded-[10px] border border-solid border-black bg-slate-100"
          name="password"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <button className='hover:bg-red-500 px-[10px] py-[10px] rounded-2xl' type="submit">Submit</button>
      </form>
      {loading && <MoonLoader color="#522323" size={80} />}
    </section>
  );
};

export default SignupForm;
