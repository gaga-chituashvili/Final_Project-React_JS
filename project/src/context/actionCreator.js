import { Actions } from "./action";

export const authenticated = (token) => {
  return { type: Actions.AUTHENTICATE, payload: token };
};

export const LoginAction = (data) => {
  return { type: Actions.LOG_IN, payload: data };
};

export const LogoutAction = () => {
  return { type: Actions.LOG_OUT };
};

export const DataAction = (payload) => {
  return { type: Actions.DATA, payload };
};

export const ErrorAction = (payload) => {
  return { type: Actions.ERORR, payload };
};

export const LoadingAction = (payload) => {
  return { type: Actions.LOADING, payload };
};

export const AddToCartAction = (product) => {
  return { type: Actions.ADD_TO_CART, payload: product };
};

export const RemoveFromCartAction = (productId) => ({
  type: Actions.RemoveFromCartAction,
  payload: productId,
});

