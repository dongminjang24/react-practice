import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
 
function App() {
  const queryClient = new QueryClient()
  return (
    <React.Fragment>
      <Header></Header>
      <QueryClientProvider client={queryClient}>
        <Outlet></Outlet>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
