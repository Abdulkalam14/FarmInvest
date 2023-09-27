import React from 'react'
import ProductTable from './ProductTable'

const Profile = () => {
  return (
    <div className='text-white p-4'>
    <div>
       <div className='flex justify-center w-full h-[300px] mb-12'>
        <img src='src/assets/agri.jpg' alt='' className='rounded-xl w-full object-cover'></img>
       </div>
       <div>
        <h1 className='text-5xl font-bold mb-4'>Rajendra Patel</h1>
        <p className='mb-2 text-gray-200'>Crops Produced: <span className='text-green-500'>Rice, Wheat , Sugarcane</span></p>
        <p className='mb-2 text-gray-200'>Location: <span className='text-gray-400'>Mumbai</span></p>
        <p className='mb-2 text-gray-200'>Area of Land: <span className='text-gray-400'>2 Acres</span></p>
        <p className='text-gray-200'>Products Available: </p>
       </div>
       <div className='py-5'>
        <ProductTable/>
       </div>
    </div>
    </div>
  )
}

export default Profile