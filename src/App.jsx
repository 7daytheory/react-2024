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
  import EditPlayerPage from './pages/EditPlayerPage';

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

//Update Player
const updatePlayer = async (player) => {
  const res = await fetch(`/api/players/${player.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application-json'
    },
    body: JSON.stringify(player),
  })
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/players' element={<PlayersPage />} />
    <Route path='/add-player' element={<AddPlayerPage addPlayersSubmit={addPlayer}/>} />
    <Route path='/players/:id' 
      element={<PlayerPage deletePlayer={ deletePlayer }/>} 
      loader={playerLoader} 
      />
    <Route path='/edit-player/:id' 
    element={<EditPlayerPage updatePlayerSubmit={updatePlayer}/>} 
    loader={playerLoader} 
    />
    <Route path='*' element={<NotFound />} />
  </Route>
  )
)

  return <RouterProvider router={router} />;
}

export default App
