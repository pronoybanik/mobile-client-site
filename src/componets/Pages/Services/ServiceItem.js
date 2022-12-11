import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ data }) => {
    const { photo_url, id } = data
    return (
        <div>

            <Link to={`/products/${id}`}>
                <div className="card w-96 h-80 bg-base-100 shadow-xl image-full">
                    <figure><img className='' src={photo_url} alt="Shoes" /></figure>

                </div>
            </Link>

        </div>
    );
};

export default ServiceItem;