import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Contact from "./pages/Contact"; 

function App() {
  return (
    <div className="bg-background text-text font-jetbrains">
      <Navbar />
      <div className="pt-20"> 
        <section id="home">
          <Landing />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="events">
          <Events />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;