import axios from "axios";

const DriverService = (() => {
  const driversController = "http://localhost:5277/api/drivers";
  const imageUploadController = "http://localhost:5277/api/imageUpload";

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

  const postNewDriver = async (newDriver, image) => {
    const result = await axios.post(driversController, newDriver);

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
