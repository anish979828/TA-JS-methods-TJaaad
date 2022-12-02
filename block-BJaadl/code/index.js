let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(array){
  return array.sort((a,b) => a.length-b.length).pop()
} 
console.log(findLongestWord(words))

// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map((array) => array.length));

// - Create a new array that only contains word with atleast one vowel.
console.log(words.filter((str) => {
  return str.includes("a") || str.includes("e") || str.includes('i') || str.includes("o") || str.includes('u')
}));

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"))

// - Create a new array that contains words not starting with vowel.
console.log(words.filter((str) => {
   return str.startsWith("a") == false && str.startsWith("e") == false && str.startsWith('i') == false && str.startsWith("o") == false && str.startsWith('u') == false
}));  

// - Create a new array that contians words not ending with vowel
console.log(words.filter((str) => {
  return str.endsWith("a") == false && str.endsWith("e") == false && str.endsWith('i') == false && str.endsWith("o") == false && str.endsWith('u') == false
})); 

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers 
function sumArray(Array){
  return Array.reduce(((acc,cv) => acc + cv),0)
}
console.log(sumArray(numbers))

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
console.log(numbers.filter(num => num % 3 == 0))

// - Create a new array that contains only even numbers
console.log(numbers.filter(num => num % 2 == 0))

// - Create  a new array that contains only odd numbers.
console.log(numbers.filter(num => num % 2 !== 0))

// - Create a new array that should have true for even number and false for odd numbers.
console.log (numbers.map((num) => {return num % 2 == 0 ? true : false } ))

// - Sort the above number in assending order.
console.log(numbers.sort((a,b)=> a-b) );

// - Does sort mutate the original array?
// Yes sort mutate the original array.

// - Find the sum of the numbers in the array.
let sum = (numbers.reduce((acc,cv) => acc + cv,0))
console.log(sum);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array){
  return array.reduce((acc,cv) => acc + cv,0) / array.length;
}
console.log(averageNumbers(numbers))

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array){
  return array.map((str) => str.length).reduce((acc,cv) => acc + cv ,0)/array.length;
}
averageWordLength(strings)
