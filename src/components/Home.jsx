import { useEffect } from "react";
import Pakage from "./Pakage";
import Slider from "./Slider";
import { initFlowbite } from "flowbite";
import { useLocation } from "react-router";
export default function Home()
{
    const location = useLocation();

  useEffect(() => {
    initFlowbite();
    // console.log(location.pathname)
  }, [location.pathname]);
    return(
        <>
        <Slider></Slider>
        <Pakage></Pakage>
        </>
    )
}