import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-[#E31837] text-white hover:bg-[#E31837] hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-[#E31837] hover:text-white rounded-md px-3 py-2';
  return (
    <nav className='bg-[#FFB612] border-b border-white'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink 
            to="/" 
            className='flex flex-shrink-0 items-center mr-4'>
            <img className='h-10 w-auto' src={logo} alt='KC Chiefs Logo' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Kansas City Chiefs
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink 
                to="/" 
                className={linkClass}>
                  Home
                </NavLink>
                <NavLink 
                to="/players" 
                className={linkClass}>
                  Players
                </NavLink>
                <NavLink 
                to="/add-player" 
                className={linkClass}>
                  Add Players
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;