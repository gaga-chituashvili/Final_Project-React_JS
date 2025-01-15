import { Component } from "react";
import { routes } from "../constant/route";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";

const approutes=[
    {path:routes.home,Component:Home},
    {path:routes.products,Component:Products},
    {path:routes.signin,Component:Signin},
    {path:routes.signup,Component:Signup},
]

export default approutes;