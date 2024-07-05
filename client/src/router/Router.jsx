import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Offers from "../pages/Offers/Offers";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import MainLayout from "../MainLayout";
import Checkout from "../pages/Checkout/Checkout";

//This is the root path,every routes will start from here
// whatever element goes as its children it will go to the  outlet in Main
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/proceed-checkout",
        element: <Checkout />,
      },
    ],
  },
]);
export default router;
