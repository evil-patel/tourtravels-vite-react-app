import React, { useContext } from 'react'
import { colorchange } from './colorcontext'
import { backgroundImage } from 'flowbite-react/plugin/tailwindcss/theme'

export default function Colorshow() {
const changec = useContext(colorchange)

const fun1=(color)=>
{
    changec.psetcolor(color)
}
  return (
    <>
        <div className='h-[100dvh] w-full  'style={{ backgroundColor: changec.pcolor }}>
            <div className=' justify-end items-center flex gap-2 pr-10 pt-5'>
                <input className='h-5 w-5 bg-blue-500 border' type="button" value="" onClick={()=>fun1('blue')} />
                <input className='h-5 w-5 bg-red-600 border' type="button" value="" onClick={()=>fun1('red')} />
                <input className='h-5 w-5 bg-gray-400 border' type="button" value="" onClick={()=>fun1('gray')} />
            </div>

            <div className=' h-140 content-center w-1/2 text-2xl text-justify mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate? Debitis, iusto. Aliquid ratione repellendus <span style={{color:changec.pcolor,backgroundColor:'white'}}> eaque fugit labore fuga tempora quod numquam, </span>obcaecati rem, distinctio iste aliquam accusantium, quidem qui.</div>
        </div>
    </>
  )
}
