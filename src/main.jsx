import React from "react";
import '../index.css'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./assets/Components/Router/Router";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
