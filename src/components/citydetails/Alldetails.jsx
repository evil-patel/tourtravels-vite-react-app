import React, { useContext, useRef, useState } from 'react'
import { citydetails } from './citydetails'

export default function Alldetails() {
  const idRef = useRef()
  const cityRef = useRef()
  const stateRef = useRef()
  const countryRef = useRef()
  const citycontext = useContext(citydetails)
  const [showDetails,setshowdetails]=useState()
  const addDetails = () => {
    const newCity = {
      id: idRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      country: countryRef.current.value,
    }

    if (!newCity.id || !newCity.city || !newCity.state || !newCity.country) {
      alert("Please fill all fields")
      return
    }

    (citycontext.cities).push(newCity)

    idRef.current.value = ''
    cityRef.current.value = ''
    stateRef.current.value = ''
    countryRef.current.value = ''
  
  
  if ((citycontext.cities).length === 0) {
    // showDetails = <p>No cities added yet.</p>
  } else {
    let showDetails1 = (citycontext.cities).map((city, index) => (
      <div key={index} className="border p-2 my-2">
              <p><b>Id:</b> {city.id}</p>
              <p><b>City:</b> {city.city}</p>
              <p><b>State:</b> {city.state}</p>
              <p><b>Country:</b> {city.country}</p>
            </div>
    ))
    setshowdetails(showDetails1)
  }
  }
  return (
    <>
      <div className="w-1/3 p-5 flex flex-col gap-5 mx-auto border-2 text-center">
        <p>id: <input type="text" ref={idRef} /></p>
        <p>city: <input type="text" ref={cityRef} /></p>
        <p>state: <input type="text" ref={stateRef} /></p>
        <p>country: <input type="text" ref={countryRef} /></p>
        <input
          type="button"
          value="ADD"
          onClick={addDetails}
          className="bg-green-500 text-white font-bold w-1/5 mt-2 rounded-2xl py-0.5 mx-auto"
        />
      </div>

      <div className="w-1/3 p-5 mx-auto mt-5 border-2 text-left">
        <h2>Added Cities:</h2>
        {showDetails}
      </div>
    </>
  )
}
