import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Brands = () => {
    const lodedData = useLoaderData()
    console.log(lodedData);
    const [brands, setBrands] = useState(lodedData)
    return (
        <div>
            <h1 className="text-5xl text-center font-bold my-4">Br<span className="text-rose-600">an</span>ds</h1>
            <p className="px-72 text-center text-gray-400">automotive excellence, cutting-edge design and precision engineering converge in a symphony of performance and style. From electric pioneers redefining the industry to legacy brands synonymous with reliability, each vehicle tells a story of innovation and craftsmanship.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto my-12">
                {
                    brands.map(logo =>
                        <div
                            key={logo._id}
                            className="shadow-md rounded-lg justify-self-center p-3 cursor-pointer"
                        >
                            <img className="h-52 w-56" src={logo.brand_img} alt="" />
                            <h3 className="text-3xl font-extrabold text-center mt-4 hover:text-rose-600">{logo.brand_name}</h3>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Brands;