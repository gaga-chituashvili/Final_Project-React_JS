import { toggleLocalStorage } from "../utils/jwt";
import { Actions } from "./action";
import { jwtDecode } from "jwt-decode";

export const initialState = {
  isAuthenticated: false,
  user: null,
  data: [],
  error: "",
  loading: false,
};

export const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.AUTHENTICATE:
      const user = jwtDecode(payload);
      return { ...state, isAuthenticated: true, user };
    case Actions.LOG_IN:
      const { token } = payload;
      const user1 = jwtDecode(token);
      toggleLocalStorage(token);
      return { ...state, isAuthenticated: true, user1 };
    // case Actions.REGISTER:
    //   return { ...state, isAuthenticated: false, user: null };
    case Actions.LOG_OUT:
      toggleLocalStorage();
      return { isAuthenticated: false, user: null };
    case Actions.DATA:
      return { ...state, data: payload, loading: false };
    case Actions.ERORR:
      return { ...state, error: payload, loading: false };
    case Actions.LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};
