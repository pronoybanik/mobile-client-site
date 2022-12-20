import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../DashBoard/AddProducts";
import DashBoardLayer from "../DashBoard/DashBoardLayer";
import MyOrders from "../DashBoard/MyOrders";
import Login from "../Login/Login";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Homes/Home";
import Main from "../Pages/Main/Main";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/Products/ProductsDetails";
import Registers from "../Registers/Registers";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";
import SellerRouter from "./SellerRouter";
import AllSeller from "../DashBoard/AllSeller";
import AllByers from "../DashBoard/AllByers";
import AllProductDetails from "../Pages/ProductDetail/AllProductDetails";
import Payment from "../Payment/Payment";
import ErrorPage from "../ErrorPage/ErrorPage";
import MobileCasing from "../Pages/MobileCasing/MobileCasing";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                element: <PrivateRouter><Products></Products></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/productsDetails/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/productsDetails/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registers></Registers>
            },
            {
                path: '/addProducts/:products',
                element: <AllProductDetails></AllProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/addProducts/${params.products}`)
            },
            {
                path: '/mobileCasing',
                element: <MobileCasing></MobileCasing> 
                // loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            }

        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DashBoardLayer></DashBoardLayer></PrivateRouter>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/orders',
                element: <SellerRouter><AddProducts></AddProducts></SellerRouter>
            },
            {
                path: '/dashboard/seller',
                element: <AdminRouter><AllSeller></AllSeller></AdminRouter>
            },
            {
                path: '/dashboard/byers',
                element: <AdminRouter><AllByers></AllByers></AdminRouter>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            },
           
        ]
    }

])

export default router;
