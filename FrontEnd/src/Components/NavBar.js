import { React, useState } from 'react'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* --> Navbar For Mobile <-- */}
      <div className='p-3 flex max-w-full opacity-100 justify-between'>
        <div className='text-white'>LOGO FOR THE SITE</div>
        <div className=''>
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-20 rounded border-2 border-purple-800 flex justify-center"
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
              <a className='text-center rounded mt-2 bg-white border-4 border-purple-800 cursor-pointer'>Home</a>
              <a className='text-center rounded mt-2 bg-white border-4 border-purple-800 cursor-pointer'>Contact</a>
              <a className='text-center rounded mt-2 bg-white border-4 border-purple-800 cursor-pointer'>About Us</a>
              <a className='text-center rounded mt-2 bg-white border-4 border-purple-800 cursor-pointer'>Products</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar