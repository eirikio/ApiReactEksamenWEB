import React, { useState } from "react";
import DriversList from "../drivers/DriversList";
import RacesList from "../races/RacesList";
import TeamsList from "../teams/TeamsList";

const ListSelector = () => {
  const [selectedList, setSelectedList] = useState("drivers");

  const handleDropdownChange = (event) => {
    setSelectedList(event.target.value);
  };

  const renderSelectedList = () => {
    switch (selectedList) {
      case "drivers":
        return <DriversList />;
      case "teams":
        return <TeamsList />;
      case "races":
        return <RacesList />;
      default:
        return null;
    }
  };

  return (
    <div>
      <label htmlFor="listSelector">Select a list:</label>
      <select
        id="listSelector"
        value={selectedList}
        onChange={handleDropdownChange}
      >
        <option value="drivers">Drivers</option>
        <option value="teams">Teams</option>
        <option value="races">Races</option>
      </select>

      {renderSelectedList()}
    </div>
  );
};

export default ListSelector;
