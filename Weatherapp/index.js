const api = {
  key: "89c3802e8394122754261849577f311e",
  url: "https://api.openweathermap.org/data/2.5/weather?",
};
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
async function checkWeather(serach) {
  const response = await fetch(
    `${api.url}q=${serach}&units=metric&appid=${api.key}`
  );
  let data = await response.json();
  console.log(data);
  changeInformation(data);
  setIcon(data);
  setBackground(data);
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
searchbox.addEventListener("enter", () => {
  checkWeather(searchbox.value);
});
const changeInformation = (data) => {
  const city = document.querySelector("#city");
  const temperature = document.querySelector("#temp");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".windspeed");
  city.innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";
};

const setIcon = (data) => {
  const weatherIcon = document.querySelector(".weather-icon");
  const weather = data.weather[0].main;
  if (weather == "Clouds") {
    weatherIcon.src = "./assets/icons/cloud.png";
  } else if (weather == "Clear") {
    weatherIcon.src = "./assets/icons/clear.png";
  } else if (weather == "Rain") {
    weatherIcon.src = "./assets/icons/rain.png";
  } else if (weather == "Haze") {
    weatherIcon.src = "./assets/icons/haze.png";
  } else if (weather == "Snow") {
    weatherIcon.src = "./assets/icons/snow.png";
  } else if (weather == "Mist") {
    weatherIcon.src = "./assets/icons/mist.png";
  } else if (weather == "Smoke") {
    weatherIcon.src = "./assets/icons/smoke.png";
  } else if (weather == "Dust") {
    weatherIcon.src = "./assets/icons/dust.png";
  } else if (weather == "Fog") {
    weatherIcon.src = "./assets/icons/fog.png";
  } else if (weather == "Sand") {
    weatherIcon.src = "./assets/icons/sand.png";
  } else if (weather == "Ash") {
    weatherIcon.src = "./assets/icons/ash.png";
  } else if (weather == "Squall") {
    weatherIcon.src = "./assets/icons/squall.png";
  } else if (weather == "Tornado") {
    weatherIcon.src = "./assets/icons/tornado.png";
  }
  document.querySelector(".description").innerHTML = weather;
  document.querySelector(".weather").style.display = "block";
};
const setBackground = (data) => {
  const weatherIcon = document.querySelector("body");
  const weather = data.weather[0].main;
  if (weather == "Clouds") {
    weatherIcon.style.backgroundImage = "url('./assets/images/Cloudy.jpg')";
  } else if (weather == "Clear") {
    weatherIcon.style.backgroundImage = "url('./assets/images/Clear.jpg')";
  } else if (weather == "Rain") {
    weatherIcon.style.backgroundImage = "url('./assets/images/Rainy.jpg')";
  } else if (weather == "Haze") {
    weatherIcon.style.backgroundImage = "url('./assets/images/haze.jpg')";
  } else if (weather == "Snow") {
    weatherIcon.src = "./assets/images/snow.jpg";
  } else if (weather == "Mist") {
    weatherIcon.src = "./assets/images/mist.png";
  } else if (weather == "Smoke") {
    weatherIcon.src = "./assets/images/smoke.png";
  } else if (weather == "Dust") {
    weatherIcon.src = "./assets/images/dust.png";
  } else if (weather == "Fog") {
    weatherIcon.src = "./assets/images/fog.png";
  } else if (weather == "Sand") {
    weatherIcon.src = "./assets/images/sand.png";
  } else if (weather == "Ash") {
    weatherIcon.src = "./assets/images/ash.png";
  } else if (weather == "Squall") {
    weatherIcon.src = "./assets/images/squall.png";
  } else if (weather == "Tornado") {
    weatherIcon.src = "./assets/images/tornado.png";
  }
};
