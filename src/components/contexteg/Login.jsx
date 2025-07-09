import React, { useContext, useEffect, useRef, useState } from 'react'
import { usercontext } from './usercontext'
import { useNavigate } from 'react-router'

export default function Login() {
    let nameref = useRef("manthan")
    let pwdref = useRef("123") 
    const [msg,setmsg]= useState("")
    let user = useContext(usercontext)
    let navigate = useNavigate()
    useEffect(()=>
    {
        if(user.pislogin)
        {
            navigate('/logout')
        }
    },[])
    const fun1=()=>
    {   
        if(nameref.current.value=="manthan" && pwdref.current.value=="123")
        {
            user.psetislogin(true)
            navigate('/logout')
        }
        else
        {
            setmsg("invalid user")
        }

    }
  return (
    <div>Login:
        <p>username: <input type="text"  ref={nameref}/></p>
        <p>pwd: <input type="text" ref={pwdref}/></p>
        <input type="button" value="login" onClick={()=>fun1()} />
        <p>{msg}</p>
    </div>
  )
}
