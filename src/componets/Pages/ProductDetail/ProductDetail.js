import React, { useEffect, useState } from 'react';
import ProductDetailItem from './ProductDetailItem';

const ProductDetail = () => {

    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/ProductsDetail')
            .then(res => res.json())
            .then(data => setProductDetail(data))

    }, []);

    return (
        <div className='font-serif'>
            <h2 className='text-4xl my-14 text-gray-600 text-center font-bold'
            >Selling products</h2>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4'>
                {
                    productDetail?.map(detail => <ProductDetailItem
                        key={detail._id}
                        data={detail}
                    ></ProductDetailItem>)
                }
            </div>

        </div>
    );
};

export default ProductDetail;