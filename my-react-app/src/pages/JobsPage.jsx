import Listings from '../components/Listings';

const JobsPage = () => {
    return (
      <section className='bg-blue-50 px-4 py-6'>
        <Listings isHome={false} />
      </section>
    )
  };

export default JobsPage