import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllCast from "../components/Allcast";
import CastDetails from "../components/CastDetails";





export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/allcast',
          element:<AllCast/>
        },
        {
          path:'/cast/:id',
          element:<CastDetails/>
        }

      ]
    },

  ]);