import React from "react";
import "./portfolio.css";
import BB from "../../assets/Barmy_British_Food.png";
import News from "../../assets/pokefight.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: BB,
      stack: [
        "React",
        "JavaScript",
        "CSS",
        "NodeJS",
        "ExpressJS",
        "ElephantSQL",
        "Contentful",
        "Netlify",
        "Render",
      ],
      title: "Cookbook",
      description:
        "A simple cookbook of British Food recipes that shows the different recipes according to the categories. Self Built API using ElephantSQL. See my backend code, which is running on Render, here: https://cookbook-backend-v6le.onrender.com/api/recipes ",
      github: "https://github.com/payalthummar/cookbook-frontend",
      demo: "https://cookbook-frontend-wd33.netlify.app/",
    },
    {
      id: 2,
      image: News,
      stack: ["React", "CSS", "NodeJS", "ExpressJS", "Netlify", "Render"],
      title: "Pokefight",
      description:
        "A simple pokefight game which shows the score after playing from an API according to the winner I have set as my interests. Live Demo coming soon! See my backend code, which is running on Render, here: https://pokefight-backend-rs0x.onrender.com.",
      github: "https://github.com/payalthummar/Pokefight-Frontend",
      demo: "https://pokefight-frontend-mernstack.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <p>Have a look</p>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
        {projects &&
          projects.map((p) => (
            <article className="portfolio-item">
              <div className="portfolio__item-image">
                <a href={p.demo} target="_blank" rel="noreferrer">
                  <div className="image">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="portfolio-image"
                    />
                  </div>
                </a>
              </div>
              <ul className="stack">
                {p.stack.map((s) => {
                  return (
                    <li>
                      <i class="fa fa-wrench" aria-hidden="true"></i>
                      {s}
                    </li>
                  );
                })}
              </ul>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="buttons">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn cta"
                >
                  Github
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary cta"
                >
                  Live Demo
                </a>{" "}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
