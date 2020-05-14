//function Football (soccer) {
fetch(`https://www.scorebat.com/video-api/v1/`)
.then(function(response) {
return response.json()
}).then(function(json) {
// json is just a JavaScript Object
console.log(json)
})
    

// It is a simple array of objects

/* Free API for Football (Soccer) Videos!
We decided to make all our video data accessible to everyone! You can now access the embed codes of all the goals and highlights from a number of football leagues and tournaments including the Premier League, Champions League, La Liga, Serie A, Bundesliga and many more in a free JSON feed.

Endpoint
You can retrieve the highlights and goals of the latest football matches in JSON format from the following endpoint:
 */

/* Returns	string
Values: "home", "away"
array
Example: [ "awJo6rH...",... ]

Returns	object
Example: "myTripID1024", "2014-10-31T22:42:00.000Z", "2016-12-31T23:59:59.000Z"
Parameters	
trip_id	A user-defined string identifying the trip
estimated_arrival_window_begin	A timestamp in ISO 8601 format.
Must be greater than NOW.
estimated_arrival_window_end	A timestamp in ISO 8601 format.
Must be greater than estimated_arrival_window_begin.
https://developers.nest.com/reference/api-structure
 */
/* fetch('http://api.icndb.com/jokes/random/3')
.then(function(response) {
    return response.json()
})
.then(function(json) {
    // json is just a JavaScript Object
    console.log(json)
}) */