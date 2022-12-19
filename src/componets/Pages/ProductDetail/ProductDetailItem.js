import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Buttons/PrimaryButton';

const ProductDetailItem = ({ data }) => {
    console.log(data);
    return (
        <div>
            
            <div className="card w-96 h-full bg-base-100 shadow-xl image-full">
                <figure><img src={data.photo_url} p alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <Link to={`/addProducts/${data.name}`}>

                            <PrimaryButton classes='btn '>Detail</PrimaryButton>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailItem;

// "https://placeimg.com/400/225/arch"