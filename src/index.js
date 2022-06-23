/* let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let city = prompt("Enter a city");
city = city.toLowerCase().trim();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let celsiusTemprature = Math.round(temperature);
  let fahrenheitTemperature = Math.round(temperature * 1.8 + 32);
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${celsiusTemprature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity} %`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
 */
function formatDate(date) {
  let currentDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = currentDays[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
let currentDate = document.querySelector("#current-time");
let now = new Date();
currentDate.innerHTML = formatDate(now);

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function searchCity(city) {
  let apiKey = "40bcef58e511d97cbfeb1c45d1bb99a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
function searchLocation(position) {
  let apiKey = "40bcef58e511d97cbfeb1c45d1bb99a3";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", handleSubmit);
/* function convertToC() {
  let temperatureF = document.querySelector("#temperature");
  temperatureF.innerHTML = 18;
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToC);

function convertToF() {
  let temperatureC = document.querySelector("#temperature");
  temperatureC.innerHTML = 64;
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToF);
 */
searchCity("Mykolaiv");
