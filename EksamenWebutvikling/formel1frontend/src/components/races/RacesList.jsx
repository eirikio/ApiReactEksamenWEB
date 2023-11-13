import { useState, useEffect } from "react";
import RaceService from "../../services/RaceService";
import RacesItem from "./RacesItem";

const RacesList = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    getRacesFromService();
  }, []);

  const getRacesFromService = async () => {
    try {
      const raceData = await RaceService.getAll();

      setRaces(raceData);
    } catch (error) {
      console.error("Error fetching races:", error);
    }
  };

  const getRacesJSX = () => {
    console.log(races);
    const racesJSX = races.map((_races, i) => (
      <RacesItem
        key={i}
        title={_races.winnerName}
        winnerTime={_races.winnerTime}
        grandPrix={_races.grandPrix}
      />
    ));
    return racesJSX;
  };

  return (
    <section className="text-center">
      <h3 className="mt-2 text-4xl font-bold">Races</h3>
      <p className="mt-2 italic">Number of races: {races.length}</p>
      <section>{getRacesJSX()}</section>
    </section>
  );
};

export default RacesList;
