import React from "react";
import { fakeSkills } from "../../dummy-data";
const Skills = () => {
  return (
    <div>
      {fakeSkills.map((skill) => (
        <div className="skill-card">
          <h2>Skill {skill.id}</h2>
          <strong>NAME:</strong>
          <p>{skill.name}</p>
          <strong>Type: </strong>
          <p>{skill.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
