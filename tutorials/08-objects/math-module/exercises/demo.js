/**** THE MATH MODULE AND THE SPREAD OPERATOR ****/
function heading(cleartitile)
{
let title = cleartitile.toUpperCase();
 let border =`-------------------------------`;
 console.log (`${border}\n ${title}\n ${border} `);

}

/** EXAMPLE 1 - CORE MATH METHODS **/

// DEMO: Use Math.floor() and Math.ceil() to force rounding the variable down and up,
// storing each value in new variables.

// DEMO: Log a sentence using the two variables

heading("core math methods");
let navigationDistance = 452.87;

let roundDownNo = Math.floor(navigationDistance);
let roundUpNo = Math.ceil(navigationDistance);

console.log(`Rounding the variable down of ${navigationDistance} to ${roundDownNo}.`);
console.log(`Rounding the variable down of ${navigationDistance} to ${roundUpNo}.`);

heading("random radiation");
let randamNo = Math.random() *100;
let roundRandomNo =Math.round(randamNo);
console.log(`Print Random No From 0 To 100 : ${roundRandomNo}`);

// DEMO: Generate a random radiation reading between 0 and 100, then round it,
// storing both in separate variables.

// DEMO: Log a sentence using the two variables

heading("unpacking arrays with spread");
/** EXAMPLE 2 - UNPACKING ARRAYS WITH SPREAD **/

const hullStressSensors = [42, 89, 115, 64, 73];

// DEMO: Try finding the max using the array directly, and log the result.

// DEMO: Use the spread operator to pass the elements to Math methods
// that will find both the max and the min, then log them.

let maxNo = Math.max(...hullStressSensors);
console.log(`Max number of ${hullStressSensors} is : ${maxNo}`); 
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
