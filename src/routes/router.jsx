import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Users from "../pages/Users.jsx";
import UserDetails from "../pages/UserDetails.jsx";
import Products from "../pages/Products.jsx";
import FrontendLayout from "../layouts/FrontendLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, element: <Dashboard />,
      },
      {
        path: "users", element: <Users />,
      },
      {
        path: "users/:id", element: <UserDetails />,
      },
      {
        path: "products", element: <Products />,
      }
    ],
  },
  {
    path: "",
    element: <FrontendLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products/:id", element: <ProductDetails />,
      },
      {
        path:"login" , element : <Login />
      },
      {
        path : "register", element : <Register />
      }
    ],
  },
]);

export default router;
