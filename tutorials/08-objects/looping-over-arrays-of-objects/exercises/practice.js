/**** LOOPING OVER ARRAYS OF OBJECTS: PRACTICE ****/

/*
    Practice drilling into array-wrapped data structures to filter 
    and evaluate real-time system states.
*/

/** EXERCISE 1: ENVIRONMENT CHECKUP **/

const atmosphericScrubbers = [
	{ zone: "Command Deck", filterLifePercent: 88 },
	{ zone: "Engineering Bay", filterLifePercent: 32 },
	{ zone: "Crew Quarters", filterLifePercent: 14 },
];

for(let scrubber of atmosphericScrubbers){
    if(scrubber.filterLifePercent < 40)
    {
console.log(` 🔥 Warning! FilterLife Percent is less than 40 🔥 ${scrubber.zone} less ${scrubber.filterLifePercent} % `);
    } else
console.log(`Filter Core over 40% 👍`);

}
/*
    TODO: Use a 'for...of' loop to scan through the 'atmosphericScrubbers' array.
    Inside the loop, check if a scrubber's 'filterLifePercent' is less than 40.
    If it is, log a warning statement using a template literal:
    "MAINTENANCE REQ: [zone] filter core is critically low at [filterLifePercent]%!"
*/

/** EXERCISE 2: INTEL METRIC REPORTING **/

const targetDrones = [
	{ designation: "Drone-Alpha", threatScore: 4 },
	{ designation: "Drone-Beta", threatScore: 9 },
	{ designation: "Drone-Gamma", threatScore: 7 },
];
let sum = 0;

for(let i = 0;i < targetDrones.length ; i++)
{
    sum += targetDrones[i].threatScore;
}

let average = sum / targetDrones.length;
console.log (`Target grid composite average threat rating: ${average}`);

/*
    TODO: Write a standard 'for' loop using index tracking counters ('i') to scan the list.
    Calculate the average threat score of all targets combined.
    Steps:
    1. Declare a mutable sum variable before the loop.
    2. Add up each drone's threat score inside the loop.
    3. Divide that total sum by 'targetDrones.length' after the loop concludes.
    4. Log the final value using a template literal: "Target grid composite average threat rating: [average]"
*/
