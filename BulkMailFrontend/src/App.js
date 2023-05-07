import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import Mail from './users'
function App() {

  return (
    <>
    <Toaster/>
    <div className='flex items-center justify-center  h-screen bg-gray-300 '>
    
        <Link to="Usersupload">

        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Uploadusers</button>
        </Link>

        <Link to="Sendmail">

        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sendmail</button>
        </Link>
    </div>
    </>
  )
}

export default App