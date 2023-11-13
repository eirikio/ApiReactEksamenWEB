import { useState, useEffect } from "react";
import DriverService from "../../services/DriverService";
import DriversItem from "./DriversItem";

const DriversList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    try {
      const driverData = await DriverService.getAll();

      setDrivers(driverData);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  const getDriversJSX = () => {
    const driversJSX = drivers.map((_drivers, i) => (
      <div key={i} className="border border-black w-72 grid grid-cols-1 mx-auto">
          <div className="flex justify-center">
        <img src={`http://localhost:5277/images/${_drivers.image}`} alt="" width="200px" />
        </div>
      <DriversItem
        id={_drivers.id}
        title={_drivers.name}
        age={_drivers.age}
        nationality={_drivers.nationality}
      />

      </div>
    ));
    return driversJSX;
  };
//
  return (
    <section className="text-center">
      <h3 className="mt-2 text-4xl font-bold">Drivers list</h3>
      <p className="mt-2 italic">Number of drivers: {drivers.length}</p>
      <section className="grid grid-cols-5 gap-5">{getDriversJSX()}</section>
    </section>
  );
};

export default DriversList;
