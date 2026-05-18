/**** ORDER OF CODE EXECUTION: PRACTICE ****/

/** STRINGBUILDING **/

// 1. TODO: Re-order the lines of code below so that running the file produces these two
// lines of output:
// JAVA
// JAVASCRIPT






let word = "";
word = word + "JA";
word = word + "VA";
console.log(word);
word = word + "SC";
word = word + "RI";
word = word + "PT";
console.log(word);

// Run the file before moving on to ensure you get the expected result.

/** DATA MANIPULATION **/

// 2. TODO: Plan out the additional lines of code needed according to the following guidelines:






// Add code where needed below, then test by running the file.

// IMPORTANT: Do not edit the 6 existing lines of code; add NEW lines of code only.

//    A) You will modify some existing numbers. The final sum in the console should be 445.

let num1 = 56;
let num2 = 121;
let num3 = 73;
let num4 = 24;
let num5 = 88;
let num6 = 95;
num1 = 68;
num5 = 70;
num2 =125;
sum = num1+num2+num3+num4+num5+num6;
console.log(sum); 
//    B) The sum should be calculated by adding all modified numbers and storing
//       it in a new variable. Print only that new variable.

let sumOfNewvalues = num1+num2+num5;
console.log(sumOfNewvalues); 

//    C) Use the + and - operators to add and subtract numbers as required

let add = num4 + sum;
console.log(add);
let subtract = sum -sumOfNewvalues;
console.log(subtract);

//    D) All odd numbers should be made even by adding 1 to their value and
//       reassigning them to the same variable name without changing the original assignment.
num2 = num2 + 1;
num3 = num3 + 1;
num6 = num6 + 1;
console.log("Num 2:",num2);
console.log("Num 3:",num3);
console.log("num 6:",num6);

//    E) All even numbers should be made odd by subtracting 5 from their value
//       and reassigning to the same variable without changing the original assignment.
num1 = num1 - 5;
num2 = num2 - 5;
num3 = num3 - 5;
num4 = num4 - 5;
num5 = num5 - 5;
console.log("num1:",num1);
console.log("num2:",num2);
console.log("num3:",num3);
console.log("num4:",num4);
console.log("num5:",num5);

// All done? Great job! Understanding how JavaScript executes and evaluates code is
// important. Keep these principles in mind as you solve future problems!

// TODO: Before you go... don't forget to make a git commit!
