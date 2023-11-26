import { useContext, useState } from "react";
import { DriversContext } from "../../contexts/DriversContext";
import DriversItem from "./DriversItem";
import DriversMiniList from "./DriversMiniList";

const DriversEdit = () => {
  const { getById, editDrivers } = useContext(DriversContext);

  const [driverId, setDriverId] = useState("");
  const [driverToUpdate, setDriverToUpdate] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setDriverId(e.currentTarget.value);
        break;
      case "name":
        setDriverToUpdate({
          ...driverToUpdate,
          name: e.currentTarget.value,
        });
        break;
      case "age":
        setDriverToUpdate({
          ...driverToUpdate,
          age: e.currentTarget.value,
        });
        break;
      case "nationality":
        setDriverToUpdate({
          ...driverToUpdate,
          nationality: e.currentTarget.value,
        });
        break;
    }
  };

  const handleGetDriver = async () => {
    console.log("Fetching driver for ID: ", driverId);
    try {
      const driver = await getById(driverId);
      console.log("Fetched driver: ", driver);
      setDriverToUpdate(driver);
    } catch (error) {
      console.log("Error fetching driver: ", error);
    }
  };

  const saveChanges = () => {
    editDrivers(driverToUpdate);
    setStatusMessage("The driver has successfully been updated!...");

    setTimeout(() => {
      setStatusMessage("");
    }, 2000);
  };

  return (
    <section className="mt-10 flex w-full flex-row">
      <section className="ml-10">
        <DriversMiniList />
      </section>
      <div>
        <h3 className="text-2xl font-bold">Edit one of the drivers</h3>
        <div className="mt-5">
          <label>Enter ID of the driver you want to edit:</label>
          <div>
            <input
              className="mr-2 border"
              onChange={handleChange}
              type="number"
              name="id"
              value={driverId}
            />
            <button
              className="border border-black bg-green-600 pl-2 pr-2 italic text-white hover:bg-green-500 active:bg-green-700"
              onClick={handleGetDriver}
            >
              Get Driver
            </button>
          </div>
        </div>
        <div className="mt-4 flex w-40 flex-col">
          <label>Name:</label>
          <input
            className="border border-black"
            onChange={handleChange}
            type="text"
            name="name"
          />
        </div>
        <div className="mt-4 flex w-40 flex-col">
          <label>Age:</label>
          <input
            className="border border-black"
            onChange={handleChange}
            type="number"
            name="age"
          />
        </div>
        <div className="mt-4 flex w-40 flex-col">
          <label>Nationality:</label>
          <input
            className="border border-black"
            onChange={handleChange}
            type="text"
            name="nationality"
          />
        </div>
        <button
          className="mt-5 cursor-pointer rounded border border-black bg-blue-500 pb-2 pl-4 pr-4 pt-2 font-bold text-white hover:bg-blue-600 active:bg-blue-400"
          onClick={saveChanges}
        >
          Save
        </button>
      </div>
      <div className=" ml-36">
        {driverToUpdate && (
          <div>
            <DriversItem
              name={driverToUpdate.name}
              age={driverToUpdate.age}
              nationality={driverToUpdate.nationality}
            />
            <img
              src={`http://localhost:5277/images/${driverToUpdate.image}`}
              alt=""
              width="200px"
            />
          </div>
        )}
        {statusMessage && (
          <p className="absolute text-green-600">{statusMessage}</p>
        )}
      </div>
    </section>
  );
};

export default DriversEdit;
