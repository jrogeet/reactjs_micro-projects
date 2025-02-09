import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Project1.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "lightgrey",
  },
  {
    skill: "TailwindCSS",
    level: "intermediate",
    color: "lightblue",
  },
  {
    skill: "PHP",
    level: "advanced",
    color: "lavender",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "lightyellow",
  },
  {
    skill: "Laravel",
    level: "beginner",
    color: "red",
  },
  {
    skill: "ReactJS",
    level: "beginner",
    color: "cyan",
  },
];

function Project1() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="cropped-pic.jpeg" alt="John Rogee Turqueza" />
  );
}

function Intro() {
  return (
    <div>
      <h1 className="project1-name">John Rogee Turqueza</h1>
      <p className="data">
        Aspiring software engineer, has an eye for details, design, aesthetics
        and is an advocate of Grit.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    // <div className="skill-list">
    //   <Skill skill="HTML+CSS" emoji="🗒️" color="lightgrey" />
    //   <Skill skill="TailwindCSS" emoji="🍃" color="lightblue" />
    //   <Skill skill="PHP" emoji="⚙️" color="lavender" />
    //   <Skill skill="JavaScript" emoji="⭐" color="lightyellow" />
    // </div>
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default Project1;
