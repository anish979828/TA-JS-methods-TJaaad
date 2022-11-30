// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]
*/


// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
let update = strings.concat("called","sentance")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(update.join(" "));

// - Remove the first word in the array (strings)
console.log(strings.slice(0,1))

// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter((str) => str.includes("is")));

// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.filter((str) => str.indexOf("is") !== -1));

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((num) => num % 3 == 0));

// -  Sort Array from smallest to largest
console.log(numbers.sort((a,b) => a-b));

// - Remove the last word in strings
console.log(strings.pop());

// - Find largest number in numbers
console.log(numbers[numbers.length-1]);

// - Find longest string in strings

// - Find all the even numbers
console.log(numbers.filter((num) => num % 2 == 0));

// - Find all the odd numbers
console.log(numbers.filter((num) => num % 2 !== 0));

// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift("Can"));

// - Make a subset of numbers array [18,9,7,11]
 console.log(numbers.slice(numbers.indexOf(18),numbers.indexOf(3)))

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(3,5));

// - Replace 12 & 18 with 1221 and 1881
(numbers.splice(numbers.indexOf(12),2,1221,1881));
console.log(numbers)

// - Replace words in strings array with the length of the word
let a = strings.map((str) => str.length);

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];

  customers.forEach((Obj) => {
    if (Obj.firstname[0] == "J"){
      console.log(Obj.firstname);
    }
  });

// - Create new array with only first name
console.log(customers.map((Obj) => Obj.firstname))

// - Create new array with all the full names (ex: "Joe Blogs")
let newArray = customers.map((str) => `${str.firstname} ${str.lastname}`);
console.log(newArray)

// - Sort the array created above alphabetically
console.log(newArray.sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.
// let fullname1 = newArray.unshift("ABhi");
console.log(newArray.filter((str) => str.includes == "a" ))



