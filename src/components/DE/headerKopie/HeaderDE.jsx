import React from "react";
import CTA from "./CTADE";
import Socials from "./SocialsDE";
import "../../header/header.css";

const HeaderDE = () => {
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
          <p>Hallo, Ich bin</p>
        </div>
        <h1>Payal Thummar</h1>
        <h2 className="capitals">FULLSTACK-WEB-ENTWICKLERIN</h2>
        <CTA />
        {/* <div className="img">
                  <img src={color} alt=""></img>
                </div> */}
        <Socials />
        <a href="#contact" className="scroll__down">
          Runterscrollen
        </a>
      </div>
    </header>
  );
};

export default HeaderDE;
