import React from 'react'

const HarvestCard = ({id, crop, farmer, date, qty, amount}) => {
  return (
    <div className='w-full h-auto mt-5'>
    <a href={`/select/${id}`} className="w-4/5 h-[200px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <div className="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">{crop}</h5>
          </div>
            <div className='text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Farmer Name: <span className='text-green-500'>{farmer}</span></p>
            <p className='mb-2 text-gray-400'>Expected harvest date: <span className='text-gray-500'>{date.toLocaleDateString("en-GB")}</span></p>
            <p className='mb-2 text-gray-400'>Quantity (kgs): <span className='text-gray-500'>{qty}</span></p>
            <p className='mb-2 text-gray-400'>Amount (₹/kg): <span className='text-gray-500'>{amount}</span></p>
            </div>
        </div>
    </a>
    </div>
  )
}

export default HarvestCard