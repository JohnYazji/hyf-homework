//1. Movies exercise
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(moviesData => {
        console.log(moviesData);

        const badMovies = moviesData.filter(movies => movies.rating < 4)
        console.log(badMovies);

        const badMovieSince2000 = badMovies.filter(movies => movies.year >= 2000)
        console.log(badMovieSince2000);

        const badMovieTitleSince2000 = badMovieSince2000.map(movies => movies.title)
        console.log(badMovieTitleSince2000);
    })

//********************************************* 
//2. Promise that resolves after set time
const promiseAfter = function(resolveAfter) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve("I am called asynchronously after 2 seconds")
          }, 2000);
        });
      }
      promiseAfter().then(message=>{
              console.log(message);
      })
//********************************************
//3. Rewrite time

// Rewrite time
function setTimeoutPromise(seconds) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, seconds)
        })
    }
    setTimeoutPromise(3000)
        .then(() => {
            console.log('Called after 3 seconds');
        });
    
    
    function getCurrentLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve);
            }
            else {
                reject('No location has been found')
            }
        })
    }
    getCurrentLocation()
        .then(location => {
            console.log(location);
        })
        .catch(error => {
            console.log(error);
        })

 
        //Fetching and waiting

fetch(`https://data.football-api.com/v3/competitions?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b
`)
.then(response => response.json())
.then(footBall => { 
 setTimeout(() => {
        console.log(footBall);
        }, 3000)
}) 


// Fetching and waiting by chaining

fetch('https://data.football-api.com/v3/competitions?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b')
    .then(response => response.json())
    .then(footBall => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(footBall)
            }, 3000)
        })
    })
    .then(all => {
        console.log(all);
    })
