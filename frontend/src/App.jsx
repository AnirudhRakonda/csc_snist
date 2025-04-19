import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import Contests from "./pages/Contests";
import ContestScoreBoard from "./pages/ContestScoreBoard";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/admin" || location.pathname === "/contests";
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/contests" element={<Contests />} />
        
      </Routes>
      {!isAuthPage && (
        <div className="bg-background text-text font-jetbrains">
          <Navbar />
          <div className="pt-20">
            {/* <section id="contests"> */}
            <section id="home">
              <Landing />
            </section>
            <section id="about">
              <AboutUs />
              <ContestScoreBoard></ContestScoreBoard>
            </section>
            <section id="events">
              <Events />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      )}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default AppWrapper;
