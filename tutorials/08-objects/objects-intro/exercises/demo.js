/**** INTRODUCTION TO OBJECTS ****/
function heading (clearheading)
{
    let clearheadingUpperCase = clearheading.toUpperCase();
    let titleBoarder = "-----------------------------------";
    console.log(`${titleBoarder}\n ${clearheading}\n ${titleBoarder}`);
}
/** EXAMPLE 1 - DECLARATION & INITIALIZATION **/
// DEMO: Create a structured profile for a ship using Key-Value pairs
// DEMO: Print the object to the console

heading ("Declaration & Initialization")

let shipDetails = {
  name: "Ocean Explorer",
  type: "Cargo Ship",
  speed: 18, 
  crew: 120,
  isSailing: true
};
console.log(shipDetails);

/*
Trying to display keys and value separately
for (let keys in shipDetails)
{
    //let allKeys = keys;
console.log(`${keys}` );
console.log(`${shipDetails[keys]}`);
}
*/
/** EXAMPLE 2 - THE MEMORY REFERENCE PARADOX **/

const sectorA_Scanner = { oxygenLevel: 98 };
const sectorB_Scanner = { oxygenLevel: 98 };

// DEMO: Test if the two objects are equal

const scanner01 = sectorA_Scanner;

heading ("Memory reference paradox")

    console.log(`${sectorA_Scanner === sectorB_Scanner}`);

console.log(`${scanner01 === sectorA_Scanner}`);
// DEMO: Test if scanner01 is a clone/copy

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
