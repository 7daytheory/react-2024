import Card from "./Card.jsx";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card bg='bg-[#E31837]'>
            <h2 className='text-white text-2xl font-bold'>View Team</h2>
            <p className='text-white mt-2 mb-4'>
              Browse players on the Chiefs and their information
            </p>
            <Link to="/players"
              className='inline-block bg-[#FFB612] text-[#E31837] font-bold rounded-lg px-4 py-2 hover:bg-[#FFB100]'
            >
              View Players
            </Link>
          </Card>
          <Card bg='bg-[#FFB612]'>
            <h2 className='text-white text-2xl font-bold'>For Staff</h2>
            <p className='text-white mt-2 mb-4'>
              Update/Add players to the roster
            </p>
            <Link to="/add-player"
              className='inline-block bg-[#E31837] hover:bg-[#D10F2E] text-[#FFB612] font-bold rounded-lg px-4 py-2'>
              Add Player
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;