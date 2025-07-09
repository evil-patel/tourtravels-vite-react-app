import { Link } from "react-router"
import { destinations } from "./Tourdata"
import { tourPackages } from "./packagesdata"
import Footer from "./Footer"
export default function Pakage()
{
    let showui=tourPackages.map((m)=>
    {
        return <Link to={`/packagedetail/${m.packageId}`} >
            <div className='w-full border rounded-xl '>
                <div className="bg-green-500 p-1 rounded-t-xl text-center text-white font-bold text-xl uppercase">{m.packageName}</div>
                <img className="w-full h-75" src={m.img} alt="img not found" />
                <div className="text-xl pl-3 py-2 uppercase font-bold">Pakage Price: {m.price} {m.currency} </div>
                <div className="text-xl pl-3 py-2 uppercase font-bold">Duration: {m.duration} </div>
            </div>
        </Link>
    })
    return(
        <>
            <div className='w-4/5 mx-auto p-5'>
        <div className='grid grid-cols-3 gap-5'>
            {showui}
        </div>
    </div>
    <Footer></Footer>
        </>
    )
}