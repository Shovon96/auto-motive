// import Swal from 'sweetalert2'

import Swal from "sweetalert2";


const AddProducts = () => {

    const handleAddCars = event => {
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mt-4">Add new Cars</h2>
                <p className="text-center my-3 px-3 md:px-12 lg:px-72">Welcome to AutoMotive, where automotive innovation takes the driver seat. Immerse yourself in the latest models that redefine the road, from the sleek and powerful to the versatile. Each vehicle in our collection is a harmonious blend of design, performance, and cutting-edge technology, promising an unparalleled driving experience. At AutoMotive, we invite you to explore the future of driving with our newest additions, where every journey is an adventure in style and sophistication.</p>
            </div>
            <form onSubmit={handleAddCars} className="border md:w-2/3 mx-auto my-12 p-5 bg-rose-100 rounded-md">
                <div className="form-control">

                    <div className="lg:flex justify-between gap-6">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name:</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered border-zinc-600 w-full" required/>

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Brand Name:</span>
                            </label>
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered border-zinc-600 w-full"  required/>

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Type:</span>
                            </label>
                            <input type="text" name="type" placeholder="Type Name" className="input input-bordered border-zinc-600 w-full"  required/>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Price:</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered border-zinc-600 w-full"  required/>

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Ratting:</span>
                            </label>
                            <input type="text" name="ratting" placeholder="Type your ratting" className="input input-bordered border-zinc-600 w-full"  required />

                            <label className="label">
                                <span className="label-text text-lg font-semibold">Details:</span>
                            </label>
                            <input type="text" name="details" placeholder="Write Details" className="input input-bordered border-zinc-600 w-full"  required/>
                        </div>
                    </div>

                    <label className="label">
                        <span className="label-text text-lg font-semibold">Photo URL:</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered border-zinc-600"  required/>
                </div>
                <button className="btn btn-block mt-4 bg-rose-600 text-white hover:bg-rose-700">Add Car</button>
            </form>
        </div>
    );
};

export default AddProducts;