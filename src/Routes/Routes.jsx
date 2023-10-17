import { createBrowserRouter} from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import BrandsDetails from "../Components/BrandsName/BrandsDetails";

    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <ErrorPage></ErrorPage>,
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('http://localhost:5000/brands')
                },
                {
                    path: '/cars/:brand_name',
                    element: <BrandsDetails></BrandsDetails>,
                },
                {
                    path: '/addProduct',
                    element: <AddProducts></AddProducts>
                }
            ]

        }
    ])


export default router;