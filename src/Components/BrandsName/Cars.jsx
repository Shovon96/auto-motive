import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Slider from "../Slider/Slider";

const Cars = () => {

    const [cars, setCars] = useState([])
    const { brand_name } = useParams()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://automotive-server-zeta.vercel.app/cars/${brand_name}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setCars(data)
            })
    }, [brand_name])

    return (
        <div className="mb-32">
            <Slider></Slider>
            <h1 className="text-5xl font-extrabold text-center my-4 text-rose-600">{brand_name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
                {
                    cars?.length === 0 ?
                        <>
                            {loading ? <Loader></Loader>
                                :
                                <>
                                    <div className="flex justify-end items-center h-[70vh]">
                                        <h1 className="text-4xl font-bold">No Car available!!</h1>
                                    </div>
                                    <div className="flex items-center h-[70vh]">
                                        <h1 className="text-4xl font-bold">Please add Car</h1>
                                    </div>
                                </>
                            }
                        </>
                        :
                        cars.map(car =>
                            <div key={car._id} className="justify-self-center p-4">
                                <img className="h-72" src={car?.ImageURL} alt="" />
                                <div className="shadow-md px-5">
                                    <div className="md:flex justify-between my-2 text-lg">
                                        <h2><span className="font-bold">Name: </span>{car?.Name}</h2>
                                        <h3><span className="font-bold">Brand Name: </span>{car?.brand_name}</h3>
                                    </div>
                                    <div className="md:flex justify-between my-2 text-lg flex-wrap">
                                        <h4><span className="font-bold">Type: </span>{car?.type}</h4>
                                        <p><span className="font-bold">Price: </span>$ {car?.price}</p>
                                    </div>
                                    <p>Ratting: {car?.rating}</p>
                                    {/* <p className="font-medium text-gray-500 py-3 h-24">{car.short_description}</p> */}
                                    <div className="flex justify-evenly">
                                        <Link to={`/updateCars/${car._id}`}>
                                            <button className="btn px-8 my-3 py-2 bg-rose-700 text-sm font-bold text-white rounded-lg hover:bg-rose-600">Update</button>
                                        </Link>
                                        <Link to={`/carDetails/${car._id}`}>
                                            <button className="btn px-8 my-3 py-2 bg-rose-700 text-sm font-bold text-white rounded-lg hover:bg-rose-600">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )

                }
            </div>
        </div>
    );
};

export default Cars;