import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Buttons/PrimaryButton';


const AllProducts = ({ Product }) => {
    const { image_url, title, _id, Size, Resolution, Ram, GPU, Colors } = Product;
    return (
        <div className='font-serif ml-6'>

            <div className="hero w-2/3">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-4'>
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className='text-xl font-semibold font-sans'>Display: {Size}</p>
                        <p className='text-xl font-semibold font-sans'>{Resolution}</p>
                        <p className='text-xl font-semibold font-sans'>Ram: {Ram}</p>
                        <p className='text-xl font-semibold font-sans'>GPU: {GPU}</p>
                        <p className='text-xl font-semibold font-sans'>color: {Colors}</p>
                        <Link to={`/productsDetails/${_id}`}>
                            <PrimaryButton classes='btn  font-serif border-none'>Details</PrimaryButton>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;