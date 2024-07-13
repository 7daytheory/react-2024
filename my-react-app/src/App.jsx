import { Route, 
        createBrowserRouter, 
        createRoutesFromElements,
        RouterProvider } 
   from 'react-router-dom';
   import HomePage from './pages/HomePage';
   import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} /> //if path set to (path="/about") it will display on about page
  </Route>
  )
)


function App() {
  return <RouterProvider router={router} />;
}

export default App
