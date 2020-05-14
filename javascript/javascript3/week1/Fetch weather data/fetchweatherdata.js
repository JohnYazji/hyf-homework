// First call to the weather api
// 20191226130933
// https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=444a3b2f16a817108e1b3d2d56c75c32

/* {
    "coord": {
      "lon": 12.57,
      "lat": 55.69
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 277.18,
      "feels_like": 272.68,
      "temp_min": 275.93,
      "temp_max": 278.15,
      "pressure": 1021,
      "humidity": 75
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.6,
      "deg": 320
    },
    "clouds": {
      "all": 5
    },
    "dt": 1577362118,
    "sys": {
      "type": 1,
      "id": 1575,
      "country": "DK",
      "sunrise": 1577345941,
      "sunset": 1577371257
    },
    "timezone": 3600,
    "id": 2618425,
    "name": "Copenhagen",
    "cod": 200
  }
 */

  // Fetch weather data from a city


  //var x = document.getElementById("myBtn");
  //var x = document.createElement("INPUT");
  
 /* function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "button");
    x.setAttribute("value", "Click me");
    document.body.appendChild(x);
  }  */
  /* function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  } */
 
  
  
  function fetchData(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=444a3b2f16a817108e1b3d2d56c75c32")
    .then(response => response.json())
    .then(data => {
      console.log(fetchData)
      renderData(fetchData)
    })
  }
  
const button = document.getElementById("fetch-data")
.addEventListener('click', fetchData) 




//  https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=444a3b2f16a817108e1b3d2d56c75c32