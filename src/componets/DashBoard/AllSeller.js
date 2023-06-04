import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import AllUserItem from './AllUserItem';

const AllSeller = () => {

    // const [allUser, setAllUser] = useState([]);

    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {

            const res = await fetch('https://mobile-server-site.vercel.app/seller', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json()
            return data;

        }

    });

    const handleDelete = user => {
        fetch(`https://mobile-server-site.vercel.app/user/${user?._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch('')
                toast.success(`Delete Product`)


            })


    }

    return (
        <div className='font-serif'>
            <h2 className='text-3xl  font-semibold text-center my-10'>All Seller Details:- {allUser?.length}</h2>
            <div className="overflow-x-auto p-6">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUser?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.Role}</td>
                                <td>

                                    <button className='btn btn-error text-white btn-sm' onClick={() => handleDelete(user)}>
                                        cancel
                                    </button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;