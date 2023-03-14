import React from "react";
import "../../about/about.css";
import bw from "../../../assets/payal.JPG";

const AboutDE = () => {
  return (
    <section id="about">
      <p>Mehr herausfinden</p>
      <h2>Über mich</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={bw} alt="portrait" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <i className="fa fa-trophy" aria-hidden="true"></i>
              <h3>Erfahren</h3>

              <small> 2+ berufserfahrung als Entwicklerin </small>
            </article>

            <article className="about__card">
              {" "}
              <i className="fa fa-trophy" aria-hidden="true"></i>
              <h3>Motiviert</h3>
              <small>
                Ich brenne für die Entwicklung modernster Web-Lösungen.
              </small>
            </article>

            <article className="about__card">
              <i className="fa fa-trophy" aria-hidden="true"></i>{" "}
              <h3>Kompetent</h3>
              <small>Immer neugierig, immer lernbegeistert. </small>
            </article>
          </div>

          <p className="about-me__text">
            Ich bin Full-Stack-Entwicklerin und wohne in Deutchland. Ich bin
            derzeit auf der Suche nach einem Unternehmen, in dem ich meine
            Zukunft aufbauen kann.
            <br /> <br />
            Ich habe kürzlich das Full-Stack Developer Bootcamp der WBS Coding
            School absolviert. Bootcamp, in dem ich praktische Erfahrungen in
            der Entwicklung von Web Web-Anwendungen mit modernen Technologien.
            Während des Bootcamps habe ich arbeitete ich an mehreren
            anspruchsvollen Projekten, die mir halfen, meine Fähigkeiten in der
            Front-End- und Back-End-Entwicklung. Ich bin geübt im Umgang mit
            Technologien wie HTML, CSS, JavaScript, React, Node.js, Express, und
            MongoDB, um nur einige zu nennen. Ich programmiere leidenschaftlich
            gern und und bin ständig bestrebt, meine Fähigkeiten durch das
            Erlernen neuer Technologien und Frameworks. Außerdem glaube ich fest
            an Teamarbeit und Zusammenarbeit, und ich freue mich immer auf die
            Zusammenarbeit mit Entwicklern und Designern zusammenzuarbeiten, um
            hochwertige Anwendungen zu entwickeln.
            <br />
            <br />
            Ich habe Erfahrung in der Arbeit mit einer Reihe von Front-End- und
            Back-End-Technologien, einschließlich React, Node.js, Express.js und
            MongoDB.
            <br /> <br />
            Ich habe ein ausgeprägtes Verständnis für Webentwicklungskonzepte
            wie RESTful APIs und Cloud Deployment.
          </p>
          <a href="#contact" className="btn btn-primary">
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutDE;
