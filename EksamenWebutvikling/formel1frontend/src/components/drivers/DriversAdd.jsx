import { useState, useEffect } from "react";
import DriverService from "../../services/DriverService";

const DriversAdd = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState(null);

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
    DriverService.postNewDriver(newDriver, image);
  };

  return (
    <section>
      <h3>Register a new driver</h3>
      <div>
        <label>Drivers name:</label>
        <input
          className="border"
          name="name"
          onChange={handleChange}
          type="text"
        />
        <div>
          <label>Drivers Age:</label>
          <input
            className="border"
            name="age"
            onChange={handleChange}
            type="number"
          />
        </div>
        <div>
          <label>Drivers nationality:</label>
          <input
            className="border"
            name="nationality"
            onChange={handleChange}
            type="text"
          />
        </div>
      </div>
      <div>
        <label>Drivers image:</label>
        <input name="image" onChange={handleChange} type="file" />
      </div>
      <input onClick={saveDrivers} type="button" value="Save driver" />
    </section>
  );
};

export default DriversAdd;
