import React, { useEffect, useState } from 'react'
import Holdingcard from './Holdingcard'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Holdingslist = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("userId")
    const apiUrl = `http://localhost:3000/investment/getInvestmentsByUserId/${id}`; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          toast.error(response.data.message)
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
  }, []);
  return (
    <div className='w-full h-auto py-12 '>
    <div className='w-full h-screen grid gap-y-0 gap-x-0 grid-cols-3 '>
    {responseData ? responseData.map(inv => {
      return (<Holdingcard crop={inv.harvest.crop} farmer={inv.harvest.farmer.fullName} 
        farmerId={inv.harvest.farmer._id} location={inv.harvest.farmer.location} 
        qty={inv.quantity} amount={inv.amount} investedOn={inv.investmentDate}
        expectedOn={inv.harvest.expectedHarvestDate}/>)
    })
    :
    ""
    }
    </div>
    </div>
  )
}

export default Holdingslist