import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Holdings from './Pages/Holdings';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>} />
         <Route path='/holdings/:id' element={<Holdings/>}/>
      </Route>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    
  )
}

export default App