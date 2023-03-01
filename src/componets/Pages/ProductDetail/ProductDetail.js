import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Buttons/PrimaryButton';
import ProductDetailItem from './ProductDetailItem';

const ProductDetail = () => {

    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        fetch('https://mobile-server-site.vercel.app/ProductsDetail')
            .then(res => res.json())
            .then(data => setProductDetail(data))

    }, []);

    return (
        <div className='font-serif' >
            <h2 className='text-4xl my-14 text-gray-600 text-center font-bold'
            >Add And Sell Products</h2>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4'>
                {
                    productDetail?.map(detail => <ProductDetailItem
                        key={detail._id}
                        data={detail}
                    ></ProductDetailItem>)
                }
            </div>


            <div className='card-actions justify-center'>
                <Link className='btn btn-outline  font-bold mt-12 '
                    to='/dashboard/orders'>ADD Item</Link>
            </div>


        </div>
    );
};

export default ProductDetail;