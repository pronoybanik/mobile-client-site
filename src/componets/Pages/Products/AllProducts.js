import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Buttons/PrimaryButton';


const AllProducts = ({ Product }) => {
    const { image_url, title, details, _id } = Product;
    return (
        <div>

            <div className="hero w-2/3">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className="py-6">{details}</p>
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