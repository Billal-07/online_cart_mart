import { React, useState } from 'react'
import logo from '../Images/cm.png'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* --> Desktop Nav <-- */}
      <div className='max-sm:hidden max-md:hidden max-w-full flex p-5 justify-center'>
        <img src={logo} height={50} width={50} alt='Logo' className='mr-auto ' />
        <div className='mt-4 mr-auto'>
          <a className='bg-purple-800 border-2 border-white text-white rounded-full p-1 mr-4 ml-4 font-medium cursor-pointer hover:font-extrabold transition-all bg-opacity-75'>Home</a>
          <a className='bg-purple-800 border-2 border-white text-white rounded-full p-1 mr-4 ml-4 font-medium cursor-pointer hover:font-extrabold transition-all bg-opacity-75'>Products</a>
          <a className='bg-purple-800 border-2 border-white text-white rounded-full p-1 mr-4 ml-4 font-medium cursor-pointer hover:font-extrabold transition-all bg-opacity-75'>About Us</a>
          <a className='bg-purple-800 border-2 border-white text-white rounded-full p-1 mr-4 ml-4 font-medium cursor-pointer hover:font-extrabold transition-all bg-opacity-75'>Contact</a>
        </div>
      </div>
      {/* --> Navbar For Mobile <-- */}
      <div className='lg:hidden md:hidden p-3 flex max-w-full opacity-100 justify-between'>
        <div className='text-white'>
          <img src={logo} height={50} width={50} alt='Logo' />
        </div>
        <div className=''>
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-20 mt-1 rounded border-2 border-purple-800 flex justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="grid w-20">
              <a className='text-center rounded mt-2 bg-purple-800 border-2 border-white text-white cursor-pointer'>Home</a>
              <a className='text-center rounded mt-2 bg-purple-800 border-2 border-white text-white cursor-pointer'>Contact</a>
              <a className='text-center rounded mt-2 bg-purple-800 border-2 border-white text-white cursor-pointer'>About Us</a>
              <a className='text-center rounded mt-2 bg-purple-800 border-2 border-white text-white cursor-pointer'>Products</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar