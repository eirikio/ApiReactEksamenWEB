import { useState, useEffect, useContext } from "react";
import { DriversContext } from "../../contexts/DriversContext";

const DriversAdd = () => {
  const { postNewDriver } = useContext(DriversContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState(null);

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "age":
        setAge(e.currentTarget.value);
        break;
      case "nationality":
        setNationality(e.currentTarget.value);
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
    }
  };

  const saveDrivers = () => {
    const newDriver = {
      name: name,
      age: age,
      nationality: nationality,
      image: image.name,
    };
    postNewDriver(newDriver, image);
    setStatusMessage(
      `${newDriver.name} has successfully been registered to the system`,
    );

    setTimeout(() => {
      setStatusMessage("");
    }, 2000);
  };

  return (
    <section className="w-[450px mt-10">
      <h3 className="text-2xl font-bold">Register a new driver</h3>
      <div className="mt-5">
        <div className="flex w-40 flex-col">
          <label>Name:</label>
          <input
            className="border border-black"
            name="name"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="mt-4 flex w-40 flex-col">
          <label>Age:</label>
          <input
            className="border border-black "
            name="age"
            onChange={handleChange}
            type="number"
          />
        </div>
        <div className="mt-4 flex w-40 flex-col">
          <label>Nationality:</label>
          <input
            className="border border-black"
            name="nationality"
            onChange={handleChange}
            type="text"
          />
        </div>
      </div>
      <div className="mt-4 flex w-40 flex-col">
        <label>Image:</label>
        <div className="w-56 bg-white">
          <input name="image" onChange={handleChange} type="file" />
        </div>
      </div>
      <button
        className="mt-5 cursor-pointer rounded border border-black bg-blue-500 pb-2 pl-4 pr-4 pt-2 font-bold text-white hover:bg-blue-600 active:bg-blue-400"
        onClick={saveDrivers}
      >
        Save
      </button>
      <div>
        {statusMessage && (
          <p className="absolute text-green-600">{statusMessage}</p>
        )}
      </div>
    </section>
  );
};

export default DriversAdd;
