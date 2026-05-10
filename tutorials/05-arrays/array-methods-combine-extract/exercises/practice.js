/**** COMMON ARRAY METHODS: COMBINING & EXTRACTING ELEMENTS: PRACTICE ****/

/*
    Practice manipulating mission data using extraction 
    and combination tools.
*/

/** EXERCISE 1: FLEET MERGER **/

let scoutShips = ["S-1", "S-2"];
let commandShips = ["C-1"];

/*
    TODO: Create a new array 'totalFleet' by merging scoutShips 
    and commandShips using .concat(). Print the result.
*/

/** EXERCISE 2: DATA SAMPLING **/

let sensorReadings = [0.5, 0.8, 1.2, 3.5, 4.0];

/*
    TODO: Extract the middle three readings (index 1, 2, and 3) 
    using .slice() and store them in a variable named 'midRange',
    then print the result. Remember the "not including" rule 
    for the end index!
*/

/** EXERCISE 3: SURGICAL REMOVAL **/

let inventory = ["Water", "Rations", "Old Boots", "Oxygen"];

/*
    TODO: "Old Boots" (index 2) don't belong in the inventory. 
    Use .splice() to remove exactly 1 item at index 2, then
    print the array to see the changes.
*/

/** EXERCISE 4: THE UPGRADE **/

let fuelTypes = ["Liquid", "Solid", "Chemical"];

/*
    TODO: Use .splice() to replace "Solid" (index 1) with "Plasma",
    then print the array to see the changes.
*/

// Great job!
