import { authAction } from "../constant/authAction";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";

export const authroute = [
  { path: authAction.signIn, Component: Signin },
  { path: authAction.signUp, Component: Signup },
];
