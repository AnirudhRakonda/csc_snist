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
import Footer from "./components/Footer";
import FocusCards from "./components/FocusCards";
import img from "./assests/cyberstrike.png";
import my_pic from "./assests/my_pic.jpeg";

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
            <section id="home">
              <Landing />
            </section>
            <section id="about">
              <AboutUs />
              <ContestScoreBoard />
            </section>
            <section id="events">
              <Events />
            </section>
            <section id="contact">
              <h1 className="text-2xl mt-[10vh] font-bold text-center my-8">OUR PROUD BOARD</h1>
              <FocusCards
                cards={[
                  {
                    role: "President",
                    name: "Shivam Kumar",
                    src: img,
                  },
                  {
                    role: "Vice President",
                    name: "Aarav Singh",
                    src: img,
                  },
                  {
                    role: "Secretary",
                    name: "Ishita Sharma",
                    src: img,
                  },
                  {
                    role: "Treasurer",
                    name: "Rohan Das",
                    src: img,
                  },
                  {
                    role: "Event Coordinator",
                    name: "Ananya Gupta",
                    src: img,
                  },
                  {
                    role: "Technical Head",
                    name: "Kunal Verma",
                    src: my_pic,
                  },
                  {
                    role: "Design Head",
                    name: "Priya Mehta",
                    src: img,
                  },
                  {
                    role: "Public Relations Officer",
                    name: "Aditya Rao",
                    src: img,
                  },
                ]}
              ></FocusCards>
              <Contact />
            </section>
          </div>
          <Footer></Footer>
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
