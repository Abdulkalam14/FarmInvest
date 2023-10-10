import React from 'react'
import CropCard from '../Components/FarmerDashboard/CropCard';

const FarmerHome = () => {
  return (
    <div className='py-[25px] px-4 mx-auto max-w-screen-xl text-gray-50 h-screen flex justify-center'>
        <div className='w-full flex justify-center mt-20'>
            <div className='w-full'>
            <div className='bg-gray-800 p-20 w-full h-[300px] rounded-xl flex justify-between items-center'>
                <div className='flex items-start flex-col w-[700px]'>
                    <h1 className='font-bold text-3xl mb-3'>Submit Your Crop</h1>
                    <p>Ready to showcase your crop on our website? Fill out the form below to share details about your harvest. We will verify the 
                        information, and after that, your harvest will be displayed for our customers to invest in your crop.</p>
                </div>
            <a href="/farmerform" >
            <button  className='bg-green-500 shadow-4xl w-[200px]
            rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>New Request</button>     
            </a>
            </div>
            <div className='w-full h-auto mt-7 bg-gray-800 p-4 rounded-xl'>
             <h1 className='font-bold text-3xl mb-4'>My Crops</h1>
            <div className='grid grid-cols-2 w-full gap-3'>
               <CropCard/>
               <CropCard/>
               <CropCard/>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FarmerHome