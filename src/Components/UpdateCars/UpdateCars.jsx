// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCars = () => {

    const lodedData = useLoaderData()
    const { _id, ImageURL, Name, brand_name, price, rating, short_description, type, } = lodedData


    const handleUpdateCar = event => {
        event.preventDefault()
        const form = event.target;
        const Name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.ratting.value;
        const short_description = form.details.value;
        const ImageURL = form.photo.value;
        const updatedCar = { ImageURL, Name, type, price, rating, short_description }
        // console.log(updatedCar);

        // send data to the server
        fetch(`http://localhost:5000/car/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Car has been updated successfully!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }


    return (
        <div>
            <div>
                <h2 className="text-3xl mt-4 md:text-4xl font-bold text-center">Update Your Car</h2>
                <p className="text-center my-3 px-4 lg:px-72">Discover a curated collection of vehicles that redefine the driving experience from sleek sedans to powerful SUVs, each crafted for unrivaled style and performance. At AutoMotive, we are passionate about elevating your journey on the road. Welcome to a world where driving is just a necessity; it is an exhilarating adventure.</p>
            </div>
            <form onSubmit={handleUpdateCar} className="border lg:w-2/3 mx-auto my-12 p-5 bg-rose-100 rounded-md">
                <div className="form-control">

                    <div className="md:flex justify-between gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name:</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" defaultValue={Name} className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Type:</span>
                            </label>
                            <input type="text" name="type" placeholder="Type Name" defaultValue={type} className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Brand Name:</span>
                            </label>
                            <input type="text" name="details" placeholder="Write Description" defaultValue={brand_name} className="input input-bordered border-zinc-600 w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Price:</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Ratting:</span>
                            </label>
                            <input type="text" name="ratting" placeholder="Type your ratting" defaultValue={rating} className="input input-bordered border-zinc-600 w-full" required />
                            
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Descriptions:</span>
                            </label>
                            <input type="text" name="details" placeholder="Write Description" defaultValue={short_description} className="input input-bordered border-zinc-600 w-full" required />
                        </div>
                    </div>

                    <label className="label">
                        <span className="label-text text-lg font-semibold">Photo URL:</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" defaultValue={ImageURL} className="input input-bordered border-zinc-600" required />
                </div>
                <button className="btn btn-block mt-4 bg-rose-600 text-white hover:bg-rose-700">Update Car</button>
            </form>
        </div>
    );
};

export default UpdateCars;