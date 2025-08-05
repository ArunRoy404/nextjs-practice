import ServiceCard from '@/app/components/ServiceCard';
import { servicesData } from '@/app/utilities/servicesData';
import React from 'react';

const page = ({ params }) => {
    const id = parseInt(params.id)
    const service = servicesData.filter(data => data.id === id)

    if (service.length === 0) {
        return <div>No data found</div>
    }

    return (
        <div className='m-10'>
            <ServiceCard service={service} />
        </div>
    );
};

export default page;