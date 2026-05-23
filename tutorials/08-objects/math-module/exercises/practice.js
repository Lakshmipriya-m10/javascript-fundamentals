/**** THE MATH MODULE AND THE SPREAD OPERATOR: PRACTICE ****/
function heading (title,isStarboarder)
{
    let clearTitle = title.toUpperCase();
    let border = isStarboarder ? "***************************************" : "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^" 
    console.log(`${border}\n ${title}\n ${border}`);
}
/*
    Practice using global calculations and data spreading 
    to analyze navigational vectors.
*/
heading("1.Manual Steering Locks",true)
/** EXERCISE 1: MANUAL STEERING LOCKS **/

let fineAdjustmentVector = -14.62;

let adjusmentVectorAbsValue = Math.abs(fineAdjustmentVector);
console.log(`Absolute Value Of :${fineAdjustmentVector} is ${adjusmentVectorAbsValue}.`);
let CLEAN_STEERING_ANGLE = Math.round(adjusmentVectorAbsValue);
console.log(`Round nearest integer of ${fineAdjustmentVector} is ${CLEAN_STEERING_ANGLE}`);

/*
    TODO: Use 'Math.abs' to extract the absolute value of 'fineAdjustmentVector' 
    (removing the negative sign). 
    Then, pass that absolute value into 'Math.round' to find the nearest integer.
    Store the final result in a constant named 'CLEAN_STEERING_ANGLE' and log it.
*/
heading("2.Sector range scanner",false)
/** EXERCISE 2: SECTOR RANGE SCANNER **/

const cargoBayTemperatures = [18, 22, 14, 31, 19, 25];

let HighestTemp = Math.max(...cargoBayTemperatures);
console.log(`⚠️ Cargo bay Highest temperature  : ${HighestTemp}⚠️`);


/*
    TODO: Use 'Math.max' along with the spread operator to pull the highest temperature 
    out of the 'cargoBayTemperatures' array. 
    Store it in a variable named 'highestTemp' and log it using a template literal.
*/

/** EXERCISE 3: FUEL POD BALANCER **/
heading("3.Fuel pod balancer",true)

const fuelPodWeights = [450, 412, 498, 380];

/*
    TODO: Use 'Math.min' with the spread operator to identify the lightest fuel pod.
    Subtract that lowest weight value from the highest possible capacity constant (500).
    Log how many metric tons are needed to top off that emptiest tank.
*/
let lightestFuelPod = Math.min(...fuelPodWeights);
let needFuel = 500 -lightestFuelPod;
console.log(`🔔 ${needFuel} metric tons are needed to top off that emptiest tank.🔔 `);
