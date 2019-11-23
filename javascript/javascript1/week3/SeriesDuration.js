
const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]
//to add a new series to the list
seriesDurations.push({title: 'La Casa de papel',days: 1,hours: 2, minutes:50});

console.log(seriesDurations)

// convert 80 years to minutes = 80 * 365 * 24 * 60 = (42,048,000 mints)
const eightyYearsInMints= 80*365*24*60; 
console.log(eightyYearsInMints);
totalTimeSpentInSeries = 0;

// we need to convert the duration of each series into minutes.So I'll use "for loop" for that.
for ( let i = 0; i<seriesDurations.length; i++){
    const daysInMinutes =  seriesDurations[i].days *24*60; 
    const hoursInMinutes = seriesDurations[i].hours *60;
    const totalDaysInMintues = daysInMinutes + hoursInMinutes + seriesDurations[i].minutes; 

    const percentage = totalDaysInMintues / eightyYearsInMints * 100;
    const round3num = percentage.toFixed(3);
    totalTimeSpentInSeries = totalTimeSpentInSeries + round3num;

    console.log(seriesDurations[i].title + " " + totalDaysInMintues + " minutes");
    console.log("The percentage of " + seriesDurations[i].title +" " + round3num + "%");
    
    
}
//I tried to sum all percentages together but I couldn't figure out what the issue.
console.log(('In total that is '),  totalTimeSpentInSeries, ('% of my life'));
