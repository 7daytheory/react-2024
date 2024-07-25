import React, {useState} from 'react'
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import noHeadshot from '../assets/images/blank-headshot.png';

const Listing = ( {player}) => {
  const [showMore, setShowMore] = useState(false);

  let headshot = player.UsaTodayHeadshotNoBackgroundUrl || noHeadshot;
  
  console.log(player);
  return (
    <div className='bg-white rounded-xl shadow-md relative'>
        <div className='p-4'>
            <div className='mb-6'>
                <div className='text-gray-600 my-2'>{player.FirstName}</div>
                <h3 className='text-xl font-bold'>{player.LastName}</h3>
            </div>
            <div className='mb-5'>
                <img src={headshot} alt="User HeadShot" className="flex justify-center mb-2 mt-2"/>
            </div>
            <button onClick={() => setShowMore((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">Show {showMore ? 'less' : 'more'}</button>
            {showMore && (
              <div id="moreInfo">
                <h3 className='text-gray-600 mb-2'>Height : {player.Height}</h3>
                <h3 className='text-gray-600 mb-2'>Weight : {player.Weight}</h3>
                <h3 className='text-gray-600 mb-2'>Position : {player.Position}</h3>
              </div>
            )}
            <div className='border border-gray-100 mb-5'></div>
            <div className='flex flex-col lg:flex-row justify-between mb-4'>

            </div>
            <div className='text-orange-700 mb-3'>
                <FaMapMarker className="inline text-lg mb-1 mr-1" />
                {player.location}
            </div>
            <Link to={`/players/${player.id}`} className='h-[36px] bg-[#FFB612] hover:bg-[#FFC920] text-white px-4 py-2 rounded-lg text-center text-sm'>
                Read More
            </Link>
        </div>
    </div>
  )
}

export default Listing