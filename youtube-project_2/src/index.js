import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoDetail from "./detail/VideoDetail";
import Search from "./search/Search";
import NotFound from "./notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, element: <Search></Search> },
      { path: "/videos", element: <Search></Search> },
      { path: "/videos/:query", element: <Search></Search> },
      { path: "/videos/watch/:id", element: <VideoDetail></VideoDetail> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router}>
    <App></App>
  </RouterProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
