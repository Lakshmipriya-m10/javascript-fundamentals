/**** ARRAYS OF N LENGTH: PRACTICE SOLUTION ****/

/*
    Use the Array constructor and .fill() to prepare 
    the ship's data structures.
*/

/** EXERCISE 1: THE CARGO GRID **/

/*
    Create an array named 'storageUnits' with capacity 
    for 8 items, all initialized to the string "Empty".
*/
const storageUnits = Array(8).fill("Empty");
console.log(storageUnits);

/** EXERCISE 2: CALIBRATION DATA **/

/*
    Create an array named 'sensorReadings' with 
    capacity for 10 items, all initialized to the number 0.
*/
const sensorReadings = Array(10).fill(0);
console.log(sensorReadings);

/** EXERCISE 3: PASSENGER MANIFEST **/

/*
    Create an array named 'passengerList' with 
    capacity for 5 items, all initialized to null.
*/
const passengerList = Array(5).fill(null);
console.log(passengerList);

/** EXERCISE 4: SECURITY CLEARANCE **/

/*
    Create an array named 'lockdownStatus' with 
    capacity for 4 items, all initialized to the boolean true.
*/
const lockdownStatus = Array(4).fill(true);
console.log(lockdownStatus);

// Great job!
