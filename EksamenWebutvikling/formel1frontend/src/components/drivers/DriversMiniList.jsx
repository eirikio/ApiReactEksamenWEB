import { useContext, useEffect, useState } from "react";
import DriversMiniItem from "./DriversMiniItem";
import { DriversContext } from "../../contexts/DriversContext";

const DriversMiniList = () => {
  const { drivers, getById, getByName } = useContext(DriversContext);

  const [driverId, setDriverId] = useState("");
  const [driverName, setDriverName] = useState("");

  const getDriversJSX = () => {
    const driversJSX = drivers.map((_drivers, i) => (
      <div key={i} className="mx-auto w-72 ">
        <DriversMiniItem id={_drivers.id} name={_drivers.name} />
      </div>
    ));
    return driversJSX;
  };
  //
  return (
    <section className="mr-10 mt-5 h-[500px] overflow-y-auto overflow-x-hidden">
      {getDriversJSX()}
    </section>
  );
};

export default DriversMiniList;
