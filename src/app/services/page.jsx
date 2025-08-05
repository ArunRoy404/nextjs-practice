import React from 'react';
import { servicesData } from '../utilities/servicesData';
import ServiceCard from '../components/ServiceCard';

const page = () => {

    return (
        <div>
            This is services page
            <div className='grid grid-cols-3 gap-5'>
                {
                    servicesData.map(service => <ServiceCard key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default page;