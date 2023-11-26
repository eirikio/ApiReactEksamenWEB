import { createContext, useState, useEffect } from "react";
import DriverService from "../services/DriverService";

export const DriversContext = createContext(null);

export const DriversProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);

  const getDriversURL = () => {
    const driversURL = DriverService.driverControllerURL();
    return driversURL;
  };

  useEffect(() => {
    setTimeout(() => {
      getDriversFromService();
    }, 1000);
  }, []);

  const getDriversFromService = async () => {
    try {
      const driversFromService = await DriverService.getAll();
      setDrivers(driversFromService);
    } catch (error) {
      console.log("Error getting drivers:", error);
    }
  };

  const getById = async (id) => {
    try {
      const driverById = await DriverService.getById(id);
      return driverById;
    } catch (error) {
      console.log(`Error getting driver by id. ID: ${id}:`, error);
    }
  };

  const getByName = async (name) => {
    try {
      const driverByName = await DriverService.getByName(name);
      return driverByName;
    } catch (error) {
      console.log(`Error getting driver by name. NAME: ${name}:`, error);
    }
  };

  const postNewDriver = async (newDriver, image) => {
    try {
      const result = await DriverService.postNewDriver(newDriver, image);
      setDrivers(result);
    } catch (error) {
      console.log("Error adding new driver:", error);
    }
  };

  const editDrivers = async (driversToUpdate) => {
    try {
      await DriverService.putDriver(driversToUpdate);
    } catch (error) {
      console.log("Error editing drivers:", error);
    }
  };

  const deleteById = async (id) => {
    try {
      await DriverService.deleteDriver(id);
      getDriversFromService();
    } catch (error) {
      console.log(`Error deleting driver by id. ID: ${id}:`, error);
    }
  };

  return (
    <DriversContext.Provider
      value={{
        drivers,
        getDriversURL,
        getById,
        getByName,
        postNewDriver,
        editDrivers,
        deleteById,
      }}
    >
      {children}
    </DriversContext.Provider>
  );
};
