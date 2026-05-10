/**** CONVERTING BETWEEN ARRAYS AND STRINGS ****/

/** EXAMPLE 1 - SPLITTING BY SPACES **/ 

let sentence = "Engage thrusters now";

// DEMO: Split the sentence into an array of three words (no spaces),
// then log the result.
let words = sentence.split(" "); 
console.log(words); // ["Engage", "thrusters", "now"]

/** EXAMPLE 2 - JOINING WITH HYPHENS **/ 

let dateParts = ["2026", "05", "01"];

// DEMO: Join the date parts using hyphens as the connector,
// then print the result.
let formattedDate = dateParts.join("-");
console.log(formattedDate); // "2026-05-01"

/** EXAMPLE 3 - THE ROUND TRIP (Clean & Rebuild) **/

let rawData = "oxygen,fuel,water,rations";

// 1. DEMO: Split into array to work with items.
let inventory = rawData.split(",");

// 2. DEMO: Add an item.
inventory.push("batteries");

// 3. DEMO: Join back into a pretty string for a report and log it.
let report = inventory.join(" | ");
console.log(report); // "oxygen | fuel | water | rations | batteries"

/** EXAMPLE 4 - METHOD CHAINING **/

let labels = ["pencils", "Pens", "erasERs", "MARKERS"];

// DEMO: Use method chaining to modify the elements in the array so that
// each element is in allcaps and all elements are in order 
// alphabetically. Store the new array in a variable and print it.

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
