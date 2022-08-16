// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// test template
// a describe method that lists the name of the function OR naming of the particular test.
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
// From Developer Elijah
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

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 =  { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// Pseudocode:
//// test template
// a describe method that lists the name of the function OR naming of the particular test.
//declare a function that
// takes an object as an argument and decides  if the number inside it is evenly divisible by three or not.
//input will be a number and out put will say if the number is equally divisible by t
//output : a a string that says  15 is divisible by three", or 15 is divisible by three", or "-7 is not divisible by three"
const object1 = { number: 15 };
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 };
// Expected output: 0 is divisible by three"
const object3 = { number: -7 };
// Expected output: "-7 is not divisible by three"
describe("divByThree", () => {
  it("takes an object as an argument and decides  if the number inside it is evenly divisible by three or not",()=>{
expect(divByThree(object1)).toEqual("15 is divisible by three")
expect(divByThree(object2)).toEqual("0 is divisible by three")
expect(divByThree(object3)).toEqual("-7 is not divisible by three")
});
});

  // b) Create the function that makes the test pass.
//Pseudocode:
//declare a function that takes an object as an argument
//decides if number inside is evenly divisible by three or not.
//input will be a number
//output : a a string that says  15 is divisible by three", or 15 is not divisible by three".
const divByThree = (object) => {
  if(object.number % 3 === 0){
    // dot notation
    return `${object.number} is divisible by three`
  } else {
    // bracket notation, pass key as a string
      return `${object['number']} is not divisible by three`
  }
}


// Objects are sometimes called associative arrays, since each property is associated with a string value that can be used to access it. Similar that each value in an array has an index associated with its value.
// You access the properties of an object with a simple dot-notation or bracket notation:
  // console.log(obj)
  // console.log(obj.number)
  // console.log(obj['number'])


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// From Developer Daniel
// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("capitalizeFirstLetters", () => {
  it("takes in an array of words and returns an array with all words capitalized", () => {
      expect(capitalizeFirstLetters(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizeFirstLetters(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// Failed test
// ● capitalizeFirstLetters › takes in an array of words and returns an array with all words capitalized

// ReferenceError: capitalizeFirstLetters is not defined

// b) Create the function that makes the test pass.
//create function that takes an array of strings
// either make new empty array to push into or use map method
// iterate over array
// return result
//continuing with the map method
    // use toUpperCase() method on each word at index 0 to capitalize the first letter
    // chain with slice method to add the rest of the word to the capitalized letter

    const capitalizeFirstLetters = (arr) => arr.map(word => word[0].toUpperCase() + word.slice(1))


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// From Developer Francisco

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//PSEUDO: use the describe method and label your argument as firstVowelIndex
// apply the it() method to explain the intent in plain words
//add your expect statement within the curly braces of your it() method along with the following function call and argument
//following the expect statement use the jestmatcher .toEqual(along with the expected outcome) 

describe("firstVowelIndex", () => {
  it("Create a function that takes in a string and logs the index of the first vowel.", () => {
    expect(firstVowelIndex(vowelTester1)).toEqual(1)
    expect(firstVowelIndex(vowelTester2)).toEqual(0)
    expect(firstVowelIndex(vowelTester3)).toEqual(2)
  })
})
// Good failure
// ● firstVowelIndex › Create a function that takes in a string and logs the index of the first vowel.

// ReferenceError: firstVowelIndex is not defined

// b) Create the function that makes the test pass.

// Pseudo: create a function named firstVowelIndex
//create a variable with the values of a, e, i, o, u as an array
// use for loop to make an iteration on the parameter
//use the if() condition method that will evaluate whether the parameters will include the following vowels. 
// use return i to output the index of the outcome of the given iteration.

const firstVowelIndex = (string) => {
  const vowels = ['a','e','i','o','u']
  for(let i = 0; i < string.length; i++) {
    if(vowels.includes(string[i])){
      return i
    }
  }
}

// all functions passed
// PASS  ./code-challenges.test.js
// mult3
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (2 ms)
// divByThree
//   ✓ takes an object as an argument and decides  if the number inside it is evenly divisible by three or not
// capitalizeFirstLetters
//   ✓ takes in an array of words and returns an array with all words capitalized
// firstVowelIndex
//   ✓ Create a function that takes in a string and logs the index of the first vowel. (1 ms)