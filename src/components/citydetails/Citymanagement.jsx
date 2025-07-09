import React, { useState } from 'react'
import { citydetails } from './citydetails'
import Alldetails from './Alldetails'

export default function Citymanagement() {
  // State for list of cities
  const [cities, setCities] = useState([])

  return (
    <citydetails.Provider value={{ cities:cities, setcities:setCities }}>
      <Alldetails />
    </citydetails.Provider>
  )
}
