import React from "react";
import "./experience.css";

import { IconContext } from "react-icons";
import {
  SiBootstrap,
  SiFigma,
  SiJavascript,
  SiMaterialdesign,
  SiMysql,
  SiNodemon,
  SiPhp,
  SiPhpmyadmin,
  SiPostman,
} from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";

const Experience = () => {
  const blocks = {
    Frontend: [
      "Vanilla JavaScript",
      "React",
      "Tailwind",
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
    ],
    Backend: ["Node JS", "Express JS", "MongoDB", "PostgreSQL", "MySQL"],
    Methodologies: ["Git", "Scrum", "UI/UX Design", "Pair Programming"],
    Tools: ["Figma", "Github", "AWS amplify"],
  };

  const getSkills = (obj) => Object.keys(obj);
  console.log(getSkills(blocks));
  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__skillset">
          <h3>Technologies</h3>
          <div className="skills">
            <IconContext.Provider value={{ size: "3em" }}>
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiReact />
              <SiFigma />
              <SiTailwindcss />
              <SiBootstrap />
              <SiNodedotjs />
              <SiMysql />
              <SiPostman />
              <SiPhp />
              <SiPhpmyadmin />
              <SiPostgresql />
              <SiExpress />
              <SiMongodb />

              <SiGit />
            </IconContext.Provider>
          </div>
          {/* {getSkills(blocks).map((skill) => (
            <ul className="experience__list">
              {blocks[skill].map((s) => (
                <li key={skill} className="experience__li">
                  <i className="fa fa-check-circle" aria-hidden="true"></i>

                  <span>{s}</span>
                </li>
              ))}
            </ul>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
