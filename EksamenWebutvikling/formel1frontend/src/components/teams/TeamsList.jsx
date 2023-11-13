import { useState, useEffect } from "react";
import TeamService from "../../services/TeamService";
import TeamsItem from "./TeamsItem";

const TeamsList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeamsFromService();
  });

  const getTeamsFromService = async () => {
    try {
      const teamData = await TeamService.getAll();

      setTeams(teamData);
    } catch (error) {
      console.error("Error fetching teams: ", error);
    }
  };

  const getTeamsJSX = () => {
    const teamsJSX = teams.map((_teams, i) => (
      <TeamsItem
        key={i}
        title={_teams.manufacturer}
        driver1={_teams.driver1}
        driver2={_teams.driver2}
      />
    ));
    return teamsJSX;
  };

  return (
    <section className="text-center">
      <h3 className="mt-2 text-4xl font-bold">Formel 1 Teams</h3>
      <p className="mt-2 italic">Number of teams: {teams.length}</p>
      <section>{getTeamsJSX()}</section>
    </section>
  );
};

export default TeamsList;
