import React from 'react';
import img from '../../../image/LT_Aggregator_D.jpg'

const Headers = () => {
    return (
        <div>
            <div className=" hero h-96" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold text-gray-300 font-serif">Big and Bigger Phone Are Thar</h1>
                        <p className="mb-5  font-serif">Provident cupiditate voluptatem et in. Quaerat fugiat the assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headers;