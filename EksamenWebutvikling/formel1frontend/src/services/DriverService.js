import axios from "axios";

const DriverService = (() => {
  const driversController = "http://localhost:5277/api/drivers";

  const getAll = async () => {
    try {
      const result = await axios.get(driversController);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const getById = async (id) => {
    try {
      const result = await axios.get(`${driversController}/${id}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const postNewDriver = async () => {
    const result = await axios.post(driversController, newDriver);
    console.log(result);
    //? return result.data;
  };

  const deleteDriver = async (id) => {
    const result = await axios.delete(`${driversController}/${id}`);
    console.log(result);
    //? return result.data;
  };

  const putDriver = async (editedDriver) => {
    const result = await axios.put(driversController, editedDriver);
    console.log(result);
    //? return result.data;
  };

  return { getAll, getById, postNewDriver, deleteDriver, putDriver };
})();

export default DriverService;
