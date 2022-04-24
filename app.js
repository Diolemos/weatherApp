const APIkey = 'bd401b2a40e7bc2def1d1a1a4c4b37d8';
let cityName = "London"


let weatherData = {};
const btn = document.getElementById("search-btn");
const textBox = document.getElementById("location-input")

const metricSwitch = document.getElementById("metric");

// weather card items
const currentCityName = document.querySelector(".cityname");
const currentCountry = document.querySelector(".state");
const currentTemperature = document.querySelector(".temperature")




getWeatherData()



btn.addEventListener("click", function(){
    cityName = textBox.value;
    
    getWeatherData();
    
})




async function getWeatherData(){
    console.log(cityName)
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;
    let response = await fetch( Url, {mode: "cors"})
      weatherData  = await response.json();
      await updateCurrentWeather()     
}

function updateCurrentWeather(){
    currentCityName.textContent = weatherData.name;
    currentTemperature.textContent = weatherData.main.temp;
}