import React from "react";
import { LogoutAction } from "../../context/actionCreator";
import { UseAppContext } from "../../context/AppContextProvider";

const LogoutButton = ({ hasProducts }) => {
  const { dispatch } = UseAppContext();

  if (!hasProducts) return null;

  return (
    <button
      className="log_out w-[150px] h-[50px] text-[20px] font-semibold text-white border-2 border-solid border-black bg-slate-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300 ease-in-out ml-[150px] rounded-2xl shadow-lg hover:shadow-xl"
      onClick={() => dispatch(LogoutAction())}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
