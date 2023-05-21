import React from "react";
import logo from "../../assets/blue_ticket.png";
import SearchBox from "../SearchBox";

export const Navbar = () => {
    return (
        <nav className="flex flex-row items-center px-5 justify-between bg-blue w-full h-24 sm:justify-items-stretch">
                <div class="w-2/5 lg:w-1/5">
                    <img src= {logo} alt='Logo de blueticket' className="md:w-9/12"></img>
                </div>
                <div>
                    <SearchBox/>
                </div>
                <div class="m-9 font-semibold text-sm sm:text-base lg:text-lg ">
                    <button className="text-white rounded-none bg-blue">Iniciar Sesión</button>
                </div>
        </nav>
    );
};
export default Navbar;
