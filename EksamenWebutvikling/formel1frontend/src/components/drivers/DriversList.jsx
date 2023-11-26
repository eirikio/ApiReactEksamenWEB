import { useContext, useState } from "react";
import DriversItem from "./DriversItem";
import { DriversContext } from "../../contexts/DriversContext";

const DriversList = () => {
  const { drivers, getById, getByName, getDriversURL } =
    useContext(DriversContext);

  const [searchedId, setSearchedId] = useState("");
  const [searchedName, setSearchedName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getURLFromContext = () => {
    const URL = getDriversURL();
    return URL;
  };

  const handleIdSearch = async () => {
    try {
      const results = drivers.filter(
        (driver) => driver.id.toString() === searchedId,
      );

      setSearchResults(results || []);
    } catch (error) {
      console.error("Error fetching driver by name:", error);
    }
  };

  const getDriversJSX = (driversToRender) => {
    const driversJSX = driversToRender.map((_drivers, i) => (
      <div
        key={i}
        className="mx-auto grid w-72 grid-cols-1 border border-black"
      >
        <div className="flex justify-center">
          <img
            src={`${getURLFromContext()}/images/${_drivers.image}`}
            alt=""
            width="200px"
          />
        </div>
        <DriversItem
          id={_drivers.id}
          name={_drivers.name}
          age={_drivers.age}
          nationality={_drivers.nationality}
        />
      </div>
    ));
    return driversJSX;
  };

  return (
    <section className="text-center">
      <h3 className="mt-2 text-4xl font-bold">Drivers list</h3>
      <p className="mt-2 italic">Number of drivers: {drivers.length}</p>

      <div className=" ml-8 flex flex-row gap-10 text-left">
        <div className="mb-5 w-full">
          <label>Search for a driver: </label>
          <input
            onChange={(e) => setSearchedName(e.target.value)}
            value={searchedName}
            name="name"
            type="text"
            className="border border-black"
          />
          <button
            // onClick={handleSearch}
            className="rounded border border-black pl-2 pr-2"
          >
            Search
          </button>
        </div>
        <div className="ml-16 w-full">
          <label>Search for a driver ID: </label>
          <input
            onChange={(e) => setSearchedId(e.target.value)}
            value={searchedId}
            name="id"
            type="text"
            className="border border-black"
          />
          <button
            onClick={handleIdSearch}
            className="rounded border border-black pl-2 pr-2"
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {getDriversJSX(searchResults.length > 0 ? searchResults : drivers)}
      </div>
    </section>
  );
};

export default DriversList;
