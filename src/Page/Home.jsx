import React from "react";
import Navbar from "../Commponants/Navbar/Navbar";
import Hero from "../Commponants/Hero/Hero";
import About from "../Commponants/About/About";
import Projects from "../Commponants/Projects/Projects";
import Contact from "../Commponants/Contact/Contact";
import Footer from "../Commponants/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
