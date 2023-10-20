import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("LogOut Success!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
            })
            .catch(error => {
                toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });

            })
    }

    const navLink = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-5 py-2 font-bold rounded-lg text-black lg:text-white bg-rose-700  shadow-md hover:bg-rose-600" : "px-5 py-2 font-bold rounded-lg text-rose-600 lg:text-white border-y"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-5 py-2 font-bold rounded-lg text-black lg:text-white bg-rose-700  shadow-md hover:bg-rose-600" : "px-5 py-2 font-bold rounded-lg text-rose-600 lg:text-white border-y"
            }
        >
            Add Product
        </NavLink>
        <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "px-5 py-2 font-bold rounded-lg text-black lg:text-white bg-rose-700 shadow-md hover:bg-rose-600" : "px-5 py-2 font-bold rounded-lg text-rose-600 lg:text-white border-y"
            }
        >
            My Cart
        </NavLink>
    </>

    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className="h-20 w-48 hidden md:block" src='https://i.ibb.co/m8JG2Wv/download.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user ? <div className="flex items-center font-bold">
                        <p className="pl-3 text-white text-sm">{user?.displayName}</p>
                        <img className="h-10 w-10 mx-2 rounded-full" src={user?.photoURL} alt="" />
                        <button onClick={handleLogOut} className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-rose-700 shadow-md hover:bg-rose-600 cursor-pointer">SignOut</button>
                    </div>
                        :
                        <button>
                            <NavLink to='/login' className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-rose-700 shadow-md hover:bg-rose-600 cursor-pointer">SignIn</NavLink>
                        </button>
                }

            </div>
            <div className="navbar-end  lg:hidden">
                {
                    user ? <>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                {
                                    user?.photoURL ?
                                        <img className="cursor-pointer h-10 w-10 mx-2 rounded-full" src={user?.photoURL} alt="" />

                                        :
                                        <FaRegUser></FaRegUser>
                                }
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    user && <li className="pl-3 pb-2 ">{user?.displayName}</li>
                                }
                                {
                                    user && <>
                                        <li className="pl-3 pb-2 ">{user?.email}</li>
                                        <button onClick={handleLogOut} className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-rose-700 shadow-md hover:bg-rose-600 cursor-pointer">SignOut</button>
                                    </>

                                }
                            </ul>
                        </div>
                    </>
                        :
                        <button>
                            <NavLink to='/login' className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-rose-700 shadow-md hover:bg-rose-600 cursor-pointer">SignIn</NavLink>
                        </button>
                }

            </div>
            {/* <div className="navbar-end mr-4">
                {
                    user ? <>
                        <span className="text-white mr-3">{user?.displayName}</span>
                        <img className="h-10 w-10 mx-2 rounded-full" src={user?.photoURL} alt="" />
                        <button onClick={handleLogOut} className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-rose-700 shadow-md hover:bg-rose-600 cursor-pointer">SignOut</button>
                    </>
                        :
                        <button>
                            <NavLink to='/login' className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-rose-700 shadow-md hover:bg-rose-600 cursor-pointer">SignIn</NavLink>
                        </button>
                }
            </div> */}
        </div>
    );
};

export default Navbar;