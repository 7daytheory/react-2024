import Card from "./Card.jsx";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>View Team</h2>
            <p className='mt-2 mb-4'>
              Browse players on the Chiefs and their information
            </p>
            <Link to="/players"
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Members</h2>
            <p className='mt-2 mb-4'>
              Update/Add players to the roster
            </p>
            <Link to="/add-player"
              className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;