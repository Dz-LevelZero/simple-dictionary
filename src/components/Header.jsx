import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-700'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center text-white'>Simple Dictionary</h1>
        <p className='text-center mt-1 mb-10 text-slate-300 text-lg'>Find Definitions for Word</p>

        <div className="flex items-center justify-center mt-5">
          <div className='flex border-2 border-gray-200 rounded'>
            <input className='px-4 py-2 max-w-md' type='text' placeholder='Search . . .' />
            <button className='bg-blue-400 border-l px-4 py-2 text-white'>Search</button>
          </div>
        </div>

        <h3 className='text-gray-50 text-center mt-4'>Result for : <span className='text-white font-bold'>Freelance</span></h3>
      </div>
    </div>
  )
}

export default Header