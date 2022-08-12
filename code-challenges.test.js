// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// test template
// // a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {
//   // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//   it("returns a string that says hi", () => {
//     //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//     expect(hello()).toEqual("hi");
//   });
// });

// 1: Write the test first!
// 2: Run your testing suit to see a failing test
// 3: Write the code
// 4: Run your testing suit to see your test pass
// 5: Refactor if necessary

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("mult3", () => {
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.

    const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]

    expect(mult3(numbersArray1)).toEqual([18, 21, 24, 27, 30]);
    expect(mult3(numbersArray2)).toEqual([72, 81, 90, 99, 108]);
  });
});

// Good failure:  FAIL  ./code-challenges.test.js
// mult3
//   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// ● mult3 › takes in an array of numbers and returns an array with all the numbers multiplied by 3

//   ReferenceError: mult3 is not defined

// b) Create the function that makes the test pass.

// Psuedocode
// Input: array of numbers
// Output: array with all the numbers multiplied by 3
// declare a function named mult3
// returning same length array ---> map to iterate across the values in the array and multiply by 3

const mult3 = (array) => {
 return array.map(value => value * 3)
}

// Pass:  PASS  ./code-challenges.test.js
// mult3
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
