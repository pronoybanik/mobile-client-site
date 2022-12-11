import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])
    return (
        <div>
            <h2>services</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 '>
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