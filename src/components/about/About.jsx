import React from "react";
import "./about.css";
import bw from "../../assets/payal.JPG";

const About = () => {
  return (
    <section id="about">
      <p>Get to know</p>
      <h2>About me</h2>
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
              <h3>Experienced</h3>

              <small> 2+ years professional experience as a Developer. </small>
            </article>

            <article className="about__card">
              {" "}
              <i className="fa fa-trophy" aria-hidden="true"></i>
              <h3>Dedicated</h3>
              <small>
                Passionate about providing cutting edge web solutions.
              </small>
            </article>

            <article className="about__card">
              <i className="fa fa-trophy" aria-hidden="true"></i>{" "}
              <h3>Competent</h3>
              <small>Always curious, always improving my skills. </small>
            </article>
          </div>

          <p className="about-me__text">
            Hi there. I am a Full Stack Developer living in Germany. I am
            currently looking for a company where I can build my future. <br />{" "}
            <br />
            I'm a recent graduate from WBS Coding School's Full-Stack Developer
            bootcamp, where I gained hands-on experience in building web
            applications using modern technologies. Throughout the bootcamp, I
            worked on several challenging projects that helped me hone my skills
            in front-end and back-end development. I'm proficient in using
            technologies such as HTML, CSS, JavaScript, React, Node.js, Express,
            and MongoDB, to name a few. I'm passionate about coding and
            constantly strive to improve my skills by learning new technologies
            and frameworks. I'm also a strong believer in teamwork and
            collaboration, and I always look forward to working with other
            developers and designers to build high-quality applications.
            <br /> <br />I have experience working with a range of front-end and
            back-end technologies, including React, Node.js, Express.js and
            MongoDB.
            <br /> <br />I have a strong understanding of web development
            concepts such as RESTful APIs and cloud deployment.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
