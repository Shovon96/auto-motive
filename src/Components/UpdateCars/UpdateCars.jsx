import Swal from "sweetalert2";

const UpdateCars = () => {

    const handleUpdateCar = event => {
        event.preventDefault()
        const form = event.target;
        const Name = form.name.value;
        const brand_name= form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.ratting.value;
        const short_description = form.details.value;
        const ImageURL = form.photo.value;
        const newCar = {ImageURL,brand_name, Name,  type, price, rating, short_description}
        // console.log(newCar);

        // send data to the server
        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Car has been saved successfully!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }


    return (
        <div>
            <div>
                <h2 className="text-4xl font-bold text-center">Update Car Details</h2>
                <p className="text-center my-3 px-72">Discover a curated collection of vehicles that redefine the driving experience from sleek sedans to powerful SUVs, each crafted for unrivaled style and performance. At AutoMotive, we are passionate about elevating your journey on the road. Welcome to a world where driving is just a necessity; it is an exhilarating adventure.</p>
            </div>
            <form onSubmit={handleUpdateCar} className="border w-2/3 mx-auto my-12 p-5 bg-zinc-200">
                <div className="form-control">

                    <div className="flex justify-between gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name:</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Supplier:</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Category:</span>
                            </label>
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered border-zinc-600 w-full" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Available Quantity:</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Taste:</span>
                            </label>
                            <input type="text" name="taste" placeholder="How is this taste" className="input input-bordered border-zinc-600 w-full" required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Details:</span>
                            </label>
                            <input type="text" name="details" placeholder="Write Details" className="input input-bordered border-zinc-600 w-full" required />
                        </div>
                    </div>

                    <label className="label">
                        <span className="label-text text-lg font-semibold">Photo:</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered border-zinc-600" required />
                </div>
                <button className="btn btn-block mt-4 bg-zinc-700 text-white hover:bg-zinc-800">Add Coffee</button>
            </form>
        </div>
    );
};

export default UpdateCars;