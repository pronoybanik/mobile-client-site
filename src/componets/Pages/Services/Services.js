import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('https://mobile-server-site.vercel.app/categories')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, []);
    
    return (
        <div  data-aos="zoom-in-down">
            <h2 className='text-4xl font-bold text-center my-16 font-serif text-gray-600 uppercase'>Our Second Hand Product</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-12'>
                {
                    servicesData.map(services => <ServiceItem
                        key={services._id}
                        data={services}
                    ></ServiceItem>)
                }
            </div>

        </div>
    );
};

export default Services;