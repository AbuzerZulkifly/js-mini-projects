const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "1376fe1b2fe627ceb50403bc9be5838e";
let weatherImg = document.querySelector(".weather-icon");
let mainData = document.querySelector(".sub-container");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  let data = await response.json()
  console.log(data);
  if (data.cod == '404' || data.cod == '400') {
    
    mainData.innerHTML = "City Does Not Exist";
    mainData.style.margin = "5px"
    setTimeout(function() {
      mainData.innerHTML = "";
  }, 2000);
  }
  else {
   document.querySelector(".sub-container").innerHTML = `
     <div class="weather-info">
      <img class="weather-icon" src="../projects/images/weather-app-images/${data.weather[0].main}.png" alt="">
      <div>
        <h1><span class="condition">${data.weather[0].main}</span></h1>
        <h1><span class="temp">${Math.round(data.main.temp)}°C</span></h1>
        <h1><span class="temp">Feels Like ${Math.round(data.main.feels_like)}°C</span></h1>
        <h2><span class="city">${data.name}</span><span class="country">, ${data.sys.country}</span></h2>     
      </div>
    </div>

    <div class="weather-condition-container">
      <div class="weather-condition">
        <img src="./images/weather-app-images/humidity.png">
        <div>
          <p><span class="humidity">${data.main.humidity}%</span></p>
          <p>Humidity</p>
        </div>
      </div>

      <div class="weather-condition">
        <img src="./images/weather-app-images/wind.png">
        <div>
          <p><span class="wind">${data.wind.speed}KM/H</span></p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  `
  // saveData();
}
//img path should be directed according to the html page

//   switch (data.weather[0].main) {
//     case "Clear":
//       weatherImg.src = "./images/weather-app-images/clear.png"
//       break;
//     case "Clouds":
//       weatherImg.src = "./images/weather-app-images/clouds.png"
//       break;
//     case "Rain":
//       weatherImg.src = "./images/weather-app-images/rain.png"
//       break;
//     case "Drizzle":
//       weatherImg.src = "./images/weather-app-images/drizzle.png"
//       break;
//     case "Mist":
//       weatherImg.src = "./images/weather-app-images/mist.png"
//       break;
//     case "Snow":
//       weatherImg.src = "./images/weather-app-images/clear.png"
//       break;
//   }
 }

let cityName = document.querySelector(".search-bar")
let btnSearch = document.querySelector(".btnsearch")


cityName.addEventListener('keydown', (event) =>{
  if(event.key === 'Enter') {
    checkWeather(cityName.value)
    console.log(cityName.value)
    // saveData();
  }
})

btnSearch.addEventListener('click', ()=>{
    checkWeather(cityName.value)
   
})

// function saveData() {
//   localStorage.setItem("data", mainData.innerHTML)
// }

// function showData() {
//   mainData.innerHTML = localStorage.getItem("data");
// }

// showData();