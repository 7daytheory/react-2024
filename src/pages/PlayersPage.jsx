import Listings from '../components/Listings';

const PlayersPage = () => {
    return (
      <section className='bg-red-50 px-4 py-6'>
        <Listings isHome={false} />
      </section>
    )
  };

export default PlayersPage