import React from 'react';

const AllProductCard = ({ data }) => {
    const { name, location, number, photo, price, product, productType } = data;

    

    return (
        <div className='font-serif my-4 ml-8'>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">
                        {name}
                        <div className="badge badge-secondary">{location}</div>
                    </h2>
                    <p>{productType}</p>
                    <p>Mobile Number:  {number}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">price: {price}</div>
                        <div className="badge badge-outline">Name: {product}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllProductCard;