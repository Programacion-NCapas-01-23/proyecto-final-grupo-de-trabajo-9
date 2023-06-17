import React from "react";
import Footer from "../../components/Footer/Footer";
import SearchBoxTicket from "../../components/SearchBoxTicket";
import CardMyTicket from "../../components/Card/CardMyTicket";
import { useNavigate } from 'react-router-dom';

export const MyTickets = () => {

  const navigate = useNavigate();


  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold mt-8 mb-4">Mis Tickets</h1>
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <SearchBoxTicket />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 lg:ml-32 ">

          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>
          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>
          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>

          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>
          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>
          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>

          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>
          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>
          <div className="flex justify-center lg:w-3/4">
            <CardMyTicket />
          </div>

        </div>

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <button style={{ backgroundColor: "#E98A15", color: "white", fontWeight: "bold", padding: "12px 24px", borderRadius: "20px", margin: "0 8px 16px" }}>
            Anterior
          </button>
          <button style={{ backgroundColor: "#062343", color: "white", fontWeight: "bold", padding: "12px 24px", borderRadius: "20px", margin: "0 8px 16px" }}>
            Siguiente
          </button>
        </div>

        <Footer />
      </div></>
  );
};

export default MyTickets;