import React, { useEffect, useState } from 'react';
import ProductDetailItem from './ProductDetailItem';

const ProductDetail = () => {

    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        fetch('https://mobile-server-site.vercel.app/ProductsDetail')
            .then(res => res.json())
            .then(data => setProductDetail(data))

    }, []);

    return (
        <div className='font-serif'>
            <h2 className='text-3xl my-14 text-center font-bold'>Selling products</h2>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-3'>
                {
                    productDetail.map(detail => <ProductDetailItem
                        key={detail._id}
                        data={detail}
                    ></ProductDetailItem>)
                }
            </div>

        </div>
    );
};

export default ProductDetail;