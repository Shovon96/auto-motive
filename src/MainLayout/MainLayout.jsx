import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ThemeChange from "../Components/ThemeChange/ThemeChange";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-full mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <div className="fixed top-44">
                    <ThemeChange></ThemeChange>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;