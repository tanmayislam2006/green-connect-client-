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
        loader: () => fetch("http://localhost:5000/browsetips"),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/shareTips",
        element: <ShareTips />,
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
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updatetip/${params.id}`),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/detailtip/:id",
        element: <DetailsTip />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/detailtip/${params.id}`),
        hydrateFallbackElement: <Loader />,
      },
    ],
  },
]);
export default router;
