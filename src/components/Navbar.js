import React, { useRef } from 'react'
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import logomobile from "../components/autopeepal.png";


const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive");
    };

    return (


        <div className="navcontainer sm:h-full md:pb-96 md:pt-4 md:pl-96 item-align:right backimg ">




            {/* <FaReact size={40} /> */}

            <img src={window.innerWidth > 1024 ? null : logomobile} />
            {/* Sets the navRef as a reference to the nav element */}
            <nav ref={navRef} className="lg:w-1/2 w-full lg:pl-20 lg:py-2  lg:mt-0">
                <a href="/#" class="navbutoon z-1 w-24 h-18  text-black hover:text-white text-center font-bold  border-0  py-4 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg  sm:mt-0 ">Home</a>

                <a href="/#about" class="navbutoon z-1 w-24 h-18 flex-shrink-0 text-black hover:text-white text-center font-bold  border-0  py-4 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg  sm:mt-0">About</a>

                <a href="/#notes" class="navbutoon z-1 w-24 h-18 flex-shrink-0 text-black hover:text-white text-center font-bold  border-0  py-4 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg  sm:mt-0">Services</a>

                <a href="/#vision" class="navbutoon z-1 w-24 h-18 flex-shrink-0 text-black hover:text-white text-center items-center font-bold  border-0  py-4 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg  sm:mt-0">Portfolio</a>

                <a href="/#" class="navbutoon z-1 w-24 h-18 flex-shrink-0 text-black hover:text-white text-center font-bold  border-0  py-4 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg  sm:mt-0">Blog</a>

                <a href="/#" class="navbutoon z-1 w-24 h-18 flex-shrink-0 text-black hover:text-white text-center font-bold  border-0  py-4 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg  sm:mt-0">Contact</a>

                {/* Renders a button with the class of nav-btn nav-close-btn and an FaTimes icon inside */}
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav >
            {/* Renders a button with the class of nav-btn and an FaBars icon inside */}
            <button button className="nav-btn" onClick={showNavbar} >
                <FaBars />
            </button >
        </div >

    )
}

export default Navbar
