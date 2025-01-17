import React, { useState, useEffect } from "react";
import { authHandler } from "../../api/auth";
import { authAction } from "../../constant/authAction";
import Error from "../../component/error/Error";

const Signup = () => {
  const [music, setmusic] = useState([]);

  const [error, seterror] = useState("");

  const [user, setuser] = useState({
    username: "",
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
      .catch((err) => seterror(err));
  };

  useEffect(() => {
    authHandler()
  }, []);

  return (
    <form className="w-[400px] flex flex-col gap-y-[10px] border border-solid border-black p-[40px] rounded-[20px]" onSubmit={submitHandler}>
      <label>Username</label>
      <input className="border border-solid border-black" name="username" onClick={(e)=>{setuser((prev)=>({...prev,[e.target.name]:e.target.value}))}} />
      <label>Email</label>
      <input className="border border-solid border-black" name="email" onClick={(e)=>{setuser((prev)=>({...prev,[e.target.name]:e.target.value}))}} />
      <label>Password</label>
      <input className="border border-solid border-black" name="password" onClick={(e)=>{setuser((prev)=>({...prev,[e.target.name]:e.target.value}))}} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
