const APIkey = 'bd401b2a40e7bc2def1d1a1a4c4b37d8';
let cityName = "svalbard"
let units = "metric"
const unitCheckBox = document.querySelector("#metric")
let weatherData = {};
const btn = document.getElementById("search-btn");
const textBox = document.getElementById("location-input")

const image = document.getElementById("preview-image")

// weather card items
const CityNameNode = document.querySelector(".cityname");
const country = document.querySelector(".country")
const temperature = document.querySelector(".temp")
const max = document.querySelector(".max")
const min = document.querySelector(".min")
const feelsLike = document.querySelector(".feels-like")
const windSpeed = document.querySelector(".w-speed")
const body = document.querySelector("body")

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
      await updateBackground()    
}

function updateCurrentWeather(){
    CityNameNode.textContent = weatherData.name;
    temperature.textContent = weatherData.main.temp;
    country.textContent = weatherData.sys.country;
    max.textContent = weatherData.main.temp_max
    min.textContent = weatherData.main.temp_min
    feelsLike.textContent = weatherData.main.feels_like
    windSpeed.textContent = weatherData.wind.speed
    image.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
}

function updateBackground(){
   let icon = weatherData.weather[0].icon;
   console.log(icon)
    
   switch (icon) {
       case "01d":
           
           body.setAttribute("class","clear-sky-day-bg")
           break;
        case "01n":
            body.setAttribute("class","clear-sky-nite-bg")
            break;
        case "02d": 
        case "03d":
        case "04d":
            body.setAttribute("class","clouds-day-bg")
            break;
        case "02n": 
        case "03n":
        case "04n":
            body.setAttribute("class","clouds-nite-bg")  
            break;
        case "09d": 
        case "09n":
        case "10n":
        case "10d":
            body.setAttribute("class","rain-bg")    
            break;
        case "11d": 
        case "11n":
            body.setAttribute("class","thunder-bg")
            break;
        case "13d": 
        case "13n":
            body.setAttribute("class","winter-wonderland-bg")                 
            break;
    //    default:
    //        break;
   }
}