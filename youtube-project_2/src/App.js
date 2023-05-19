import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './main/main';
import VideoDetail from './detail/VideoDetail';
import Search from './search/Search';
{/* <App>
	/ 👉 <Videos>🔥
	/videos 👉 <Videos>🔥 
	/videos/query 👉 <Videos>🔍 
	/videos/watch/id 👉 <VideoDetail></VideoDetail> */}
const router = createBrowserRouter([{
  path: '/',
  element: <Main></Main>},
  {path: '/videos',
  element: <Main></Main>},
  {path: '/videos/:query',
  element: <Search></Search>},
  {path: '/videos/watch/:id',
  element: <VideoDetail></VideoDetail>},
])
function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router}/>
    </React.Fragment>
  );
}

export default App;
