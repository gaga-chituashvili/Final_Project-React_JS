import React from "react";

const ScrollToTopButton = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-12 h-12 rounded-full bg-slate-400 fixed bottom-5 right-5 m-5 cursor-pointer opacity-90 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-slate-800 hover:transform hover:translate-y-[-5px] hover:opacity-100"
      onClick={scrollUp}
    ></div>
  );
};

export default ScrollToTopButton;
