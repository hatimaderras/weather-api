const apiKey = "8284a3439165e88b685562c873e08637";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weathericon=document.querySelector(".weather-icon")

const searchBox = document.querySelector(".search-bar"); 
const searchBtn = document.querySelector(".btn-primary");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds"){
        weathericon.src = "assests/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weathericon.src = "assests/clear.png";
    }
     else if (data.weather[0].main == "Rain"){
        weathericon.src = "assests/clear.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weathericon.src = "assests/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weathericon.src = "assests/mist.png";
    }

}   

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


