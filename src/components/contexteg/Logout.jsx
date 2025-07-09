import React, { useContext, useEffect } from 'react'
import { usercontext } from './usercontext'
import { useNavigate } from 'react-router'

export default function Logout() {
    let user= useContext(usercontext)
    let navigate = useNavigate()
    useEffect(()=>
    {
      if(!user.pislogin)
      {
        navigate('/login')
      }
    })
  return (
    <div>Logout:
        <input type="button" value="logut" onClick={()=>{user.psetislogin(false)
          navigate('/')
        }} />
    </div>
  )
}
