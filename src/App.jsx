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


function App() {
  const addJob = async (newJob) => {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-type': 'application-json'
        },
        body: JSON.stringify(newJob),
      })
      return;
  }

//Delete Job
const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  })
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/players' element={<PlayersPage />} />
    <Route path='/add-player' element={<AddPlayerPage addJobSubmit={addJob}/>} />
    <Route path='/players/:id' element={<PlayerPage deleteJob={ deleteJob }/>} loader={playerLoader} />
    <Route path='*' element={<NotFound />} />
  </Route>
  )
)

  return <RouterProvider router={router} />;
}

export default App
