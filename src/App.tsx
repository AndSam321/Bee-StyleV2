import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Bee's Style Food Truck | University of Arkansas";
  }, []);

  return (
    <>
      {" "}
      {/* React Fragment to wrap everything */}
      <div className="font-sans">
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <Testimonials />
        <Location />
        <Footer />
      </div>
      <Analytics />
    </>
  );
}

export default App;
