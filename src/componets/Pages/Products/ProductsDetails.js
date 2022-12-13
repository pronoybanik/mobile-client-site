import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryButton from '../../Buttons/PrimaryButton';
import Model from '../Model/Model';


const ProductsDetails = () => {

    const data = useLoaderData();
    const { image_url, title, price, Size, Resolution, Ram, GPU, Colors, sellerName, productUse } = data;

    const [mobileBooking, setMobileBooking] = useState([]);

    return (
        <div>
            <h1 className='text-3xl text-center my-8 font-bold text-green-500'>This Mobile will be sold</h1>


            <div className="card w-f  my-20 shadow-xl">
                <figure><img className='w-1.2 h-96' src={image_url} alt="Movie" /></figure>
                <div className="card-body ">

                    <div className='flex justify-center'>

                        <div className='mr-16'>
                            <p className='text-xl font-semibold font-sans'>SellerName: {sellerName}</p>
                            <p className='text-xl font-semibold font-sans'>Usedate: {productUse}</p>
                            <p className='text-xl font-semibold font-sans text-red-600'>price: ${price}</p>
                            <p className='text-xl font-semibold font-sans'>MobileName: {title}</p>

                        </div>
                        <div>
                            <p className='text-xl font-semibold font-sans'>Display: {Size}</p>
                            <p className='text-xl font-semibold font-sans'>{Resolution}</p>
                            <p className='text-xl font-semibold font-sans'>Ram: {Ram}</p>
                            <p className='text-xl font-semibold font-sans'>GPU: {GPU}</p>
                            <p className='text-xl font-semibold font-sans'>color: {Colors}</p>

                        </div>
                    </div>

                    {/* model open button */}

                    <div className='card-actions  flex justify-center'>
                        {/* <PrimaryButton classes='btn w-80 font-serif border-none mt-4'>booing</PrimaryButton> */}

                        <label onClick={() => setMobileBooking(data)} htmlFor="mobile-model" className="btn
                        hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white 
                        w-80 font-serif border-none mt-4
                        ">Booking</label>
                        {/* <label htmlFor="mobile-model" className="btn">Yay!</label> */}

                    </div>
                </div>

            </div>
            {
                <Model
                    mobileProps={mobileBooking}
                ></Model>
            }
        </div>
    );
};

export default ProductsDetails;