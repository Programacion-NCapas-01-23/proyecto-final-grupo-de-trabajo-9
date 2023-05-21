import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/blue_ticket.png";
import SearchBox from '../SearchBox';

export const NavbarUser = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    
        return (
            <nav className="flex flex-wrap h-20 md:h-32 sm:h-32 lg:flex-row items-center justify-between  bg-blue w-full lg:h-24 sm:justify-items-stretch">
                <div class="w-2/5 lg:w-1/6 px-5">
                    <img src= {logo} alt='Logo de blueticket' className="md:w-9/12"></img>
                </div>
                <div>
                    <SearchBox/>
                </div>
                <div className='lg:hidden px-5'>
                    <button onClick={() => setIsOpen(!isOpen) }>
                        <FontAwesomeIcon icon={faBars} className={`${isOpen ? "hidden" : "block"} md:w-8 md:h-8`} style={{color: "#ffffff",}}  />
                        <FontAwesomeIcon icon={faXmark} className={`${isOpen ? "block" : "hidden"} md:w-8 md:h-8`} style={{color: "#ffffff",}} />
                    </button>
                </div>
                <div className={`w-full h-screen z-50 lg:ml-0 lg:h-0 bg-blue lg:bg-blue  lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} >
                    <div className="text-sm md:text-base lg:text-lg lg:flex lg:flex-row">
                        <button className="block text-left w-full my-2 items-center border-0 py-2 px-4 text-white bg-blue">Mis tickets</button>
                        <button className="block text-left w-full my-2 items-center border-0 py-2 px-4 text-white bg-blue">Historial</button>
                        <button className="block text-left w-full my-2 items-center border-0 py-2 px-4 text-white bg-blue">Cerrar Sesión</button>
                    </div>
                </div>
            </nav>
        )
    }
    export default NavbarUser;