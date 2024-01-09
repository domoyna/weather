function searchCity(city) {
let apiKey = "5bd9to1c7af4e6e64c1939040db1b36a"
let apiUrl =  "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}"
}
 
function handleSearchSubmit (event) {
    event.preventDefault ();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value ;
    }
    let searchFormElement = document.querySelector("#search-form");
    searchFormElement.addEventListener("submit",handleSearchSubmit);