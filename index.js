const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=a4f4b554b159b6462992e1965a2eb19f&units=metric&q=";

async function getmyweather() {
  //To get the input value from HTML page
  let myInput = document.getElementById("cityinput").value;
  console.log("myInput", myInput);

  // var image =

  let myData = await fetch(`${apiURL}${myInput}`);

  console.log(`${apiURL}${myInput}`);

  var data = await myData.json();
  console.log("data", data);

  if (data.cod != 404) {
    document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "images/clouds.png";
    } else if (data.weather[0].main == "Haze") {
      document.querySelector(".weather-icon").src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      console.log("");
      document.querySelector(".weather-icon").src = "images/rain.png";
    }

    document.querySelector(".weather").style.display = "block";
  } else {
    alert("No city found!.... Please enter the right one :)");
  }
}
