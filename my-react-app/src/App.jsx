import { Route, 
        createBrowserRouter, 
        createRoutesFromElements,
        RouterProvider } 
   from 'react-router-dom';
   import HomePage from './pages/HomePage';
   import MainLayout from './layouts/MainLayout';
// import Banner from "./components/Banner";
// import HomeCards from "./components/HomeCards";
// import Listings from "./components/Listings";
// import Navbar from "./components/Navbar";
// import ViewAll from "./components/ViewAll";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} /> //if path set to (path="/about") it will display on about page
  </Route>
  )
)


function App() {
  return <RouterProvider router={router} />;
      {/* <Navbar />
      <Banner />
      <HomeCards />
      <Listings />
      <ViewAll /> */}
}

export default App
