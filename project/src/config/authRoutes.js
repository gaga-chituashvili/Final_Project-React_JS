import { authAction } from "../constant/authAction";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";

const authRoutes = [
  { path: authAction.signIn, Component: Signin },
  { path: authAction.signUp, Component: Signup },
];

export default authRoutes;