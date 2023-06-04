import React from 'react';

const CasingItem = ({ data }) => {

    return (
        <div>

            <div className="card w-full h-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                </div>
                <figure><img className='h-full' src={data.photo_url} alt="Shoes" /></figure>
            </div>

        </div>
    );
};

export default CasingItem;