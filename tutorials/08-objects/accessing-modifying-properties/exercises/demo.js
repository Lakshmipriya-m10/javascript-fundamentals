/**** ACCESSING & MODIFYING PROPERTIES ****/

/** EXAMPLE 1 - DOT VS BRACKET BASICS **/

const cargoBay = {
	manifestId: "CB-04",
	"containment-status": "SECURE",
	tonnage: 120,
};

// DEMO: Use dot notation to modify the tonnage
cargoBay.tonnage = 150;

// DEMO: Use dot notation to add a technician property

// DEMO: Use dot notation to form a sentence using properties of the object
// and log it to the console.
console.log(cargoBay);
// DEMO: Use bracket notation to update the containment status
cargoBay["containment-status"] = "INSECURE";
// DEMO: Use bracket notation to print an alert about the containment status
console.log(cargoBay);


/** EXAMPLE 2 - DYNAMIC VARIABLE LOOKUPS **/

const engineCore = {
	temperature: 3200,
	pressure: 150,
	radiation: 12,
};

let statRequested = "pressure";

// DEMO: What happens if we try to use dot notation here?
console.log(`Dynamic Dot Notation Check: ${engineCore.statRequested}`);
// DEMO: Use the dynamic key to get the stat
console.log(`Dynamic Bracket Notion check : ${engineCore[statRequested]}`);
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
