import React from "react";
import SignupForm from "../../component/signupForm/SignupForm";

const Signup = () => {
  return (
    <section
      className="w-full flex  justify-center py-[200px]   
bg-[url('/src/pages/signin/images/images13.png')] bg-no-repeat bg-cover bg-left"
    >
      <SignupForm />
    </section>
  );
};

export default Signup;
