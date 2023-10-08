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
       User

      <div class="mt-6 flex items-center justify-end gap-x-6">
      <a href="/editprofile">
       <button type="" class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Edit Profile</button>
      </a>
      </div>
    </div>
  )
}

export default UserProfile