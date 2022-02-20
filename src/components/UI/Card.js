import React from "react";
import './Card.css';
const Card = (props) => {
    const data = props.data;
    const name = props.name;
  return (
    <div className="card-column">
      <div className="card">
        <h2>{name} {data.id}</h2>
        <div className="card-field">
          <strong>NAME:</strong>
          <p>{data.name}</p>
        </div>
        <div className="card-field">
          <strong>Type: </strong>
          <p>{data.type}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
