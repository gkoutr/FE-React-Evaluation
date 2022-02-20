import React from "react";
import { Link } from "react-router-dom";
import { fakeSkills } from "../../dummy-data";
import Card from "../UI/Card";
const Skills = () => {
  return (
    <div className="skills-row">
      {fakeSkills.map((skill) => (
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
