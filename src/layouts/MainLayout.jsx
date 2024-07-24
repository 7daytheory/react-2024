import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';

//Outlet servers as a placeholder for child routes within the parent route - displaying everything except navbar
const MainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet /> 
    </>
  )
}

export default MainLayout