function refreshWeather(response) {
  document.querySelector(".weather-app-city").innerHTML = response.data.city;

  const date = new Date(response.data.time * 1000);
  const formattedDate = formatDate(date);
  const weatherDescription = response.data.condition.description;

  document.querySelector(".weather-app-details").innerHTML = `
        ${formattedDate}, ${weatherDescription}
        <br />
        Humidity: <strong class="weather-app-humidity">${
          response.data.temperature.humidity
        }%</strong>, 
        Wind: <strong class="weather-app-wind">${Math.round(
          response.data.wind.speed
        )} km/h</strong>
    `;

  document.querySelector(".weather-app-value").innerHTML = `${Math.round(
    response.data.temperature.current
  )}`;
  document.querySelector(
    ".weather-app-icon"
  ).innerHTML = `<img src="${response.data.condition.icon_url}" alt="${weatherDescription}" />`;
}
let apiKey = "ee423b4ece3bcf60d2o6712a2te2a47";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";

  fetch('https://api.shecodes.io/v1/wx/conditions/current?apiKey=ee423b4ece3bcf60d2o6712a2te2a47&language=en-US')
  .then(response => response.json())
  .then(data => {
    console.log(Current temperature: ${data.temperature}°);
  })
  .catch(error => console.error('Error fetching the weather data:', error));

axios.get(apiUrl).then(displayTemperature);
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}
