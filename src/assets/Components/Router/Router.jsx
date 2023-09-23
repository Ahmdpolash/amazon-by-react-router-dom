import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Products from "../Products/Products";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Banner from "../Banner/Banner";
import ProductDetails from "../ProductDetails/ProductDetails";
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import EditProfile from "../EditProfile/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/product",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.productId}`),
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children : [
          {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
          },
          {
            path: '/dashboard/profile',
            element: <Profile></Profile>
          },
          {
            path:'/dashboard/editProfile',
            element: <EditProfile></EditProfile>
          }
        ]
      },
    ],
  },
]);

export default router;
