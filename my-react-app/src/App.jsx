import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero title='Become a React Developer' subtitle='Find the React job that fits your skills and needs' />
      <HomeCards />
    </>
  );
}

export default App
