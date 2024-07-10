import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Listings from "./components/Listings";
import Navbar from "./components/Navbar";
import ViewAll from "./components/ViewAll";


function App() {
  return (
    <>
      <Navbar />
      <Hero title='Become a React Developer' subtitle='Find the React job that fits your skills and needs' />
      <HomeCards />
      <Listings />
      <ViewAll />
    </>
  );
}

export default App
