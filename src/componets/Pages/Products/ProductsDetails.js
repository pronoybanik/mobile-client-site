import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryButton from '../../Buttons/PrimaryButton';


const ProductsDetails = () => {

    const data = useLoaderData();
    console.log(data);
    const { image_url, title, price, official, Size, Resolution, Ram, GPU, Colors } = data;


    return (
        <div>
            <h1 className='text-3xl text-center my-8 font-bold text-green-500'>This Mobile will be sold</h1>


            <div className="card w-f  my-20 shadow-xl">
                <figure><img className='w-1.2 h-96' src={image_url} alt="Movie" /></figure>
                <div className="card-body ">

                    <div className='flex justify-center'>

                        <div className='mr-16
                        '>
                            <p className='text-xl font-semibold font-sans'>Name: {title}</p>
                            <p className='text-xl font-semibold font-sans text-red-600'>price: ${price}</p>
                            <p className='text-xl font-semibold font-sans'>{official}</p>
                            <p className='text-xl font-semibold font-sans'>Display: {Size}</p>

                        </div>
                        <div>
                            <p className='text-xl font-semibold font-sans'>{Resolution}</p>
                            <p className='text-xl font-semibold font-sans'>Ram: {Ram}</p>
                            <p className='text-xl font-semibold font-sans'>GPU: {GPU}</p>
                            <p className='text-xl font-semibold font-sans'>color: {Colors}</p>

                        </div>
                    </div>
                    <div className='card-actions w-full flex justify-center'>
                        <PrimaryButton classes='btn  font-serif border-none mt-4'>button</PrimaryButton>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductsDetails;