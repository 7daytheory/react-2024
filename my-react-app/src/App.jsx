import { Route, 
        createBrowserRouter, 
        createRoutesFromElements,
        RouterProvider } 
   from 'react-router-dom';
import Banner from "./components/Banner";
import HomeCards from "./components/HomeCards";
import Listings from "./components/Listings";
import Navbar from "./components/Navbar";
import ViewAll from "./components/ViewAll";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My Page</h1>} />)
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
