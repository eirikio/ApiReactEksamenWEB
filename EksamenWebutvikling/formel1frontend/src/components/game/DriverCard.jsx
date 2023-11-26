import React from "react";

const DriverCard = ({ id, name, age, nationality, onSelect }) => {
  return (
    <article className="driver-card grid grid-cols-2 border">
      <div className="driver-info">
        <h3>{name}</h3>
      </div>
      <button onClick={() => onSelect(id)}>Select</button>
    </article>
  );
};

export default DriverCard;
