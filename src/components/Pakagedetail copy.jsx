import React from 'react'
import { useParams } from 'react-router'
import { tourPackages } from './packagesdata'
import delhi from "../assets/images/delhi.jpg"
import agra from "../assets/images/agra.jpg"
import jaipur from "../assets/images/jaipur.jpg"
import building from "../assets/images/building.svg"
import car from "../assets/images/car.svg"
import meal from "../assets/images/meal.svg"
import sightseeing from "../assets/images/sightseeing.svg"

export default function Pakagedetail() {
    let slidesdata = [
        {img:delhi},
        {img:agra},
        {img:jaipur},
    ]
let slidesui = slidesdata.map((s)=>
{
    return <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={s.img} className="absolute block  w-full h-full -translate-x-1/2 
            -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <div className='text-white uppercase text-center  px-26  
            z-10 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            </div>
        </div>
})

    let param=useParams()
        let id=param.id;
        let pakages=tourPackages.find((m)=>m.packageId==id)
       
       
     let idata = pakages.itinerary.map((obj)=>
        {
          return   <div className="w-full p-2 bg-orange-50 border border-orange-200 rounded-lg shadow-sm hover:shadow-md transition duration-300">
  <div className="flex flex-col gap-1">

    {/* Day */}
    <div className="text-2xl font-semibold text-orange-300 flex items-center gap-2">
      <span className="text-lg">📅</span> Day {obj.day}
    </div>

    {/* Location */}
    <div className="text-gray-700 flex items-center gap-2 text-base">
      <span className="text-xl">📍</span>
      <span>
        <strong className="text-gray-800">Location:</strong> {obj.location || "Not specified"}
      </span>
    </div>

    {/* Activities */}
    <div className="text-gray-700 flex items-start gap-2 text-base">
      <span className="text-xl">💪</span>
      <span>
        <strong className="text-gray-800">Activities:</strong> {obj.activities || "No activities listed"}
      </span>
    </div>

  </div>
</div>
        })
  return (
    <>
    










        <div className='shadow-xl w-4/5 mx-auto mt-10 flex'>
          <div id="default-carousel" className="relative w-3/5" data-carousel="slide">
              {/* <!-- Carousel wrapper --> */}
              <div className="relative h-110 overflow-hidden">
                {slidesui}
              </div>
              {/* <!-- Slider indicators --> */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
              </div>
              {/* <!-- Slider controls --> */}
              <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                      </svg>
                      <span className="sr-only">Previous</span>
                  </span>
              </button>
              <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                      </svg>
                      <span className="sr-only">Next</span>
                  </span>
              </button>
          </div>
          {/* this is pakage details */}
          <div className='w-2/5 bg-red-50 px-10'>
            <div className='text-5xl font-medium mt-5 text-gray-600'>{pakages.packageName}</div>
            <div className='text-xl mt-5 font-medium text-red-400'>{pakages.duration}</div>
            <hr className='text-gray-300 mt-8' />
            <div className='mt-3 text-xl font-medium text-gray-600'>Inclusions</div>
            <div className='grid grid-cols-4 gap-2 mt-1 text-center text-xs font-semibold'>
              <div className='mx-auto'><img className='h-20 ' src={building} alt="" />Accommodation</div>
              <div className='mx-auto'><img className='h-20 ' src={car} alt="" />Transfer</div>
              <div className='mx-auto'><img className='h-20 ' src={meal} alt="" />Meal</div>
              <div className='mx-auto'><img className='h-20 ' src={sightseeing} alt="" />Sightseeing</div>

            </div>
          </div>
        </div>

        <div className='mt-15  w-4/5 mx-auto flex gap-5'>

          <div className='flex flex-col gap-5'>
            {/*this is description box  */}
            <div className='w-200 border flex flex-col gap-3 border-gray-300 p-10 text-justify tracking-tighter text-gray-500 shadow-lg rounded-xs'>
                <div>
                  {pakages.desc1}
                </div>

                <div>
                  {pakages.desc2}
                </div>

            </div>
            {/* this is days box */}
            <div className='flex flex-col gap-3 w-200 border px-5 py-5 border-gray-300 rounded-xs shadow-lg'>
              {idata}
            </div>
          </div>
            {/*this is contact box  */}
          <div className='h-130 w-105 border border-gray-300'>
                <div className='text-center tracking-tighter text-3xl mt-10 font-semibold'>Fill Enquiry Form Below</div>

                <div className='flex flex-col gap-4 mt-10  px-5'>
                  <div>
                    <label className='font-medium' htmlFor="">Your Full Name</label><br />
                    <input className='w-full' type="text" />
                  </div>
                   <div>
                    <label className='font-medium' htmlFor="">Tour Description</label><br />
                    <input className='h-18 w-full' type="text" />
                  </div>

                  <div className='flex'>
                    <div className='w-1/2 '>
                      <label className='font-medium' htmlFor="">Departure Date</label><br />
                      <input className='h-6 w-40' type='date' />
                    </div>
                    <div className='w-1/2'>
                      <label className='font-medium' htmlFor="">Number of Days</label><br />
                      <input className='h-6 w-40' type='number' />
                    </div>
                  </div>
                  <input className='h-8' type="email" placeholder='Email' />
                  <input className='h-8' type="number" placeholder='Contact No' />
                  <input type="button" value="Submit Here" className='border rounded-xs bg-red-600 text-white font-bold' />
                </div>
          </div>        
        </div>
    </>
  )
}
