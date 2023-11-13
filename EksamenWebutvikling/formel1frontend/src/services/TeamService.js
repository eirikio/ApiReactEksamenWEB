import axios from "axios";

const TeamService = (() => {
  const teamsController = "http://localhost:5277/api/teams";

  const getAll = async () => {
    try {
      const result = await axios.get(teamsController);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const getById = async (id) => {
    try {
      const result = await axios.get(`${teamsController}/${id}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const postNewTeam = async () => {
    try {
      const result = await axios.post(teamsController, newTeam);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const deleteTeam = async (id) => {
    try {
      const result = await axios.delete(`${teamsController}/${id}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const putTeam = async (editedTeam) => {
    try {
      const result = await axios.put(teamsController, editedTeam);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  return { getAll, getById, postNewTeam, deleteTeam, putTeam };
})();

export default TeamService;
