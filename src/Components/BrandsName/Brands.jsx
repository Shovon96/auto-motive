import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Brands = () => {
    const lodedData = useLoaderData()
    // console.log(lodedData);
    const [brands, setBrands] = useState(lodedData)
    const {loading} = useContext(AuthContext)

    if(loading){
        return <div className="flex justify-center items-center h-[80vh]"><span className="loading loading-lg loading-spinner text-error"></span></div>
    }
    return (
        <div>
            <h1 className="text-3xl md:text-5xl text-center font-bold my-4">Br<span className="text-rose-600">an</span>ds</h1>
            <p className="px-4 lg:px-72 text-center text-gray-400">automotive excellence, cutting-edge design and precision engineering converge in a symphony of performance and style. From electric pioneers redefining the industry to legacy brands synonymous with reliability, each vehicle tells a story of innovation and craftsmanship.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto my-12">
                {
                    brands.map(logo =>
                        <Link key={logo._id} className=" justify-self-center" to={`/cars/${logo.brand_name}`}>
                            <div
                                data-aos="zoom-in-down"
                                data-aos-duration="2000"
                                className="shadow-md rounded-lg p-3 cursor-pointer"
                            >
                                <img className="h-52 w-56" src={logo.brand_img} alt="" />
                                <h3 className="text-3xl font-extrabold text-center mt-4">{logo.brand_name}</h3>
                                {/* <button className="w-full btn text-white font-bold capitalize bg-rose-600 mt-2 hover:bg-rose-700">See Details</button> */}
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Brands;