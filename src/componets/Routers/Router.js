import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Pages/Homes/Home";
import Main from "../Pages/Main/Main";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/Products/ProductsDetails";
import Registers from "../Registers/Registers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)

            },
            {
                path: '/productsDetails/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/productsDetails/${params.id}`)
            },
            {
                path: '/login',
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
