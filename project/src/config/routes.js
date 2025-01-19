import { routes } from "../constant/route";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Contact from "../pages/contact/Contact";


const approutes = [
  { path: routes.home, Component: Home },
  { path: routes.products, Component: Products },
  { path: routes.contact, Component: Contact },
  
];

export default approutes;