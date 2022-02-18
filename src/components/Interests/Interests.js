import React from "react";
import { fakeInterests } from "../../dummy-data";
import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests-row">
      {fakeInterests.map((interest) => (
        <div className="interest-column">
          <div className="interest-card">
            <h2>Interest {interest.id}</h2>
            <div className="card-field">
              <strong>NAME:</strong>
              <p>{interest.name}</p>
            </div>
            <div className="card-field">
              <strong>Type: </strong>
              <p>{interest.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Interests;
