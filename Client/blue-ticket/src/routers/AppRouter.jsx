
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../pages/user/Login";
import DashboardClient from "./DashboardClient";
import DashboardAdmin from "./DashboardAdmin";
import Home from "../pages/user/Home.jsx";
import Navbar from "../components/Navbars/NavbarHomepage";
import ChangePassword from "../pages/user/ChangePassword.jsx";

const MainContainer = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <MainContainer>
                <Home />
              </MainContainer>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/user/*" element={<DashboardClient />} />
          <Route path="/admin/*" element={<DashboardAdmin />} />
        </Routes>
      </div>
    </Router>
  );
};