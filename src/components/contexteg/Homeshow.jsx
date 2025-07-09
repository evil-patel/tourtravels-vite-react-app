import React, { useState } from 'react'
import Basicshow from './Basicshow'
import { usercontext } from './usercontext'
import Logout from './Logout'
import Login from './Login'
export default function Homeshow() {
  const [islogin,setislogin]=useState(false)
  return (
    <>
    <div>Homeshow</div>
    <div>
      {islogin?<Logout></Logout>:<Login></Login>}
    </div>
    {/* <Basicshow></Basicshow> */}
    </>
  )
}
