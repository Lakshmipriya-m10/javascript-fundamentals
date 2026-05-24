/**** INTRODUCTION TO OBJECTS: PRACTICE ****/

/*
    Practice defining object structures and understanding 
    how reference pointers operate within memory.
*/
function headingDesign(heading,border)
{
    let headingUpperCase = heading.toUpperCase();
    let boarder = "*********************";
    console.log(`${boarder}\n ${headingUpperCase}\n ${boarder}`);

}
/** EXERCISE 1: THE PILOT PROFILE **/
/*
    TODO: Declare an object literal saved in a constant named 'pilotProfile'.
    Give it four properties:
    - name (String)
    - rank (String)
    - flightHours (Number)
    - isActive (Boolean)

    Assign values to each of the four properties.
    
    Log the object to the console.
*/
headingDesign("1.The pilot profile")

const pilotProfile = {
    name: "Daisy",
    rank: "Senior First Officer (SFO)",
    flightHours: 20,
    isActive: true,
};
console.log(`Pilot Details : `, pilotProfile);


/** EXERCISE 2: MATERIAL CONFIGURATION **/

/*
    TODO: Create an object named 'hullSpecs' that can be described as follows:
    - made of a material that is a titanium alloy
    - has a thickness of 15 centimeters
*/

headingDesign("2.Material configuation")
const hullSpec ={
    meterial: "Titanium alloy",
    thickness: 15 ,

}
console.log("Metrial Configuation",hullSpec);

/** EXERCISE 3: REFERENCE CLONING CHECK **/
headingDesign("3.Reference cloning check")

const originalCore = { stabilityScore: 100 };
const shadowCore = originalCore;
console.log(shadowCore === originalCore);

/*
    TODO: If we alter a property inside 'shadowCore', predict what 
    happens to 'originalCore'. 
    
    Then uncomment the two lines below and observe the output.
*/
 shadowCore.stabilityScore = 45;
console.log(`Original Core Stability: ${originalCore.stabilityScore}`);
