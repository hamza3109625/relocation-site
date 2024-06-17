
import React from 'react';

const Services = () => {
  return (
    <div className='py-16 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {servicesData.map((service, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg p-10 text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg'>
              <img src={service.image} alt={service.title} className='mx-auto mb-4 rounded-full w-32 h-32 object-cover' />
              <h2 className='text-2xl font-semibold mb-2'>{service.title}</h2>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const servicesData = [
  {
    image: '/images/S1.png',
    title: 'Service 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    image: '/images/S1.png',
    title: 'Service 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    image: '/images/S1.png',
    title: 'Service 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    image: '/images/S1.png',
    title: 'Service 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];

export default Services;
