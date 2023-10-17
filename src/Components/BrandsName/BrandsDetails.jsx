import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandsDetails = () => {

    const [cars, setCars] = useState([])
    const { brand_name } = useParams()


    useEffect(() => {
        fetch(`http://localhost:5000/cars/${brand_name}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [brand_name])

    return (
        <div className="my-24">
            {/* <h1 className="text-5xl font-extrabold text-center my-4 text-rose-600">{car.brand_name}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
                {
                    cars.map(car =>
                        <div key={car._id} className="justify-self-center p-4">
                                <img className="h-72" src={car.ImageURL} alt="" />
                                <div className="shadow-md px-5">
                                    <div className="flex justify-between my-2 text-lg">
                                        <h2><span className="font-bold">Name: </span>{car.Name}</h2>
                                        <h3><span className="font-bold">Brand Name: </span>{car.brand_name}</h3>
                                    </div>
                                    <div className="flex justify-between my-2 text-lg flex-wrap">
                                        <h4><span className="font-bold">Type: </span>{car.type}</h4>
                                        <p><span className="font-bold">Price: </span>{car.price}</p>
                                    </div>
                                    <p>Ratting: {car.rating}</p>
                                    <p className="font-medium text-gray-500 py-3">{car.short_description}</p>
                                    <Link className="flex justify-center">
                                        <button className="w-2/3 my-3 py-3 bg-rose-500 text-base font-bold text-white rounded-full hover:bg-rose-700">Add Cart</button>
                                    </Link>
                                </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BrandsDetails;