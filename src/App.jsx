import { Route, Routes, Navigate } from 'react-router-dom'

import Layout from './Layout'
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Holdings from './Pages/Holdings';
import Farmers from './Pages/Farmers';
import UserProfile from './Pages/UserProfile';
import FarmerProfile from './Pages/FarmerProfile';
import BuyingPage from './Pages/BuyingPage';
import Choose from './Pages/Choose';
import OtpVerification from './Pages/OtpVerification';
import Farmersignup from './Pages/FarmerSignup';
import EditProfile from './Pages/EditProfile';
import FarmerForm from './Pages/FarmerForm';

const isAuthenticated = () => {
  const accessToken = localStorage.getItem('accessToken');
  return !!accessToken; // Returns true if there is an access token, false otherwise
};

// PrivateRoute component to handle protected routes
const PrivateRoute = ({ component: Component }) => {
  if (isAuthenticated()) {
    return <Component />;
  } else {
    // Redirect to the sign-in page if not authenticated
    return <Navigate to="/signin" />;
  }
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Use PrivateRoute to protect the specified routes */}
        <Route index element={<PrivateRoute component={Home} />} />
        <Route path="/holdings" element={<PrivateRoute component={Holdings} />} />
        <Route path="/farmers" element={<PrivateRoute component={Farmers} />} />
        <Route path="/profile/:id" element={<PrivateRoute component={UserProfile} />} />
        <Route path="/farmerprofile/:id" element={<PrivateRoute component={FarmerProfile} />} />
        <Route path="/checkout" element={<PrivateRoute component={BuyingPage} />} />
        <Route path="/select/:id" element={<PrivateRoute component={Choose} />} />;
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/farmerform' element={<FarmerForm/>}/>
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/farmersignup" element={<Farmersignup />} />
      <Route path="/verification" element={<OtpVerification />} />
    </Routes>
  );
}

export default App