import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbars/NavbarUser";
import Home from "../pages/user/Home.jsx";
import MyTickets from "../pages/user/MyTIckets";
import Record from "../pages/user/Record";

export const DashboardClient = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mytickets" element={<MyTickets />} />
          <Route path="/history" element={<Record/>} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardClient;