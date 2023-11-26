import axios from "axios";

const DriverService = (() => {
  const driversController = "http://localhost:5277";
  const imageUploadController = "http://localhost:5277/api/imageUpload";

  const driverControllerURL = () => {
    const driversControllerURL = driversController;
    return driversControllerURL;
  };

  const getAll = async () => {
    try {
      const result = await axios.get(`${driversController}/api/drivers/`);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const getById = async (id) => {
    try {
      const result = await axios.get(`${driversController}/api/drivers/${id}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const getByName = async (name) => {
    try {
      const result = await axios.get(
        `${driversController}/api/drivers/GetByName/${name}`,
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const postNewDriver = async (newDriver, image) => {
    try {
      const result = await axios.post(
        `${driversController}/api/drivers/`,
        newDriver,
      );

      const formData = new FormData();
      formData.append("formFile", image);

      const uploadResult = await axios({
        url: imageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(uploadResult);

      formData.delete("formFile");
    } catch (error) {
      throw error;
    }
  };

  const deleteDriver = async (id) => {
    try {
      const result = await axios.delete(
        `${driversController}/api/drivers/${id}`,
      );
      console.log(result);
    } catch (error) {
      console.error(`Error deleting driver with id ${id}:`, error);
      throw error;
    }
  };

  const putDriver = async (editedDriver) => {
    try {
      const result = await axios.put(
        `${driversController}/api/drivers`,
        editedDriver,
      );
      console.log(result);
    } catch (error) {
      console.error("Error updating driver:", error);
      throw error;
    }
  };

  return {
    driverControllerURL,
    getAll,
    getById,
    getByName,
    postNewDriver,
    deleteDriver,
    putDriver,
  };
})();

export default DriverService;
