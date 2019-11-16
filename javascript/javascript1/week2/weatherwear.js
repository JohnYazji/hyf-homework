

function clothesToWear (temperature) {

  if (temperature <= -5) {
    return "It's very cold.  You would wear gloves, scarf, sweater, coat, sneakers";
  }
  else if (temperature <= 4 && temperature > -4) {
    return "It's cold. Please be careful and wear a suitable clothes ";
  }
  else if (temperature <= 15 && temperature > 5) {
    return "It's not cold. You can wear spring clothes";
  }
  else if (temperature <= 25 && temperature > 16) {
    return "It's warm weather. It's recommended to wear shorts and a T-shirt";
  }
  else if (temperature <= 35 && temperature > 26) {
    return "Very hot weather.";
  }
  else {
    return "Wrong temperature";
  }
}
var clothesToWear = clothesToWear(12);
console.log(clothesToWear);
