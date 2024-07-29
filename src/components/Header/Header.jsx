import React from "react";
import hero from "./../../images/hero-img.svg"

export default function Header() {
    return <>
        <header className="grn-color pb-20 pt-48">
            <div className="flex justify-center">
                <img src={hero} alt="" className="w-50 h-60 m-5" />
            </div>
            <h1 className="text-white font-bold text-6xl tracking-wider">START REACT</h1>
            <div className="relative">
                <i class="fa-solid fa-star  fa-2xl my-10 text-white "></i>
            </div>
            <p className='text-white text-2xl'>Graphic Artist - Web Designer - Illustrator</p>
        </header>
    </>
}