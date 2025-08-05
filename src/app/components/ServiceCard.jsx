import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src="${service.image}" alt="${service.name}" className="w-full h-48 object-cover" />
            <div className="p-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full 
                                   ${service.category === 'Design' ? 'bg-purple-100 text-purple-800' : 
                                     service.category === 'Marketing' ? 'bg-blue-100 text-blue-800' :
                                     service.category === 'Writing' ? 'bg-green-100 text-green-800' :
                                     'bg-gray-100 text-gray-800'}">
                    ${service.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">${service.name}</h3>
                <p className="mt-1 text-sm text-gray-600">${service.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <span className="text-xl font-bold text-gray-900">$${service.price}</span>
                        <span className="block text-xs font-medium ${service.available ? 'text-green-500' : 'text-red-500'}">
                            ${service.available ? 'Available' : 'Unavailable'}
                        </span>
                    </div>

                    <Link href={`/services/${service.id}`}>
                        <button className={`px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors
                                          ${!service.available ? 'opacity-50 cursor-not-allowed' : ''} ${!service.available ? 'disabled' : ''} `}

                        >
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;