  import { Route, 
        createBrowserRouter, 
        createRoutesFromElements,
        RouterProvider } 
  from 'react-router-dom';
  import HomePage from './pages/HomePage';
  import MainLayout from './layouts/MainLayout';
  import PlayersPage from './pages/PlayersPage';
  import NotFound from './pages/NotFound';
  import PlayerPage, { playerLoader } from './pages/PlayerPage';
  import AddPlayerPage from './pages/AddPlayerPage';

  /*** If changing to the sportsdata.io api that gets live data from a db of the players in the NFL */

  //You can remove json-server from packages as it won't be used and remove the players.json file

  //Create an .env file and store api key
  //Define API Url and get api key from .env file 
  const apiKey = import.meta.env.VITE_SPORTS_DATA_API_KEY;
  const apiUrl = `https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/KC?key=${apiKey}`;
  //Apply apiUrl to where /api/players were - but it's read only so I can't have add/edit/delete pages just for show

function App() {
  //Add Player
  const addPlayer = async (newPlayer) => {
      const res = await fetch('/api/players', {
        method: 'POST',
        headers: {
          'Content-type': 'application-json'
        },
        body: JSON.stringify(newPlayer),
      })
      return;
  }

//Delete Player
const deletePlayer = async (id) => {
  const res = await fetch(`/api/players/${id}`, {
    method: 'DELETE',
  })
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/players' element={<PlayersPage />} />
    <Route path='/add-player' element={<AddPlayerPage addPlayersSubmit={addPlayer}/>} />
    <Route path='/players/:id' element={<PlayerPage deletePlayer={ deletePlayer }/>} loader={playerLoader} />
    <Route path='*' element={<NotFound />} />
  </Route>
  )
)

  return <RouterProvider router={router} />;
}

export default App
