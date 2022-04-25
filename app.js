const APIkey = 'bd401b2a40e7bc2def1d1a1a4c4b37d8';
let cityName = "London"
let units = "metric"
const unitCheckBox = document.querySelector("#metric")
let weatherData = {};
const btn = document.getElementById("search-btn");
const textBox = document.getElementById("location-input")

const metricSwitch = document.getElementById("metric");

// weather card items
const CityNameNode = document.querySelector(".cityname");
const country = document.querySelector(".country")
const temperature = document.querySelector(".temp")
const max = document.querySelector(".max")
const min = document.querySelector(".min")
const feelsLike = document.querySelector(".feels-like")
const windSpeed = document.querySelector(".w-speed")


getWeatherData()



btn.addEventListener("click", function(){
    cityName = textBox.value;
    
    getWeatherData();
    
})

unitCheckBox.addEventListener("change", ()=>{
    if(units == "metric"){
        units = "imperial"
    }else{
        units = "metric";
    }
})


async function getWeatherData(){
    console.log(cityName)
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=${units}`;
    let response = await fetch( Url, {mode: "cors"})
      weatherData  = await response.json();
      await updateCurrentWeather()     
}

function updateCurrentWeather(){
    CityNameNode.textContent = weatherData.name;
    temperature.textContent = weatherData.main.temp;
    country.textContent = weatherData.sys.country;
    max.textContent = weatherData.main.temp_max
    min.textContent = weatherData.main.temp_min
    feelsLike.textContent = weatherData.main.feels_like
    windSpeed.textContent = weatherData.wind.speed
}