import { useState, useEffect } from 'react';
import Listing from './Listing';
import Spinner from './Spinner';

const Listings = ({ isHome = false }) => {
    //Set default players state to an empty array
    const [players, setPlayers] = useState([]);
    
    //Add a loading effect while players load
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = isHome ? 
          'api/players?_limit=6' : 
          'api/players';
        const fetchPlayers = async () => {
            try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            console.log(data);
            setPlayers(data);
            } catch (error) {
                console.log("Error fetch data ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPlayers();
    }, []);

    return (
        <section className='bg-red-50 px-4 py-10'>
          <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-[#E31837] mb-6 text-center'>
              {isHome ? 'Popular Players' : 'All Players'}
            </h2>
    
            {loading ? (
              <Spinner loading={loading} />
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {players.map((player) => (
                  <Listing key={player.id} player={player} />
                ))}
              </div>
            )}
          </div>
        </section>
      );
    };
    export default Listings;