import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";

const MyCart = () => {

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetch(`https://automotive-server-8c676odqe-coddings-projects.vercel.app/carts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCart(data)
                setLoading(false)
            })
    }, [user?.email])

    let totalPrice = 0;
    useEffect(() => {
        // eslint-disable-next-line no-const-assign, react-hooks/exhaustive-deps
        cart?.map(item => { totalPrice += item?.price })
        setTotal(totalPrice)
    }, [cart])

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://automotive-server-8c676odqe-coddings-projects.vercel.app/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        setLoading(false)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                            )
                            const remaining = cart.filter(car => car?._id !== _id);
                            setCart(remaining)
                        }
                    })
            }
        })
    }

    return (
        <>
        <h1 className="text-3xl md:text-5xl text-center font-bold mt-8 underline">My carts</h1>
            <div>
                {
                    loading ? <Loader></Loader>
                        :
                        <div className="overflow-x-auto md:max-w-6xl mx-auto my-12">
                            <table className="table">
                                {/* head */}
                                <thead className="shadow-md h-16">
                                    <tr className="md:text-lg font-semibold">
                                        <th>CAR Images</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart?.map(item =>
                                            <tr key={item?._id}>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <img className="w-24 h-20 md:w-56 md:h-48" src={item?.ImageURL} alt="" />
                                                    </div>
                                                </td>
                                                <td className="md:text-xl font-semibold">{item?.Name}</td>
                                                <td className="md:text-xl font-semibold">{item?.price}$</td>
                                                <td><button onClick={() => handleDelete(item?._id)} className="btn btn-sm md:btn-md btn-error text-white">Delete</button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr className="md:text-2xl font-bold border-t-2">
                                        <th></th>
                                        <th>Total = </th>
                                        <th>{total}$</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                }
            </div>
        </>
    );
};

export default MyCart;