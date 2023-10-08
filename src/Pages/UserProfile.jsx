import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserProfile = () => {
  const id = localStorage.getItem("userId")
  const [records, setRecords] = useState([])
  useEffect(()=>{
       axios.get(`http://localhost:3000/user/getUserById/${id}`)
       .then(res=> setRecords(res.data))
       .catch(error=>console.log(error));
  }, [id])
  return (
    <div className='py-[25px] px-4 mx-auto max-w-screen-xl text-gray-50'>
      <div className='flex flex-col items-center'>
       
        <div className='mb-5'>
          {records.image==null? (<img className='w-20 h-20 rounded-lg' src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg" alt="" />)
          : (<img className='w-20 h-20 rounded-lg' src={records.image} alt="" />)  
        }
          
        </div>
        <div>
          <h1 className='text-2xl font-bold mb-3'>{records.fullName}</h1>
        </div>
        <div>
          <h1 className='mb-2'>Email: <span>{records.email}</span></h1> 
          <h1 className='mb-2'>Phone: <span>+91 </span><span>{records.phone}</span></h1>         
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
      <a href="/editprofile">
       <button type="" class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Edit Profile</button>
      </a>
      </div>
    </div>
  )
}

export default UserProfile