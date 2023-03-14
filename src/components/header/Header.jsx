import React from "react";
import CTA from "./CTA";
import Socials from "./Socials";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="buttons-lang">
          <button className="language btn btn-primary btnEn">
            <a href="/en"> EN</a>
          </button>{" "}
          <button className="language btn btn-primary btnDe">
            {" "}
            <a href="/"> DE</a>
          </button>
        </div>
        <div>
          {" "}
          <p>Hello I'm</p>
        </div>

        <h1>Payal Thummar</h1>
        <h2 className="capitals">FULLSTACK WEB DEVELOPER</h2>
        <CTA />

        {/* <div className="img">
                  <img src={color} alt=""></img>
                </div> */}
        <Socials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
