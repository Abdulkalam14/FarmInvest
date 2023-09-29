import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductTable from './ProductTable'

const Profile = () => {
  const [responseData, setResponseData] = useState([]);
  const { id } = useParams();
  useEffect(() => {

    const apiUrl = `http://localhost:3000/harvest/getHarvestByFarmerId/${id}`; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cannot retreive Farmers List.');
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]); 

  return (
    <div className='text-white p-4'>
    <div>
       <div className='flex justify-center w-full h-[300px] mb-12'>
        <img src='src/assets/agri.jpg' alt='' className='rounded-xl w-full object-cover'></img>
       </div>
       <div>
        <h1 className='text-5xl font-bold mb-4'>{responseData.fullName}</h1>
        <p className='mb-2 text-gray-200'>Crops Produced: <span className='text-green-500'>Rice, Wheat , Sugarcane</span></p>
        <p className='mb-2 text-gray-200'>Location: <span className='text-gray-400'>{responseData.location}</span></p>
        <p className='mb-2 text-gray-200'>Area of Land: <span className='text-gray-400'>{responseData.area}</span></p>
        <p className='text-gray-200'>Products Available: </p>
       </div>
       <div className='py-5'>
        <ProductTable harvests={responseData.harvests}/>
       </div>
    </div>
    </div>
  )
}

export default Profile