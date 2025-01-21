import { Actions } from "./action";

export const initiaState = {
  user: [],
  error: "",
  loading: false,
};

export const AppReducer = (state, action) => {
  const [type, payload] = action;

  switch (type) {
    case Actions.userFetch:
      return { ...state, user: payload, loading: false };
    case Actions.userError:
      return { ...state, error: payload, loading: false };
    case Actions.userLoading:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
