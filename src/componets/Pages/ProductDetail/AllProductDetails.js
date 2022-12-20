import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProductCard from './AllProductCard';

const AllProductDetails = () => {
    const products = useLoaderData()
    // console.log(products);


    return (
        <div>

            <h1 className='text-2xl text-center my-10 font-semibold'>All type of products section:-   </h1>

            <div className='grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 '>
                {
                    products?.map(product => <AllProductCard
                        key={product._id}
                        data={product}
                    ></AllProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProductDetails;