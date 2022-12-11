import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from './AllProducts';

const Products = () => {
    const data = useLoaderData()
    console.log(data);
    
    // const [products, setPorducts] = useState(data)


    return (
        <div>
            <h1>all products:{data.length}</h1>
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