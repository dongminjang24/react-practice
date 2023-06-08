import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes/routing";
import { AuthContextProvider } from "./context/userContext";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={createRouter}></RouterProvider>
    </AuthContextProvider>
  );
}

export default App;
