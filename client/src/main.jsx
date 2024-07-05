import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Router";
import { CartProvider } from "./contexts/CartProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
        <CartProvider>
        <RouterProvider router={router} />
        </CartProvider>
);
