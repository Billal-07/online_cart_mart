import React from 'react'
import logo from '../Images/cm.png'
const MyFooter = () => {
  return (
    <footer className="rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="grid items-center mb-4 sm:mb-0">
            <img src={logo} className="h-10 w-20 ml-3 mt-1" alt="Logo"/>
            <span className="self-center text-2xl font-bold whitespace-nowrap text-purple-600 uppercase dark:text-white">CarMods</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-blue-900 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white font-light sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">CarMods™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default MyFooter