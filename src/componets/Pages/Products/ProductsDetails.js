import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsDetails = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1>details{data.length}</h1>

        </div>
    );
};

export default ProductsDetails;