import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, Reducer } from "./reducer";
import { isTokenValid, toggleLocalStorage } from "../utils/jwt";
import { authenticated } from "./actionCreator";

const contex = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && isTokenValid(token)) {
      dispatch(authenticated(token));
    } else if (token && !authenticated(token)) {
      toggleLocalStorage();
    }
  }, []);

  return (
    <contex.Provider value={{ state, dispatch }}>{children}</contex.Provider>
  );
};

export const UseAppContext = () => {
  const Appcontext = useContext(contex);
  if (!Appcontext) {
    throw new Error("app context error");
  }
  return Appcontext;
};

export default AppContextProvider;
