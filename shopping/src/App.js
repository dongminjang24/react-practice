import { RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import { createRouter } from "./routes/rouing";

function App() {
  return <RouterProvider router={createRouter}></RouterProvider>;
}

export default App;
