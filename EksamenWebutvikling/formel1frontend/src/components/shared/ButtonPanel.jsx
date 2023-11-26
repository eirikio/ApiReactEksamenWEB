import { useState } from "react";
import DriversAdd from "../drivers/DriversAdd";
import DriversEdit from "../drivers/DriversEdit";
import DriversDelete from "../drivers/DriversDelete";
import { render } from "react-dom";

const ButtonPanel = () => {
  const [selectedFunction, setSelectedFunction] = useState("");

  const handleButtonChange = (e) => {
    setSelectedFunction(e.currentTarget.value);
  };

  const renderSelectedButton = () => {
    switch (selectedFunction) {
      case "addDriver":
        return <DriversAdd />;
      case "editDriver":
        return <DriversEdit />;
      case "deleteDriver":
        return <DriversDelete />;
      default:
        return null;
    }
  };

  return (
    //? The main content of the Register Page is rendered in here
    <section className="h-screen bg-black">
      <div className="mx-auto flex h-28 w-[1100px] items-center justify-center gap-40 border border-white bg-stone-950">
        <div className="rounded bg-gray-600 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 p-1">
          <button
            onClick={handleButtonChange}
            value="addDriver"
            className="cursor-f1 rounded bg-gray-900 p-5 font-bold text-white hover:bg-gray-800 active:bg-black"
          >
            Add new driver
          </button>
        </div>

        <div className="rounded bg-gray-600 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 p-1">
          <button
            onClick={handleButtonChange}
            value="editDriver"
            className="rounded bg-gray-900 p-5 font-bold text-white hover:bg-gray-800 active:bg-black"
          >
            Edit a driver
          </button>
        </div>

        <div className="rounded bg-gray-600 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 p-1">
          <button
            onClick={handleButtonChange}
            value="deleteDriver"
            className="rounded bg-gray-900 p-5 font-bold text-white hover:bg-gray-800 active:bg-black"
          >
            Delete an entry
          </button>
        </div>
      </div>
      <section className="mx-auto mt-2 flex w-[1100px] justify-center border border-white bg-stone-950 text-white xl:h-[640px] 2xl:h-[750px]">
        {renderSelectedButton()}
      </section>
    </section>
  );
};

export default ButtonPanel;
