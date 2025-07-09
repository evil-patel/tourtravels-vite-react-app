import { Link } from "react-router"
export default function Navebar()
{
    return(
        <>
        <div className="px-6 py-4 bg-transparent ">
            <div className="w-5/6 mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-l from-green-500 to-blue-400 bg-clip-text">MK Tours</div>
                <div className="flex gap-10">
                    <Link to="/" className="font-semibold hover:underline hover:text-green-500 ">Home</Link>
                    <Link to="/destinations" className="font-semibold hover:underline hover:text-green-500">Destinations</Link>
                    <Link to="/packages" className="font-semibold hover:underline hover:text-green-500">Packages</Link>
                    <Link to="/about" className="font-semibold hover:underline hover:text-green-500">About</Link>
                    <Link to="/contact" className="font-semibold hover:underline hover:text-green-500">Contact</Link>
                </div>
            </div>
        </div>
        </>
    )
}