import React from 'react';
import img from '../../../image/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large (1).jpg'

const MobileDetails = () => {
    return (
        <div className='my-28 font-serif'>
            <h1 className='font-semibold text-center text-5xl my-12 text-gray-600'>New Products</h1>
            <div >
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img} className=" lg:max-w-lg rounded-lg shadow-2xl " />
                        <div className=' w-1/2 ml-10'>
                            <h1 className="text-4xl  font-bold font-serif text-gray-600">IPone-14  New Model</h1>
                            <p className="py-6 font-serif">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className=' font-mono btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mr-3 font-bold'>Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MobileDetails;