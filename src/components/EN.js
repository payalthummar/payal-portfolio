import "../App.css";
import React from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Experience from "./experience/Experience";
import Portfolio from "./porfolio/Portfolio";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function EN() {
    return (
        <>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default EN;
