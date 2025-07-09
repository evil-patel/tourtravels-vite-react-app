import { Link } from "react-router"
import { destinations } from "./Tourdata"
import Footer from "./Footer"
export default function Destination()
{
    let ui=destinations.map((m)=>
    {
        return <Link to={`/destinationdetail/${m.id}`}>
           <div className=" hover:scale-105 transition duration-300 w-80 mx-auto rounded-xl overflow-hidden">
                <div className="bg-sky-700 text-white text-center font-semibold text-xl py-2">
                    {m.name}
                </div>
                <img className="w-full aspect-square object-cover" src={m.img} alt={m.name}/>
            </div>

        </Link>

    })
    return(
        <>
            <div className="w-full h-70 md:h-90 lg:h-110 bg-destination  bg-center">
            </div>
            <div className="mt-10 w-5/6 mx-auto gap-10 rounded-2xl bg-gray-100 p-6 flex flex-wrap justify-evenly">
                {ui}
            </div>
            <Footer></Footer>
        </>
    )
}