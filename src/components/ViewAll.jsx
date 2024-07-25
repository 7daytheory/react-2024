import { Link } from 'react-router-dom';

const ViewAll = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        to='/players'
        className='block bg-[#E31837] hover:bg-[#D10F2E] text-white text-center py-4 px-6 rounded-xl'
      >
        View All Players
      </Link>
    </section>
  )
}

export default ViewAll;