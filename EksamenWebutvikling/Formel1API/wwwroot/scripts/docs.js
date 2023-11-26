const getByIdBtn = document.querySelector(".get-by-id__button");

const driverController = "http://localhost:5277";

const getAllDrivers = async () => {
  try {
    const result = await axios.get(`${driverController}/api/drivers`);
    const jsonData = JSON.stringify(result.data, null, 2);
    const resultContainer = document.querySelector(
      ".get-all__result-container"
    );
    const getAllResult = resultContainer.querySelector(".get-all__result");

    getAllResult.innerHTML = `<pre> ${jsonData}</pre>`;
  } catch (err) {
    console.log(err);
  }
};

const getDriversById = async () => {
  let userIDInput = document.querySelector(".get-by-id__input");
  const userInput = userIDInput.value;

  try {
    const url = userInput
      ? `${driverController}/api/drivers/${userInput}`
      : `${driverController}/api/drivers/2`;
    const result = await axios.get(url);
    const jsonData = JSON.stringify(result.data, null, 2);
    const resultContainer = document.querySelector(
      ".get-by-id__result-container"
    );
    const getByIdResult = resultContainer.querySelector(".get-by-id__result");

    getByIdResult.innerHTML = `<pre>${jsonData}</pre>`;
  } catch (err) {
    console.log("error", err);
  }
};

const events = () => {
  getByIdBtn.addEventListener("click", getDriversById);
};

(() => {
  getAllDrivers();
  events();
})();
