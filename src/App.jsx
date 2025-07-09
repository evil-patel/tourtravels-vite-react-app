import { Route, Routes } from 'react-router'
import Navebar from './components/Navebar'
import Home from './components/Home'
import Destination from './components/Destination'
import Pakage from './components/Pakage'
import About from './components/About'
import Contact from './components/Contact'
import Destinationdetails from './components/Destinationdetails'
import Pakagedetail from './components/Pakagedetail'
import Effecteg from './components/Effecteg'
import { productcontext } from './components/contexteg/productcontext'
import Homeshow from './components/contexteg/Homeshow'
import { useState } from 'react'
import Citymanagement from './components/citydetails/Citymanagement'
import Login from './components/contexteg/Login'
import Logout from './components/contexteg/Logout'
import { usercontext } from './components/contexteg/usercontext'
import Colorchange from './components/citydetails/Colorchange'
function App() {
  const [a,seta]=useState('+91')
  const [islogin,setislogin]=useState(false)
  return (
    <>
    {/* <Colorchange></Colorchange> */}
    {/* <usercontext.Provider value={{pislogin:islogin,psetislogin:setislogin}}>
          <Routes>
            <Route path='/' element={<Homeshow></Homeshow>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/logout' element={<Logout></Logout>}></Route>
          </Routes>
        </usercontext.Provider> */}
    {/* <productcontext.Provider value={{username:"manthan",contact:a,personcontact:seta}}>
        <Homeshow></Homeshow>
    </productcontext.Provider> */}
    {/* <Effecteg></Effecteg> */}
    {/* <Homeshow></Homeshow> */}
    {/* <Citymanagement></Citymanagement> */}
    <Navebar></Navebar>
      <Routes>
        <Route path='/packagedetail/:id' element={<Pakagedetail></Pakagedetail>}></Route>
        <Route path='/destinationdetail/:id' element={<Destinationdetails></Destinationdetails>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/destinations' element={<Destination></Destination>}></Route>
        <Route path='/packages' element={<Pakage></Pakage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </>
  )
}

export default App
