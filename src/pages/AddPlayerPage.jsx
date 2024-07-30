import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPlayerPage = ( { addPlayersSubmit} ) => {  
  const [Team, setTeam] = useState('');
  const [PlayerNumber, setPlayerNumber] = useState(''); // Change from Number to PlayerNumber
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Position, setPosition] = useState('');
  const [Status, setStatus] = useState('');
  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  const [College, setCollege] = useState('');
  const [Experience, setExperience] = useState('');
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [ShortName, setShortName] = useState('');

    const navigate = useNavigate();

    const submitForm = (e) => {
      e.preventDefault();

      const newPlayer = {
        Team,
        Number: PlayerNumber, // Number is an already used keyword so first assign it to PlayerNumber and change it back to Number here
        FirstName,
        LastName,
        Position,
        Status,
        Height,
        Weight,
        BirthDate,
        College,
        Experience,
        Name,
        Age,
        ShortName,
      };

      addPlayersSubmit(newPlayer);

      toast.success('Played added successfully!');

      return navigate('/players');
    }

  return (
    <>
    <section className="bg-red-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">Add Player</h2>

              <div className="mb-4">
              <label htmlFor="Team" className="block text-gray-700 font-bold mb-2">Team *</label>
                <input
                  type="text"
                  id="Team"
                  value={Team}
                  onChange={(e) => setTeam(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="PlayerNumber" className="block text-gray-700 font-bold mb-2">Player Number</label>
                <input
                  type="text"
                  id="PlayerNumber"
                  value={PlayerNumber}
                  onChange={(e) => setPlayerNumber(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="FirstName" className="block text-gray-700 font-bold mb-2">First Name *</label>
                <input
                  type="text"
                  id="FirstName"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="LastName" className="block text-gray-700 font-bold mb-2">Last Name *</label>
                <input
                  type="text"
                  id="LastName"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Position" className="block text-gray-700 font-bold mb-2">Position *</label>
                <input
                  type="text"
                  id="Position"
                  value={Position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Status" className="block text-gray-700 font-bold mb-2">Status *</label>
                <input
                  type="text"
                  id="Status"
                  value={Status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Height" className="block text-gray-700 font-bold mb-2">Height *</label>
                <input
                  type="text"
                  id="Height"
                  value={Height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Weight" className="block text-gray-700 font-bold mb-2">Weight *</label>
                <input
                  type="text"
                  id="Weight"
                  value={Weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="BirthDate" className="block text-gray-700 font-bold mb-2">Birth Date</label>
                <input
                  type="date"
                  id="BirthDate"
                  value={BirthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="College" className="block text-gray-700 font-bold mb-2">College</label>
                <input
                  type="text"
                  id="College"
                  value={College}
                  onChange={(e) => setCollege(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Experience" className="block text-gray-700 font-bold mb-2">Experience</label>
                <input
                  type="text"
                  id="Experience"
                  value={Experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">Name *</label>
                <input
                  type="text"
                  id="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="Age" className="block text-gray-700 font-bold mb-2">Age *</label>
                <input
                  type="number"
                  id="Age"
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="ShortName" className="block text-gray-700 font-bold mb-2">Short Name *</label>
                <input
                  type="text"
                  id="ShortName"
                  value={ShortName}
                  onChange={(e) => setShortName(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>

              <div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit">
                  Add Player
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddPlayerPage