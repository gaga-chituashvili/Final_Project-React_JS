import { toggleLocalStorage } from "../utils/jwt";
import { Actions } from "./action";
import { jwtDecode } from "jwt-decode";

export const initialState = {
  isAuthenticated: false,
  user: null,
  data: [],
  cart: [],
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
    case Actions.LOG_OUT:
      toggleLocalStorage();
      return { isAuthenticated: false, user: null, cart: [] };
    case Actions.DATA:
      return { ...state, data: payload, loading: false };
    case Actions.ERORR:
      return { ...state, error: payload, loading: false };
    case Actions.LOADING:
      return { ...state, loading: payload };
      case Actions.ADD_TO_CART:
      const updatedCart = [...state.cart, payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));  
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};
