import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebaseConfig/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from "react-toastify";

const Register = () => {

    
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);

        if (password.length < 6) {
            toast.error('PassWord should be at least 6 charecter or longer',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            })
            return;
        }
        // passWord validation
        else if (!/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(password)) {
            toast.error('At least one uppercase charecter, one number and one special charecter must be added',{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            })
            return;
        }

        // Create User
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/')
                toast.success("User Created Success !", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                })
                e.target.reset()
            })
            .catch(error => {
                toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                })
            })
    }


    return (
        <div  className="hero h-auto" style={{backgroundImage: 'url(https://i.ibb.co/J7cJxxx/download-1.jpg)'}}>
             <div className="hero-overlay bg-opacity-60"></div>
            <div className="h-auto my-12 flex items-center justify-center"  style={{backdropFilter: 'blur(5px)'}}>
                <div className="border p-8 rounded-lg shadow-xl w-96">
                    <h2 className="text-5xl text-center text-gray-500 font-extrabold mb-6">Sign Up</h2>

                    {/* Form */}
                    <form onSubmit={handleSignUp}>
                        {/* name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-rose-600 text-base font-bold mb-2">Name</label>
                            <input
                                type="text" id="name"
                                name="name"
                                placeholder="Type Your Name" required
                                className="w-full px-3 py-2 placeholder-gray-300 border rounded-md bg-transparent border-b border-gray-500 focus:outline-none focus:border-rose-700" />
                        </div>
                        {/* PhotoURL Input */}
                        <div className="mb-4">
                            <label htmlFor="photo" className="block text-rose-600 text-base font-bold mb-2">Photo URL</label>
                            <input
                                type="text" id="photo"
                                name="photo"
                                placeholder="Type Your PhotoURL" required
                                className="w-full px-3 py-2 placeholder-gray-300 border rounded-md bg-transparent border-b border-gray-500 focus:outline-none focus:border-rose-700" />
                        </div>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-rose-600 text-base font-bold mb-2">Email</label>
                            <input
                                type="email" id="email"
                                name="email"
                                placeholder="Type Your Email" required
                                className="w-full px-3 py-2 border placeholder-gray-300 rounded-md bg-transparent border-b border-gray-500 focus:outline-none focus:border-rose-700" />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-rose-600 text-base font-bold mb-2">Password</label>
                            <div className="flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password" placeholder="Type Your Password" required
                                    name="password" 
                                    className="relative w-full text-white placeholder-gray-300 px-3 py-2 border rounded-md bg-transparent border-b border-gray-500 focus:outline-none focus:border-rose-700" />
                                <span className=" absolute ml-72" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye className="text-white" title="Hide"></FaEye> : <FaEyeSlash className="text-white" title="Show"></FaEyeSlash>
                                    }
                                </span>
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <button type="submit" className="w-full bg-gray-500 text-white text-lg font-semibold p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue">
                            Sign Up
                        </button>

                        <p className="mt-4 text-white">You already have an account? Go <Link to='/login' className="text-red-600 underline text-lg font-bold">SignIn</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;