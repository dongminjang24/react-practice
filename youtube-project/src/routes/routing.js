import { createBrowserRouter } from "react-router-dom";
import Layout from "../components";

// 구조분해할당
const router = createBrowserRouter([
    {
        // path:'/',
        element:<Layout></Layout>,
        children:[
    {path:'/',
    element: <MainPage></MainPage>
},
    {path:'/todo/:todoId',
    element: <Todo></Todo>
    }
]
}
])

export default router