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
import anirudhPic from "./assests/profile - Anirudh Rakonda.jpg";
import sejalPic from "./assests/IMG_20250331_162123 - Sejal Rao.jpg";
import rahulPic from "./assests/IMG_2597-01 - Kaveti Rahul.jpeg";
import balajiPic from "./assests/IMG_20230930_101700~2 - M. Balaji Bhargav.jpg";
import anushriPic from "./assests/IMG_20241205_214934 - 23311A6207 (A) Anushri.jpg";
import dhritiPic from "./assests/IMG-20240519-WA0047 - dhriti vuppala.jpg";
import bharathPic from "./assests/IMG20250323140818~2 - bharath reddy.jpg";
import tejaswiPic from "./assests/photo-1 - tejaswi nimmaluri.jpg";
import snehithPic from "./assests/IMG_20250331_095907 - Snehith Nomula.jpg";
import srinivasPic from "./assests/WhatsApp Image 2025-03-31 at 16.51.20_4644b459 - 22311A6259 (A) Srinivas.jpg";
import hazrathPic from "./assests/IMG_20250331_113120 - Hazrath Ali - Hazrath Ali.jpg";
import karthikPic from "./assests/IMG_20240729_204112_875 - Karthik Chakradhar.jpg";
import varnanPic from "./assests/IMG20240804132422~3 - Varnan Reddy.jpg";
import prasannaPic from "./assests/IMG_20250331_213937 - Bairi Prasannadevi.jpg";
import anushkaPic from "./assests/IMG_20250401_175604 - Anushka Sunil Itkepelliwar.jpg";

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
                  { role: "President", name: "Anirudh Rakonda", src: anirudhPic },
                  { role: "Vice President", name: "Sejal Chandrashekhar", src: sejalPic },
                  { role: "Gen Sec", name: "Kaveti Rahul", src: rahulPic },
                  { role: "Technical Lead", name: "Abdul Farhath", src: my_pic },
                  { role: "Technical Lead", name: "M BALAJI BHARGAV", src: balajiPic },
                  { role: "Technical Lead", name: "Chittawar Anushri", src: anushriPic },
                  { role: "Marketing", name: "Dhriti Vuppala", src: dhritiPic },
                  { role: "Treasury", name: "Bharath Reddy", src: bharathPic },
                  { role: "Designing Lead", name: "Nimmaluri Tejaswi", src: tejaswiPic },
                  { role: "Internal Lead", name: "Nomula Snehith", src: snehithPic },
                  { role: "External Lead", name: "Kokkula Srinivas", src: srinivasPic },
                  { role: "Documentation", name: "Md Hazrath Ali", src: hazrathPic },
                  { role: "Creative Lead", name: "Karthik Chakradhar", src: karthikPic },
                  { role: "Publicity Lead", name: "Varnan Reddy", src: varnanPic },
                  { role: "Volunteers Lead", name: "Prasanna Devi", src: prasannaPic },
                  { role: "Organising", name: "Itkepelliwar Anushka", src: anushkaPic },
                ]}
              />
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
