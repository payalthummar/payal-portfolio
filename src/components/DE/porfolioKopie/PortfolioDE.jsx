import React from "react";
import "../../porfolio/portfolio.css";
import BB from "../../../assets/Barmy_British_Food.png";
import News from "../../../assets/pokefight.png";

const PortfolioDE = () => {
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
        "Ein einfaches Kochbuch mit Rezepten der britischen Küche, das die verschiedenen Rezepte nach Kategorien anzeigt. Selbst entwickelte API mit ElephantSQL. Sehen Sie meinen Backend-Code, der auf Render läuft, hier: https://cookbook-backend-v6le.onrender.com/api/recipes ",
      github: "https://github.com/payalthummar/cookbook-frontend",
      demo: "https://cookbook-frontend-wd33.netlify.app/",
    },
    {
      id: 2,
      image: News,
      stack: ["React", "CSS", "NodeJS", "ExpressJS", "Netlify", "Render"],
      title: "Pokefight",
      description:
        "Ein einfaches Pokefight-Spiel, das den Punktestand nach dem Spiel von einer API anzeigt, entsprechend dem Gewinner, den ich als meine Interessen eingestellt habe. Live-Demo bald verfügbar! Sehen Sie meinen Backend-Code, der auf Render läuft, hier: https://pokefight-backend-rs0x.onrender.com.",
      github: "https://github.com/payalthummar/Pokefight-Frontend",
      demo: "https://pokefight-frontend-mernstack.netlify.app/",
    },
    // {
    //   id: 3,
    //   image: Zappys,
    //   stack: ["React", "JavaScript", "CSS", "emailjs", "jspdf", "Netlify"],
    //   title: "Zappys Math Generator",
    //   description:
    //     "Made for a teacher at a Toronto highschool, following her specifications and needs this app generates randomised math operations, giving the option to set the operation sign and to download a layouted PDF of the worksheet.",
    //   github: "https://github.com/roxibi/Zappys-Math-Generator",
    //   demo: "https://zappys.netlify.app/",
    // },
    // {
    //     id: 4,
    //     image: BB,
    //     title: "Bookbandits",
    //     description:
    //         "A book-sharing platform made easy: use your webcam to scan your books and add them to your public profile. Then browse and borrow books from other people's bookshelves!",
    //     github: "https://github.com/Tiefengnom/BBFront",
    //     demo: "https://bbookbandits.netlify.app/",
    // },
  ];
  return (
    <section id="portfolio">
      <h2>Meine Projekte</h2>

      <div className="container portfolio__container">
        {projects &&
          projects.map((p) => (
            <article className="portfolio-item">
              <div className="portfolio__item-image">
                <a href={p.demo} target="_blank" rel="noreferrer">
                  {" "}
                  <div className="image">
                    {" "}
                    <img
                      src={p.image}
                      alt="mockup website"
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

export default PortfolioDE;
