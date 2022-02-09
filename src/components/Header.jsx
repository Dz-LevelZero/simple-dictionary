import React, { useContext, useState } from 'react'
import { InputContext } from '../App';

const Header = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(value);
    setValue("");
  }

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  return (
    <div className='bg-violet-900'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center text-white'>Simple Dictionary</h1>
        <p className='text-center mt-1 mb-10 text-slate-300 text-lg'>Find Words Definitions</p>

        <div className="flex items-center justify-center mt-5">
          <div className='flex border-2 border-gray-200 rounded'>
            <input className='px-4 py-2 max-w-md' type='text' placeholder='Search . . .' value={value} onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
            <button className='bg-orange-700 border-l px-4 py-2 text-white' onClick={handleSubmit}>Search</button>
          </div>
        </div>

        { inputValue && (
          <h3 className='text-gray-50 text-center mt-4'>Result for : <span className='text-white font-bold'>{inputValue}</span></h3>
        )}

      </div>
    </div>
  )
}

export default Header