import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContex";
function App() {
  const queryClient = new QueryClient();
  return (
    <React.Fragment>
      <Header></Header>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet></Outlet>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </React.Fragment>
  );
}

export default App;
