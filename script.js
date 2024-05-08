const searchInp = document.getElementById("search__inp");
const submitBtn = document.getElementById("submit__btn");
const weatherImg = document.getElementById("weather__img");
const weatherCelcius = document.getElementById("weather__celcius");
const city = document.getElementById("city");
const humidity_percentage = document.getElementById("humidity_percentage");
const humidity_title = document.getElementById("humidity_title");
const wind_speed_speed = document.getElementById("wind__speed-speed");
const wind_speed_title = document.getElementById("wind__speed-title");

async function getWeatherInfo(query) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?q=${query}&key=bc59696cf30f4bc9a9572444240805`
  );

  const result = await res.json();

  humidity_percentage.textContent = result.current.humidity + "%";
  wind_speed_speed.textContent = result.current.wind_kph + "km/h";
  city.textContent = result.location.name;
  weatherCelcius.textContent = Math.round(result.current.temp_c) + "°C";
  weatherImg.src = result.current.condition.icon;
}

submitBtn.addEventListener("click", () => {
  const searchValue = searchInp.value;
  if (!searchValue) return;

  getWeatherInfo(searchValue);
});
