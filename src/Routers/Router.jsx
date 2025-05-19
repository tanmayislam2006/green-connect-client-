import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";

const router=createBrowserRouter([
    {path:'/',
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {path:'/',
                element:<Home/>,

            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])
export default router