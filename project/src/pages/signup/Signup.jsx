import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import { authAction } from "../../constant/authAction";
import Error from "../../component/error/Error";

const Signup = () => {
  const [error, seterror] = useState("");

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
    authHandler(authAction.signUp, user)
      .then((data) => console.log(data))
      .catch((err) => seterror(err))
      .finally();
  };

  return (
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
  );
};

export default Signup;
