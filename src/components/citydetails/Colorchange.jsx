import React, { useState } from 'react'
import { colorchange } from './colorcontext'
import Colorshow from './Colorshow'
import Menubar from './Menubar'
export default function Colorchange() {
    const [color,setcolor] = useState()
  return (
    <>
        <colorchange.Provider value={{pcolor:color,psetcolor:setcolor}}>
          <Menubar></Menubar>
          <div className='h-1 w-full bg-white'></div>
            <Colorshow></Colorshow>
          
        </colorchange.Provider>
    </>
  )
}
