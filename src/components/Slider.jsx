import React from 'react'
import sdf from "../assets/images/1.jfif"
import first from '../assets/images/1.jfif'
import second from '../assets/images/2.jfif'
import third from '../assets/images/3.jfif'
import forth from '../assets/images/4.jfif'
import fifth from '../assets/images/5.jfif'
export default function Slider() {
    let slidesdata = [
        {img:first,title:"fun",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla asperiores temporibus. Eius."},
        {img:second,title:"divinity",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla asperiores temporibus. Eius."},
        {img:third,title:"peace",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla asperiores temporibus. Eius."},
        {img:forth,title:"adventure",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla asperiores temporibus. Eius."},
        {img:fifth,title:"mountains",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla asperiores temporibus. Eius."},
    ]
let slidesui = slidesdata.map((s)=>
{
    return <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={s.img} className="absolute block  w-full -translate-x-1/2 
            -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            <div className='text-white uppercase text-center px-96   
            z-10 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                <h1 className='text-8xl pb-8'>{s.title}</h1>
                <hr />
                <p className='text-xl pt-3 px-25'>
                 {s.desc}
                </p>
            </div>
        </div>
    
})
  return (
   

<div id="default-carousel" className="relative w-full" data-carousel="slide">
    {/* <img src={first}></img> */}
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-150 overflow-hidden rounded-lg  ">
        {slidesui}
    </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
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

  )
}
