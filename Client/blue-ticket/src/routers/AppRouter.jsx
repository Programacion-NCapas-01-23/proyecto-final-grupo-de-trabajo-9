import React from "react";
import {Navbar}from "../components/Navbars/NavbarHomepage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "../pages/user/Login.jsx";
import Home from "../pages/user/Home.jsx";
import MyTickets from "../pages/user/MyTIckets";

export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/myticket" element={<MyTickets />} />
          </Routes>
        </div>
      </Router>
    );
  };
  