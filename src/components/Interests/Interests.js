import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fakeInterests } from "../../dummy-data";
import Card from "../UI/Card";
import "./Interests.css";

const Interests = () => {
  const [interests, setInterests] = useState(fakeInterests);
  return (
    <div className="interests-row">
      {interests.map((interest) => (
        <Link key={interest.id} to={{ pathname: `/interest/${interest.id}`, state: { interest: interest}}}>
          <Card key={interest.id} data={interest} name="Interest" />
        </Link>
      ))}
    </div>
  );
};

export default Interests;
