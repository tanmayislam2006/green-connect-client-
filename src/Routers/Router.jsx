import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ExploreGardener from "../Pages/ExploreGardener/ExploreGardener";
import BrowseTips from "../Pages/BrowseTips/BrowseTips";
import ShareTips from "../Pages/ShareTips/ShareTips";
import MyTips from "../Pages/MyTips/MyTips";

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
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/exploreGardener",
                element:<ExploreGardener/>
            },
            {
                path:"/browseTips",
                element:<BrowseTips/>
            },
            {
                path:"/shareTips",
                element:<ShareTips/>
            },
            {
                path:"/myTips",
                element:<MyTips/>
            }


        ]
    }
])
export default router