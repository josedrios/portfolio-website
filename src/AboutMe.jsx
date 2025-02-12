import * as React from "react";
import Info from "./info.json";

import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaJava,
  FaPython,
  FaSass,
  FaNodeJs,
  FaGitAlt,
  FaJsSquare,
  FaNpm,
} from "react-icons/fa";
import { SiMysql, SiCplusplus } from "react-icons/si";

function AboutMe() {
  return (
    <div className="content-item" id="about-me-section">
      <h1 id="about-me" className="content-item-header">
        About Me
      </h1>
      <p className="content-item-body">{Info.aboutme}</p>
      <h1 id="skills-header">Skills</h1>
      <div id="skills-section">
        <FaReact title="React.js" />
        <FaJsSquare title="JavaScript" />
        <FaNodeJs title="Node.js" />
        <SiMysql title="MySQL" />
        <FaGitAlt title="Git" />
        <FaNpm title="NPM" />
        <FaHtml5 title="HTML5" />
        <FaCss3 title="CSS3" />
        <FaSass title="SASS" />
        <FaPython title="Python" />
        <FaJava title="Java" />
        <SiCplusplus title="C++" />
      </div>
    </div>
  );
}
export default AboutMe;
