function refreshWeather(response) {
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
 let cityElement = document.querySelector("#city");
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity");
 let windSpeedElement = document.querySelector("#wind-speed");

descriptionElement.innerHTML=response.data.condition.description ;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h';
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
let apiKey = "5bd9to1c7af4e6e64c1939040db1b36a";
let apiUrl =  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(refreshWeather);
}
 
function handleSearchSubmit (event) {
    event.preventDefault ();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
   
   
    }
    let searchFormElement = document.querySelector("#search-form");
    searchFormElement.addEventListener("submit",handleSearchSubmit);
    