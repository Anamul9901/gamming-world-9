import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import LogIn from "../Pages/LogIn/LogIn";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivetRoutes from "../routes/PrivetRoutes";
import Profile from "../Pages/MoreTowRout/Profile";
import YourOrder from "../Pages/MoreTowRout/YourOrder";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('/data.json')
        },
        {
            path: '/signup',
            element: <SignIn/>,
        },
        {
            path: '/login',
            element: <LogIn/>,
        },
        {
          path: '/card/:id',
          element: <PrivetRoutes><CardDetails></CardDetails></PrivetRoutes>,
          loader: () => fetch('/data.json')
        },
        {
          path:'/yourorder',
          element: <PrivetRoutes><YourOrder/></PrivetRoutes>,
        },
        {
          path: '/profile',
          element: <PrivetRoutes> <Profile/> </PrivetRoutes>,
        },
         
      ]
    },
  ]);