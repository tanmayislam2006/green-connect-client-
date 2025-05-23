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
import Loader from "../Components/Loader/Loader";
import Update from "../Pages/Update/Update";
import DetailsTip from "../Pages/DetailsTip/DetailsTip";
import PrivateRouter from "./PrivateRouter";
import MyProfile from "../Pages/MyProfile/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/exploreGardener",
        element: <ExploreGardener />,
      },
      {
        path: "/browseTips",
        element: <BrowseTips />,
        loader: () => fetch("https://green-connect-server.onrender.com/browsetips"),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/shareTips",
        element: <PrivateRouter>
          <ShareTips/>
        </PrivateRouter>,
      },
      {
        path: "/myTips",
        element: (
          <PrivateRouter>
            <MyTips />
          </PrivateRouter>
        ),
      },
      {
        path: "/updateTip/:id",
        element: (
          <PrivateRouter>
            <Update />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://green-connect-server.onrender.com/updatetip/${params.id}`),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/detailtip/:id",
        element: (
          <PrivateRouter>
            <DetailsTip />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://green-connect-server.onrender.com/detailtip/${params.id}`),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRouter>
            <MyProfile />
          </PrivateRouter>
        )
      },
    ],
  },
]);
export default router;
