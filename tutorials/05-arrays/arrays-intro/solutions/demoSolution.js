/**** INTRODUCTION TO ARRAYS: SOLUTION ****/

/*
    An Array is a special type of variable that can hold a list of values. Instead of creating ten different variables for ten crew members, you can store them all in one place.

    Array Literals: We create arrays using square brackets [].

    Naming Practices: Since an array represents a collection, it is a best practice to name your variable with a plural noun (e.g., ships, planets, coordinates). This makes it obvious to anyone reading your code that the variable holds multiple items.

    Mixed Data: In JavaScript, an array can technically hold different types of data (strings, numbers, booleans) all at once, though usually, we try to keep them consistent for the sake of the "Mission."
*/

/** EXAMPLE 1 - DECLARING ARRAYS **/

// An empty array (ready for cargo)
let cargoHold = [];

// An array of strings
let crewMembers = ["Shepard", "Garrus", "Tali", "Liara"];

// An array of numbers (engine temperatures)
let coreTemps = [98.6, 102.4, 115.0];

/** EXAMPLE 2 - GOOD NAMING PRACTICES **/

// Bad: Not clear it's a list
let ship = ["Discovery", "Endeavour", "Atlantis"];

// Good: Plural name tells us exactly what to expect
let shuttleNames = ["Discovery", "Endeavour", "Atlantis"];

/** EXAMPLE 3 - MIXED DATA TYPES **/

// This is valid in JS, but not always useful without labels.
// We will learn about objects soon, where we can associate related
// information in a better way!
let planetData = ["Jupiter", 95, 143000, "-110°C", ["hydrogen", "helium"]];
// name, number of moons, diameter in km, average temperature, composition
