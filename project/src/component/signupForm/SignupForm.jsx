import React, { useContext, useState } from "react";
import { authHandler } from "../../api/auth";
import { authAction } from "../../constant/authAction";
import Error from "../error/Error";
import { MoonLoader } from "react-spinners";
import "../../reset.css";

const SignupForm = () => {
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);

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
    setloading(true);
    authHandler(authAction.signUp, user)
      .then((data) => console.log(data))
      .catch((err) => seterror(err))
      .finally(() => setloading(false));
  };

  return (
    <section className="flex justify-center py-[200px]">
      <form
        className="w-[400px] flex flex-col gap-y-[10px] border border-solid border-black p-[40px] rounded-[20px]"
        onSubmit={submitHandler}
      >
        <label>UserName</label>
        <input
          className="border border-solid border-black"
          name="userName"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <label>Email</label>
        <input
          className="border border-solid border-black"
          name="email"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <label>Password</label>
        <input
          className="border border-solid border-black"
          name="password"
          onChange={(e) => {
            setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {loading && <MoonLoader color="#522323" size={80} />}
    </section>
  );
};

export default SignupForm;
