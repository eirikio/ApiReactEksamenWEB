import { useState, useContext } from "react";
import { DriversContext } from "../../contexts/DriversContext";
import DriversItem from "./DriversItem";
import DriversMiniList from "./DriversMiniList";

const DriversDelete = () => {
  const { deleteById, getById, drivers } = useContext(DriversContext);

  const [driverId, setDriverId] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const [listOfDrivers, setListOfDrivers] = useState("");

  const handleChange = (e) => {
    console.log("Input value:", e.currentTarget.value);
    setDriverId(e.currentTarget.value);
  };

  const handleGetDriver = async () => {
    console.log("Fetching driver for ID: ", driverId);
    try {
      const driver = await getById(driverId);
      console.log("Fetched Driver: ", driver);
      setSelectedDriver(driver);
    } catch (error) {
      console.log("Error fetching driver: ", error);
    }
  };

  const handleDeleteDriver = async () => {
    console.log("Deleting driver for ID: ", driverId);
    try {
      await deleteById(driverId);
      console.log("Driver deleted successfully");
      setStatusMessage(
        `Deleted ${selectedDriver.name} from the list successfully`,
      );

      setSelectedDriver(null);
      setDriverId("");

      setTimeout(() => {
        setStatusMessage("");
      }, 2000);
    } catch (error) {
      console.log("Error deleting driver: ", error);
    }
  };

  return (
    <section className="mt-10 flex w-full flex-row">
      <section className="ml-10">
        <DriversMiniList />
      </section>
      <div>
        <h1 className="mb-5 text-2xl font-bold">Delete a driver</h1>
        <label className="mr-3">Enter Driver's ID:</label>
        <div>
          <input
            className="mr-2 border border-black"
            onChange={handleChange}
            type="text"
            value={driverId}
          />
          <button
            className="border border-black bg-green-600 pl-2 pr-2 italic text-white hover:bg-green-500 active:bg-green-700"
            onClick={handleGetDriver}
          >
            Get driver
          </button>
          <button
            className="ml-2 border border-black bg-red-600 pl-2 pr-2 italic text-white hover:bg-red-500 active:bg-red-700"
            onClick={handleDeleteDriver}
          >
            Delete Driver
          </button>
        </div>
      </div>
      <div className="ml-10 flex justify-center">
        {selectedDriver && (
          <div>
            <h3 className="mt-10 text-3xl font-bold">Selected Driver:</h3>
            <DriversItem
              name={selectedDriver.name}
              age={selectedDriver.age}
              nationality={selectedDriver.nationality}
            />
            <img
              src={`http://localhost:5277/images/${selectedDriver.image}`}
              alt=""
              width="150px"
            />
          </div>
        )}
        {statusMessage && <p className="text-green-600">{statusMessage}</p>}
      </div>
    </section>
  );
};

export default DriversDelete;
