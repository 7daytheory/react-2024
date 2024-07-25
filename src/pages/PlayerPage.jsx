import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';

const playerPage = ( {deletePlayer}) => {
  const navigate = useNavigate();
  const player = useLoaderData();

  const onDeleteClick = (playerId) => {
    const confirm = window.confirm('Are you sure you want to delete this item?');

    if(!confirm) return;

    deletePlayer(playerId);

    navigate('/players');
  }

  return (
    <>
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to='/players'
          className="text-indigo-500 hover:text-indigo-600 flex items-center">
          <FaArrowLeft className="mr-2" />Back to Players Page
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <div className="text-gray-500 mb-4">{player.type}</div>
              <h1 className="text-3xl font-bold mb-4">{player.Name}</h1>
              <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <FaMapMarker className="text-lg text-orange-700 mr-2" />
                <p className="text-orange-700">{player.Team}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">Player Information</h3>
              
              <p className="mb-4"><strong>Player ID:</strong> {player.PlayerID}</p>
              <p className="mb-4"><strong>Number:</strong> {player.Number}</p>
              <p className="mb-4"><strong>First Name:</strong> {player.FirstName}</p>
              <p className="mb-4"><strong>Last Name:</strong> {player.LastName}</p>
              <p className="mb-4"><strong>Position:</strong> {player.Position}</p>
              <p className="mb-4"><strong>Status:</strong> {player.Status}</p>
              <p className="mb-4"><strong>Height:</strong> {player.Height}</p>
              <p className="mb-4"><strong>Weight:</strong> {player.Weight}</p>
              <p className="mb-4"><strong>Birth Date:</strong> {player.BirthDate}</p>
              <p className="mb-4"><strong>College:</strong> {player.College}</p>
              <p className="mb-4"><strong>Experience:</strong> {player.Experience}</p>
              <p className="mb-4"><strong>Age:</strong> {player.Age}</p>
              <p className="mb-4"><strong>Short Name:</strong> {player.ShortName}</p>
            </div>
          </main>
          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Manage Player</h3>
              <Link
                to={`/players/edit/${player.PlayerID}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Edit Player
              </Link>
              <button
                onClick={() => onDeleteClick(player.PlayerID)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Player
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  );
};

const playerLoader = async ({ params }) => {
    const res = await fetch(`/api/players/${params.id}`);
    const data = await res.json();
    return data;
}

//playerPage is default, and exporting playerLoader as well.
export {playerPage as default, playerLoader}
