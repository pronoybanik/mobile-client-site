import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { authContext } from '../AuthProvider/AuthProvider';
import Loading from '../Loader/Loading';

const MyOrders = () => {
    const { user } = useContext(authContext)

    const url = `http://localhost:5000/booking?email=${user?.email}`

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {

            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json()
            return data;

        }

    });

    if (isLoading) {
        return <Loading></Loading>
    }



    const deleteBooking = booking => {
        fetch(`http://localhost:5000/booking/${booking?._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch('')
                toast.success(`Delete Product ${booking?.displayName}`)
            })


    }


    return (

        <div>
            <h2>my orders</h2>

            <div className="overflow">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Images</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Number</th>
                            <th>Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="mask mask-squircle w-20 h-full">
                                        <img src={product.image_url} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td>{product.displayName}</td>
                                <td>{product.email}</td>
                                <td>$ {product.price}</td>
                                <td>{product.number}</td>
                                <td>{product.location}</td>
                                <td>
                                    <button onClick={() => deleteBooking(product)} className='btn  btn-outline btn-error btn-sm text-white'>cancel</button>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>

    );
};

export default MyOrders;