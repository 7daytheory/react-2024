import React from 'react';
import jobs from '../jobs.json';

console.log(jobs);

const Listings = () => {
    const isHome = true;
    return (
        <section className='bg-blue-50 px-4 py-10'>
          <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
              {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>
          </div>
        </section>
      );
    };
    export default Listings;