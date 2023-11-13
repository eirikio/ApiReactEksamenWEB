import axios from "axios";

const RaceService = (() => {
  const racesController = "http://localhost:5277/api/races";

  const getAll = async () => {
    try {
      const result = await axios.get(racesController);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const getById = async (id) => {
    try {
      const result = await axios.get(`${racesController}/${id}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const postNewRace = async () => {
    try {
      const result = await axios.post(racesController, newRace);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const deleteRace = async (id) => {
    try {
      const result = await axios.delete(`${racesController}/${id}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const putRace = async (editedRace) => {
    try {
      const result = await axios.put(racesController, editedRace);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  return { getAll, getById, postNewRace, deleteRace, putRace };
})();

export default RaceService;
