import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MainPage from "../pages/main";
import Detail from "../pages/Detail";
import List from "../pages/List";
// 구조분해할당
const router = createBrowserRouter([
    {
        // path:'/',
        element:<Layout></Layout>,
        children:[
    {path:'/',
    element: <MainPage></MainPage>
},
{path:'/watch',
element: <Detail></Detail>
},
{path:'/results',
element: <List></List>
},
]
}
])

export default router