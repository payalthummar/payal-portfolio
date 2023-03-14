import React from "react";
import "./experience.css";

const Experience = () => {
  const blocks = {
    Frontend: [
      "Vanilla JavaScript",
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
    ],
    Backend: ["Node.js", "Express JS", "MongoDB", "PostgreSQL"],
    Methodologies: ["Git", "Scrum", "UI/UX Design", "Pair Programming"],
    Tools: ["Figma", "Github", "AWS amplify"],
  };

  const getSkills = (obj) => Object.keys(obj);
  console.log(getSkills(blocks));
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">
        {getSkills(blocks).map((skill) => (
          <div className="experience__skillset">
            <h3>{skill}</h3>
            <ul className="experience__list">
              {blocks[skill].map((s) => (
                <li key={skill} className="experience__li">
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
