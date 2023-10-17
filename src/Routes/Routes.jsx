import { createBrowserRouter} from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";

    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <ErrorPage></ErrorPage>,
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/addProduct',
                    element: <AddProducts></AddProducts>
                }
            ]

        }
    ])


export default router;