import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Buttons/PrimaryButton';

const ProductDetailItem = ({ data }) => {
    // console.log(data);
    const { photo_url, name } = data;
    return (
        <div>

            <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title   text-2xl mt-4">{name}</h2>
                    <p className='text-xl text-gray-200 '>Thar are Add A Many products for sell..Go and choose our product</p>
                    <div className="card-actions justify-end">
                        <Link to={`/addProducts/${name}`}>

                            <PrimaryButton classes='btn btn-sm border-none'>Detail</PrimaryButton>

                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailItem;

// "https://placeimg.com/400/225/arch"