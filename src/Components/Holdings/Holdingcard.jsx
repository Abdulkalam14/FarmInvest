import React from 'react'

const Holdingcard = () => {
  return (
    <div className='w-full h-auto p-4'>
    <a href="/farmerprofile" class="w-full h-[300px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="w-[350px] rounded-xl h-[300px] p-1" src="src/assets/agri.jpg" alt=""/>
        <div class="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Rajendra Patel</h5>
          </div>
            <div className='text-start'>
            <p class="mb-2  font-normal text-gray-700 dark:text-gray-400">Ordered: <span className='text-green-500'>Rice</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>Mumbai</span></p>
            <p className='mb-2 text-gray-400'>Quantity: 10kg</p>
            <p className='mb-2 text-gray-400'>Estimated date: 30th November 2023</p>
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
            <p class="mb-2  font-normal text-gray-700 dark:text-gray-400">Ordered: <span className='text-green-500'>Mustard Seeds</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>Haryana</span></p>
            <p className='mb-2 text-gray-400'>Quantity: 5kg</p>
            <p className='mb-2 text-gray-400'>Estimated date: 10th October 2023</p>
            </div>
        </div>
    </a>
    </div>
  )
}

export default Holdingcard