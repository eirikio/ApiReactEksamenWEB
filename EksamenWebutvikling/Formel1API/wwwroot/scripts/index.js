const showcaseField = document.querySelector(".showcase__section");

const getAllDrivers = async () => {
  try {
    const result = await axios.get("http://localhost:5277/api/drivers");
    showDrivers(result.data);
  } catch (err) {
    console.log(err);
  }
};

const showDrivers = (driverArray) => {
  driverArray.forEach((driver) => {
    showDriver(driver);
  });
};

const showDriver = (driver) => {
  let htmlTxt = "";
  htmlTxt = `

  <article class="showcase__item">
  <div>
    <p>Driver: ${driver.name}</p>
    <p>Age: ${driver.age}</p>
    <p>Nationality: ${driver.nationality}</p>
    <img src="http://localhost:5277/images/${driver.image}" width="200px"/>
</article>
                `;
  showcaseField.innerHTML += htmlTxt;
};

(() => {
  getAllDrivers();
})();
