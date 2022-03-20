let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence =  myWatchedSeries[0] + ", " + myWatchedSeries[1] + " and " + myWatchedSeries[2];

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

let changeThisIndex = myWatchedSeries.indexOf("the big bang theory");
myWatchedSeries.splice(changeThisIndex, 1, "friends");
myWatchedSeries.push("snow piercer");
myWatchedSeries.unshift("seinfeld");

changeThisIndex = myWatchedSeries.indexOf("black mirror");
myWatchedSeries.splice(changeThisIndex, 1);

console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);
