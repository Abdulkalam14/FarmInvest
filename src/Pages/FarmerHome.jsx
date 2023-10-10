import React, { useState, useEffect } from 'react'
import CropCard from '../Components/FarmerDashboard/CropCard';
import toast, { Toaster } from 'react-hot-toast';

const FarmerHome = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const id = localStorage.getItem("userId")
    const apiUrl = `http://localhost:3000/user/getRequests/${id}`; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          toast.error(response?.data?.message)
        }
        return response.json();
      })
      .then((data) => {
        setRequests(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
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
             <h1 className='font-bold text-3xl mb-4'>Requests</h1>
            <div className='grid grid-cols-2 w-full gap-3'>
            {requests.length>0 ?
            requests.map((request) => {
              return <CropCard key={request._id} crop={request.crop} total={request.totalInvestment} date={request.expectedHarvestDate} qty={request.quantity} stage={request.stage} />
            })
              :
              (<h1 className='font-bold text-4xl text-gray-400'>No Requests</h1>)
            }
               
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FarmerHome