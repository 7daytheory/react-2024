import { useState, useEffect } from 'react';
import Listing from './Listing';
import Spinner from './Spinner';

const Listings = ({ isHome = false }) => {
    //Set default jobs state to an empty array
    const [jobs, setJobs] = useState([]);
    
    //Add a loading effect while jobs load
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
            const res = await fetch('http://localhost:8000/jobs');
            const data = await res.json();
            console.log(data);
            setJobs(data);
            } catch (error) {
                console.log("Error fetch data ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return (
        <section className='bg-blue-50 px-4 py-10'>
          <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
              {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>
    
            {loading ? (
              <Spinner loading={loading} />
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {jobs.map((job) => (
                  <Listing key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </section>
      );
    };
    export default Listings;