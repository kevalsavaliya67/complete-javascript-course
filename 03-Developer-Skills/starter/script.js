// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// var minTemperature = Infinity,
//   maxTemperature = -Infinity;
// for (let tmp of temperature) {
//   if (typeof tmp === "number") {
//     minTemperature = Math.min(minTemperature, tmp);
//     maxTemperature = Math.max(maxTemperature, tmp);
//   }
// }

// console.log(maxTemperature - minTemperature);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(temperatures) {
  let res = "";
  let i = 1;

  for (let t of temperatures) {
    res += `... ${t}ºC in ${i} days `;
  }
  res += "...";

  return res;
}

let temperatures = [17, 21, 23];

console.log(printForecast(temperatures));
