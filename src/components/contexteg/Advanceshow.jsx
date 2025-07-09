import React, { useContext } from 'react'
import { productcontext } from './productcontext'

export default function Advanceshow() {
    let name = useContext(productcontext)
  return (
    <div>welcome: {name.username}</div>
  )
}
