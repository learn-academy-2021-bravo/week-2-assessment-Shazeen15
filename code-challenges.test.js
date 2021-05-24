// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15;
// Expected output: "15 is divisible by three"

var num2 = 0;
// Expected output: "0 is divisible by three"

var num3 = -7;
// Expected output: "-7 is not divisble by three"
describe("divisible by 3", () => {
  test("should check if the data that is passed into the function is divisibele by 3", () => {
    expect(divBy3(num1)).toEqual("15 is divisible by three");
  });
});
// b) Create the function that makes the test pass.
// create a function called divBy3 that takes a number parameter.
// checck if the number is dividble by 3 with %
// return a statement

const divBy3 = (num) => {
  if (num % 3 === 0) {
    return `${num} is divisible by three`;
  } else {
    `${num} is not valid`;
  }
};
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = [
  "temperature",
  "database",
  "chopsticks",
  "mango",
  "deduction",
];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
describe("capetelizes", () => {
  test("should loop through the array that is passed through the  capetel() function and returns a new array with all the capetelize words", () => {
    expect(capetel(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
  });
});
// b) Create the function that makes the test pass.
// create a function called capetelize() that takes an array
// loops through the array and capelizes the words
// by to upper casing the first letter and slicing the rest of the characters
// returns a new array with all the words capetilizes

const capetel = (arrStr) => {
  return arrStr.map((str) => {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  });
};
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn";
// Expected output: 1
var vowelTester2 = "academy";
// Expected output: 0
var vowelTester3 = "challenge";
// Expected output: 2
describe("index of first vowels", () => {
  test("should check if character in the string is a vowel and returns the index of the first vowel found", () => {
    expect(firstVow(vowelTester1)).toEqual(1);
  });
});

// b) Create the function that makes the test pass.
// create a function called firstVow() that takes a string
// checkout through each char in the string if they are a vowel
// i can check with ||
// return the index when the function found the first vowel
// a, e, i, o, u
const firstVow = (str) => {
  for (i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      return i;
    }
  }
};
