import { Link } from "react-router-dom";

const Login = () => {

    
    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div>
        <div className="h-auto my-12 flex items-center justify-center">
            <div className="bg-fuchsia-200 p-8 rounded-lg shadow-md w-96">
                <h2 className="text-5xl text-center text-fuchsia-600 font-extrabold mb-6">Sign In</h2>

                {/* Form */}
                <form onSubmit={handleSignIn}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email" id="email"
                            name="email"
                            placeholder="Type Your Email" required
                            className="w-full px-3 py-2 border rounded-md" />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <div className="flex items-center">
                            <input
                                type='password'
                                id="password" placeholder="Type Your Password" required
                                name="password" className="relative w-full px-3 py-2 border rounded-md" />
                            <span className=" absolute ml-72">
                                {/* {
                                    showPassword ? <FaEye title="Hide"></FaEye> : <FaEyeSlash title="Show"></FaEyeSlash>
                                } */}
                            </span>
                        </div>
                    </div>

                    <p className="mb-4 hover:text-blue-600 hover:underline"><a href="">Forget Your Password?</a></p>

                    {/* Sign In Button */}
                    <button type="submit" className="w-full bg-fuchsia-700 text-white text-lg font-semibold p-2 rounded-md hover:bg-fuchsia-600 focus:outline-none focus:shadow-outline-blue">
                        Sign In
                    </button>
                </form>

                    {/* <div className="flex justify-between mt-3">
                        <button className="btn px-8 font-bold" onClick={handleGoogleSignIn}><FaGoogle className="text-red-500 text-lg"></FaGoogle>Google</button>
                        <button className="btn px-8 font-bold"><FaGithub className="text-lg"></FaGithub>GitHub</button>
                    </div> */}


                    {/* success message set in form */}
                    {/* {
                        loginSuccess && <p className="text-sm text-green-600">{loginSuccess}</p>
                    } */}

                    {/* Error message set in form */}
                    {/* {
                        loginError && <p className=" text-sm text-red-700">{loginError}</p>
                    } */}
                    <p className="mt-4">You do not have an account? Go <Link to='/registetion' className="text-red-600 underline text-lg font-bold">SignUp</Link></p>

            </div>
        </div>
    </div>
    );
};

export default Login;