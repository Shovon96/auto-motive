import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CarDetails = () => {

    const lodedData = useLoaderData()
    const { ImageURL, brand_name, Name, price, rating, short_description, type } = lodedData

    const { user } = useContext(AuthContext);
    const cartData = {
        email: user.email,
        ImageURL,
        brand_name,
        Name, 
        price
    }

    const handleAddCart = () => {
        fetch('https://automotive-server-8c676odqe-coddings-projects.vercel.app/carts',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Coffee has been saved successfully!',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }

    return (
        <div className="max-w-6xl mx-auto mb-16 mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-center underline">Car Details</h1>
            <p className="text-lg my-2 text-center px-4 md:px-16 mb-4 md:mb-8">Explore the future of driving with our electric and hybrid options,
                designed to not only meet but exceed the demands of a sustainable
                world. Our knowledgeable and friendly team is here to guide you
                through the latest advancements in automotive technology, ensuring you
                make an informed decision that aligns with your values.</p>
            <div className="text-center">
                <img className="w-full h-[90vh] rounded-lg mb-4" src={ImageURL} alt="" />
                <h2 className="text-4xl font-extrabold">{Name}</h2>
                <h2 className="text-2xl my-2 font-medium"><span className="font-bold">Brand Name:</span> {brand_name}</h2>
                <h3 className="text-lg font-medium my-2">Type: {type}</h3>
                <h3 className="text-lg font-medium my-2">Price: ${price}</h3>
                <p className="font-medium my-2">Rating: {rating}</p>
                <p className="text-lg px-4 md:px-24">{short_description}</p>
                <button onClick={handleAddCart} className="btn bg-rose-700 px-8 py-2 text-white mt-3 hover:bg-rose-600">Add Cart</button>
            </div>
        </div>
    );
};

export default CarDetails;