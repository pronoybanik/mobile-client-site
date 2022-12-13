import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from './AllProducts';

const Products = () => {

    const data = useLoaderData()

    return (
        <div>
            <h1 className='text-3xl text-center my-4 font-bold text-green-500'>All Second Hand Product</h1>
            {
                data.map(d => <AllProducts
                    key={d.id}
                    Product={d}
                ></AllProducts>)
            }


        </div>
    );
};

export default Products;