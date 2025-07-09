import React, { useContext, useRef } from 'react'
import Advanceshow from './Advanceshow'
import { productcontext } from './productcontext'


export default function Basicshow() {
    let no = useContext(productcontext)
    let Number = useRef()
  return (
    <>
    <div>Basicshow</div>
    <p>
       enter no: <input type="text" ref={Number} />
       <input type="button" value="updat contactno" onClick={()=>no.personcontact(Number.current.value)} />
    </p>
    <Advanceshow></Advanceshow>
    <div className='text-xl text-orange-500'>contact: {no.contact}</div>
    </>
  )
}
