import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Pages/Homes/Home";
import Main from "../Pages/Main/Main";
import Registers from "../Registers/Registers";

const router = createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:[
        {
             path:'/',
             element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Registers></Registers>
        }
       ]

    }
])
 
export default router;
