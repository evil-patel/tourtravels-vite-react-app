import React from 'react'
import { useParams } from 'react-router'
import { destinations } from './Tourdata';
import Footer from './Footer';

export default function Destinationdetails() {
    let params=useParams()
    let id=params.id;
    let destination=destinations.find((m)=>m.id==id)
    console.log(destination)
  return (
    <>
   <div className="w-full flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-10">
      {/* Image */}
      <div className=" w-4/5 h-90 overflow-hidden rounded-xl shadow-md mb-6">
        <img
          src={destination.img}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="w-4/5 bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>

        <p className="text-base mb-4">{destination.description}</p>

        <div className="flex justify-between items-center text-lg font-semibold">
          <span className="text-green-600">₹{destination.price}</span>
          <span className="text-yellow-500">⭐ {destination.rating} / 5</span>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}
