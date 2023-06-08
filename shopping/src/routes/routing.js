import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Layout from "../components/Layout";
import Product from "../Product";
import ProductNew from "../Product/New/new";
import Cart from "../Cart";
import ProductDetail from "../Product/Detail/detail";
import ProtectedRoute from "../ProtectedRoute/protectedRoute";
export const createRouter = createBrowserRouter([
  {
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Main /> },
      { path: "/products", element: <Product /> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <ProductNew />
          </ProtectedRoute>
        ),
      },
      { path: "/products/:id", element: <ProductDetail /> },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
