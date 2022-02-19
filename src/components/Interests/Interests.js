import React from "react";
import { Link } from "react-router-dom";
import { fakeInterests } from "../../dummy-data";
import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests-row">
      {fakeInterests.map((interest) => (
        <Link to={{ pathname: `/interest/${interest.id}`, state: { interest: interest}}}>
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
        </Link>
      ))}
    </div>
  );
};

export default Interests;
