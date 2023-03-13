import React, { useEffect, useState } from 'react';
import CasingItem from './CasingItem';
import img from '../../../image/download.jpeg'

const MobileCasing = () => {

    const [casings, setCasings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/casing')
            .then(res => res.json())
            .then(data => setCasings(data))
    }, [])

    return (
        <div className='font-serif'> 
            <div>
                <div className="hero h-48" style={{ backgroundImage: `url(${img})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            
                        </div>
                    </div>
                </div>
            </div>



            <h2 className='text-4xl text-center font-bold my-12'>All Type of MobileCasing</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-4 gap-4'>
                {
                    casings.map(casing => <CasingItem
                        key={casing._id}
                        data={casing}
                    ></CasingItem>)
                }
            </div>
        </div>
    );
};

export default MobileCasing;