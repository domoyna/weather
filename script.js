function handleSearchSubmit(event) {
    event.preventDefault();
let searchInputt = document.querySelector("#search-form-input");
let cityElement = document.querySelector("weather-app-city");
cityElement.innerHTML = searchInput.value;

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);