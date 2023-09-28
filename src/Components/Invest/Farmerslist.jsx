import React, { useState, useEffect } from 'react';
import Farmercard from './Farmercard';

const Farmerslist = () => {
  const [farmersList, setFarmersList] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/user/getFarmers'; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cannot retreive Farmers List.');
        }
        return response.json();
      })
      .then((data) => {
        setFarmersList(data);
        //console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className='w-full py-12'>
      {farmersList.length > 0 ? (
        farmersList.map((farmer) => (
          <Farmercard key={farmer._id} id={farmer._id} fullName={farmer.fullName} location={farmer.location} area={farmer.area} />
        ))
      ) : (
        <p>No farmers data available.</p>
      )}
    </div>
  );
};

export default Farmerslist;
