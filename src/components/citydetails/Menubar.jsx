import React, { useContext } from 'react'
import { colorchange } from './colorcontext'

export default function Menubar() {
    let colorcontext = useContext(colorchange)
    let cname = colorcontext.pcolor
  return (
    <div className='h-10 w-full' style={{backgroundColor:cname}}>Menubar</div>
  )
}
