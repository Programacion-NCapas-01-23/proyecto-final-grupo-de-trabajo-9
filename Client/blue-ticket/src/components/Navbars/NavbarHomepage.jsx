import React from "react";
import logo from "../../assets/blue_ticket.png";
import SearchBox from "../SearchBox";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/login');
    }

    return (
        <nav className="flex flex-row items-center px-5 justify-between bg-blue w-full h-24 sm:justify-items-stretch">
            <div className="w-2/5 lg:w-1/5">
                <img src={logo} alt='Logo de blueticket' className="md:w-9/12"></img>
            </div>
            <div>
                <SearchBox />
            </div>
            <div className="m-9 font-semibold text-sm sm:text-base lg:text-lg ">
                <button onClick={handleLogin} className="text-white rounded-none bg-blue">Iniciar Sesión</button>
            </div>
        </nav>
    );
};
export default Navbar;
