import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-5 py-2 font-bold rounded-lg text-white bg-rose-700  shadow-md hover:bg-rose-600" : "px-5 py-2 font-bold rounded-lg text-white border-y"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-5 py-2 font-bold rounded-lg text-white bg-rose-700  shadow-md hover:bg-rose-600" : "px-5 py-2 font-bold rounded-lg text-white border-y"
            }
        >
            Add Product
        </NavLink>
        <NavLink
            to="/addCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-5 py-2 font-bold rounded-lg text-white bg-rose-700 shadow-md hover:bg-rose-600" : "px-5 py-2 font-bold rounded-lg text-white border-y"
            }
        >
            Add Cart
        </NavLink>
    </>

    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className="h-20 w-48" src='https://i.ibb.co/W3QTrzm/download.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end mr-4">
                <a className="px-6 py-2 font-bold rounded-lg text-white bg-rose-700 shadow-md hover:bg-rose-600">LogIn</a>
            </div>
        </div>
    );
};

export default Navbar;