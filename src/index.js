function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "4839c9d6ef9d2edb7882a93cafff0cd8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function refreshWeather(response) {
  document.querySelector(".weather-app-city").innerHTML = response.data.name;
  document.querySelector(
    ".weather-app-temperature-container .weather-app-value"
  ).innerHTML = Math.round(response.data.main.temp);
  document.querySelector(".weather-app-details").innerHTML = `${formatDate(
    new Date()
  )}, ${response.data.weather[0].description}`;
  document.querySelector(
    ".weather-app-humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector(".weather-app-wind").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )} km/h`;
  document.querySelector(
    ".weather-app-icon"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png" alt="${response.data.weather[0].description}" />`;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

document
  .querySelector("#search-form")
  .addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
