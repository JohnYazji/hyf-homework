
/* {
"Club Name": "Real Madrid",
"Fans No.": "50 Million",
"Location": "Madrid",
"Best Player": "Cristiano Ronaldo",
"Stadium": "Santiago Bernabéu",
"manger": "Florentino Pérez",
"Players Name": ["Ramos", "Modric", "Marcello"],
"Trophies": {
    "The Best Club of the 20th Century": 1,
    "European Cups": 13,
    "FIFA Club World Cups": 7,
    "European Super Cups": 4,
    "UEFA Cups": 2,
    "Ligas": 33,
    "Copas del Rey": 19,
    "trophies in series": [2018, 2017, 2016]
},
"Best Club": true,
"identity": null
}
 */

const data = `{

    "Club Name": "Real Madrid",
    "Fans No.": "50 Million",
    "Location": "Madrid",
    "Best Player": "Cristiano Ronaldo",
    "Stadium": "Santiago Bernabéu",
    "manger": "Florentino Pérez",
    "PlayersName": ["Ramos", "Modric", "Marcello"],
    "Trophies": {
        "The Best Club of the 20th Century": 1,
        "European Cups": 13,
        "FIFA Club World Cups": 7,
        "European Super Cups": 4,
        "UEFA Cups": 2,
        "Ligas": 33,
        "Copas del Rey": 19,
        "trophies in series": [2018, 2017, 2016]
    },
    "Best Club": true,
    "identity": null
    }`
const jsondata = JSON.parse(data)
console.log(jsondata);
console.log(jsondata.PlayersName);
console.log(jsondata.Trophies);

