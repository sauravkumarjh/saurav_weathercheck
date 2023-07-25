
let weather = {
  apiKey: "fcf8baa66eea9027e7fff19b0e20c9a5",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("Please Enter Correct City Name,NO weather found for same..");
          throw new Error("Please Enter Correct City Name, NO weather found for same....");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;

    let imagePath;
    if (description.includes("rain")) {
      imagePath = "./photos/rain.gif";
    } else if (description.includes("cloud")) {
      imagePath = "./photos/cloudy.gif";
    } else if (description.includes("haze")) {
      imagePath = "./photos/foggy.gif";
    } else if (description.includes("snow")) {
      imagePath = "snow.gif";
    } else if (description.includes("smoke")) {
      imagePath = "./photos/smoke.gif";
    } else if (description.includes("sunny") || description.includes("clear")) {
      imagePath = "./photos/sun.gif";
    } else {
      imagePath = "./photos/sunrise.gif";
    }
    document.querySelector(".icon").src = imagePath;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".temprature1").innerText = temp + "°C";
    document.querySelector(".temprature0").innerText = (Math.random()*((temp+2)-(temp-2))+(temp-2)).toFixed(2) + "°C";
    document.querySelector(".temprature2").innerText = (Math.random()*((temp+2)-(temp-2))+(temp-2)).toFixed(2) + "°C";
    document.querySelector(".temprature3").innerText = (Math.random()*((temp+2)-(temp-2))+(temp-2)).toFixed(2) + "°C";
    document.querySelector(".temprature4").innerText = (Math.random()*((temp+2)-(temp-2))+(temp-2)).toFixed(2) + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Delhi");


const today = new Date();


const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const monday = new Date(today);
monday.setDate(monday.getDate() + 2);

const tuesday = new Date(today);
tuesday.setDate(tuesday.getDate() + 3);


document.getElementById("fivedays").querySelectorAll(".days")[0].textContent = formatDate(yesterday);
document.getElementById("fivedays").querySelectorAll(".days")[1].textContent = formatDate(today);
document.getElementById("fivedays").querySelectorAll(".days")[2].textContent = formatDate(tomorrow);
document.getElementById("fivedays").querySelectorAll(".days")[3].textContent = formatDate(monday);
document.getElementById("fivedays").querySelectorAll(".days")[4].textContent = formatDate(tuesday);


function formatDate(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateNum = date.getDate();
  return ` ${month} ${dateNum}`;
}
