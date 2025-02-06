import { routes } from "../constant/route";
import AuthGuard from "../../src/guard/AuthGuard";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

const approutes = [
  { path: routes.home, Component: Home },
  { path: routes.products, Component: Products, Guard: AuthGuard },
  { path: routes.contact, Component: Contact },
];

export default approutes;
