import React from "react";
import ProductAdd from "./pages/ProductAdd";
import ProductList from "./pages/ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "add-product",
    element: <ProductAdd />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
