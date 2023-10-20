import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ThemeChange from "../Components/ThemeChange/ThemeChange";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <ToastContainer />
            <div className="max-w-full mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <div className="fixed top-3 ml-16 lg:ml-2 lg:top-6">
                    <ThemeChange></ThemeChange>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;