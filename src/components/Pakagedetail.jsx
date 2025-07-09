import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { initFlowbite } from 'flowbite';
import { tourPackages } from './packagesdata';

import delhi from "../assets/images/delhi.jpg";
import agra from "../assets/images/agra.jpg";
import jaipur from "../assets/images/jaipur.jpg";

import building from "../assets/images/building.svg";
import car from "../assets/images/car.svg";
import meal from "../assets/images/meal.svg";
import sightseeing from "../assets/images/sightseeing.svg";
import Footer from './Footer';

export default function Pakagedetail() {
  const location = useLocation();
  const { id } = useParams();
  const pakages = tourPackages.find((m) => m.packageId == id);

  useEffect(() => {
    initFlowbite();
    // console.log(location.pathname)
  }, [location.pathname]);

  const slidesdata = [
    { img: delhi },
    { img: agra },
    { img: jaipur },
  ];

  const slidesui = slidesdata.map((s, index) => (
    <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
      <img
        src={s.img}
        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
  ));

  const idata = pakages.itinerary.map((obj, index) => (
    <div key={index} className="w-full p-2 bg-orange-50 border border-orange-200 rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <div className="flex flex-col gap-1">
        <div className="text-2xl font-semibold text-orange-300 flex items-center gap-2">
          <span className="text-lg">📅</span> Day {obj.day}
        </div>
        <div className="text-gray-700 flex items-center gap-2 text-base">
          <span className="text-xl">📍</span>
          <span><strong className="text-gray-800">Location:</strong> {obj.location || "Not specified"}</span>
        </div>
        <div className="text-gray-700 flex items-start gap-2 text-base">
          <span className="text-xl">💪</span>
          <span><strong className="text-gray-800">Activities:</strong> 
          {(obj.activities).map((a)=>a).join(" , ")}
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="shadow-2xl  shadow-orange-200 w-4/5 mx-auto mt-10 flex h-125 ">
        <div id="default-carousel" className="relative w-3/5" data-carousel="slide">
          <div className="relative h-full overflow-hidden">
            {slidesui}
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>

          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        {/* Package Details */}
        <div className="w-2/5 bg-red-50 px-10">
          <div className="text-5xl font-medium mt-5 text-gray-600">{pakages.packageName}</div>
          <div className="text-xl mt-5 font-medium text-red-400">{pakages.duration}</div>
          <hr className="text-gray-300 mt-8" />
          <div className="mt-3 text-xl font-medium text-gray-600">Inclusions</div>
          <div className="grid grid-cols-4 gap-2 mt-1 text-center text-xs font-semibold">
            <div className="mx-auto"><img className="h-20" src={building} alt="Accommodation" />Accommodation</div>
            <div className="mx-auto"><img className="h-20" src={car} alt="Transfer" />Transfer</div>
            <div className="mx-auto"><img className="h-20" src={meal} alt="Meal" />Meal</div>
            <div className="mx-auto"><img className="h-20" src={sightseeing} alt="Sightseeing" />Sightseeing</div>
          </div>
        </div>
      </div>

      {/* Description & Enquiry */}
      <div className="mt-15 w-4/5 mx-auto flex gap-5">
        <div className="flex flex-col gap-5">
          {/* Description Box */}
          <div className="w-200 border flex flex-col gap-3 border-gray-300 p-10 text-justify tracking-tighter text-gray-500 shadow-lg rounded-xs">
          <div className='text-2xl text-orange-600 font-bold text-center'>Details</div>
          <hr className='text-orange-600'/>
            <div>{pakages.desc1}</div>
            <div>{pakages.desc2}</div>
          </div>

          {/* Itinerary */}
          <div className="flex flex-col gap-3 w-200 border px-5 py-5 border-gray-300 rounded-xs shadow-lg">
            {idata}
          </div>
        </div>

        {/* Contact Form */}
        <div className="h-130 w-105 border border-gray-300">
          <div className="text-center tracking-tighter text-3xl mt-10 font-semibold">Fill Enquiry Form Below</div>
          <div className="flex flex-col gap-4 mt-10 px-5">
            <div>
              <label className="font-medium">Your Full Name</label><br />
              <input className="w-full border border-gray-300" type="text" />
            </div>
            <div>
              <label className="font-medium">Tour Description</label><br />
              <input className="h-18 w-full border-gray-300" type="text" />
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label className="font-medium">Departure Date</label><br />
                <input className="h-6 w-40 border-gray-300" type="date" />
              </div>
              <div className="w-1/2">
                <label className="font-medium">Number of Days</label><br />
                <input className="h-6 w-40 border-gray-300" type="number" />
              </div>
            </div>
            <input className="h-8 border-gray-300" type="email" placeholder="Email" />
            <input className="h-8 border-gray-300" type="number" placeholder="Contact No" />
            <input type="button" value="Submit Here" className="border rounded-xs bg-red-600 text-white font-bold" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
