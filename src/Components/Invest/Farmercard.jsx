import React from 'react'

const Farmercard = () => {
  return (
    <div className='w-full h-auto p-4'>
    <a href="/farmerprofile" class="w-full h-[300px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <img class="w-[350px] rounded-xl h-[300px] p-1" src="src/assets/agri.jpg" alt=""/>
        <div class="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Rajendra Patel</h5>
          </div>
            <div className='text-start'>
            <p class="mb-2  font-normal text-gray-700 dark:text-gray-400">Produce: <span className='text-green-500'>Rice, Wheat, Sugarcane</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>Mumbai</span></p>
            <p className='mb-2 text-gray-400'>Area of land: <span className='text-gray-500'>2 Acres</span></p>
            </div>
        </div>
    </a>
    <a href="/farmerprofile" class="w-full h-[300px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="w-[350px] rounded-xl h-[300px] p-1" src="src/assets/agri.jpg" alt=""/>
        <div class="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Ravi Singh</h5>
          </div>
            <div className='text-start'>
            <p class="mb-2  font-normal text-gray-700 dark:text-gray-400">Produce: <span className='text-green-500'>Tomatoes, Bell Peppers, Mustard Seeds</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>Haryana</span></p>
            <p className='mb-2 text-gray-400'>Area of land: <span className='text-gray-500'>2 Acres</span></p>
            </div>
        </div>
    </a>
    </div>
  )
}

export default Farmercard