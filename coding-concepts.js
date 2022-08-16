// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer:
// b) Verify and explain:


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:
// b) Verify and explain:


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:
// b) Verify and explain:


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)
// From Developer Cliff
// a) Your answer:[11, 13, 15]
// b) Verify and explain: line 54 is declaring a variable name onlyOdds. onlyOdds = an array that is being filtered over with a function. .filter is a higher order function, alot like .map, but it goes over each part of an array and does or checks something to each item at an index, ,but it does not have to return an array of the same length. it will only return the things that were true with the condition set. 
// in this case the condition that was set was that whatever the number was if it was divisible by 2 and had a remainder of some kind, then that meant it was an odd number so it returned that number. Only 3 of the numbers were odd so it returned an array with 3 items.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// b) Verify and explain:


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
