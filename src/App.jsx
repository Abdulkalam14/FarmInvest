import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Holdings from './Pages/Holdings';
import Farmers from './Pages/Farmers';
import Profile from './Pages/Profile';
import FarmerProfile from './Pages/FarmerProfile';
import BuyingPage from './Pages/BuyingPage';
import Choose from './Pages/Choose';
import OtpVerification from './Pages/OtpVerification';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>} />
         <Route path='/holdings' element={<Holdings/>}/>
         <Route path='/farmers' element={<Farmers/>}/>
         <Route path='/profile/:id' element={<Profile/>}/>
         <Route path='/farmerprofile' element={<FarmerProfile/>}/>
         <Route path='/checkout' element={<BuyingPage/>}/>
         <Route path='/select' element={<Choose/>}/>
      </Route>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/verification" element={<OtpVerification/>}/>
    </Routes>
    
  )
}

export default App