import React, { useEffect, useState } from 'react'

export default function Effecteg() {
    const [i,seti] = useState(1)
    const [j,setj]= useState(2)
    useEffect(()=>
    {
        console.log("use effect called " +i)
    },[])
  return (
    <>
    <div>
        Effecteg:{i}--------{j} <input type="button" value="change i " onClick={()=>seti(i+1)} />
        <br></br>
        <input type="button" value="change j " onClick={()=>setj(j+1)} /></div>
    </>
  )
}
