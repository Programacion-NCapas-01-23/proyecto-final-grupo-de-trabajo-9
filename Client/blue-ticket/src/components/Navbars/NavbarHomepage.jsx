import React from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import logo from "../../assets/blue_ticket.png";
import SearchBox from "../SearchBox";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="flex flex-row items-center px-5 justify-between bg-blue w-full h-24 sm:justify-items-stretch">
      <div className="w-2/5 lg:w-1/5">
        <img src={logo} alt="Logo de blueticket" className="md:w-9/12"></img>
      </div>
      <div className="flex-grow">
        {/*<SearchBox />*/}
      </div>
      <div className="flex items-center">
        <button
          onClick={handleLogin}
          className="flex items-center text-white rounded-none bg-blue"
        >
          <RiLoginBoxLine className="mr-2" />
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



