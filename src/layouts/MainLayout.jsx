import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';

//Outlet servers as a palceholder for child routes within the parent route - currently displaying the Banner from App.jsx
const MainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet /> 
    </>
  )
}

export default MainLayout