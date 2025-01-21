import React, { useState } from "react";
import { UseAppContext } from "../../context/AppContextProvider";
import { authHandler } from "../../api/auth";
import { authAction } from "../../constant/authAction";
import { MoonLoader } from "react-spinners";
import "../../reset.css";
import { LoginAction } from "../../context/actionCreator";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constant/route";

const Signin = () => {
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const { state, dispatch } = UseAppContext();

  const [info, setinfo] = useState({
    userName: "",
    password: "",
    error: "",
  });

  const submitSignHandler = (e) => {
    e.preventDefault();
    setloading(true);
    authHandler(authAction.signIn, info)
      .then((data) => {
        dispatch(LoginAction(data));
        navigate(routes.home);
      })
      .catch((error) => {
        setinfo((prev) => ({ ...prev, error: error.message }));
      })
      .finally(() => setloading(false));
  };

  console.log(state, info);

  return (
    <section className="flex  justify-center py-[200px]">
      <form
        onSubmit={submitSignHandler}
        className="w-[400px] flex flex-col gap-y-[10px] border border-solid border-black p-[40px] rounded-[20px]"
      >
        <lable>UserName or Email</lable>
        <input
          type="text"
          name="userName"
          className="border border-solid border-black"
          onChange={(e) =>
            setinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <lable>Password</lable>
        <input
          type="text"
          name="password"
          className="border border-solid border-black"
          onChange={(e) =>
            setinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <button type="submit">submit</button>
      </form>
      {loading && <MoonLoader color="#522323" size={80} />}
    </section>
  );
};

export default Signin;
