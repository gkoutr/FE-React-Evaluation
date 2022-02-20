import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fakeSkills } from "../../dummy-data";
import Card from "../UI/Card";
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState(fakeSkills);

  return (
    <div className="skills-row">
      {skills.map((skill) => (
        <Link
          key={skill.id}
          to={{
            pathname: `/skill/${skill.id}`,
            state: { skill: skill },
          }}
        >
          <Card key={skill.id} data={skill} name="Skill" />
        </Link>
      ))}
    </div>
  );
};

export default Skills;
