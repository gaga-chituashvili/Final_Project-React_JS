import { Actions } from "./action";
import {jwtDecode} from "jwt-decode"

export const initialState = {
  isAuthenticated:false,
  user:null,
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
      return { ...state, isAuthenticated: true, user1 };

    default:
      return state;
  }
};



