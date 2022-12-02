let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array
let peopelName = persons.map((obj) => obj.name)

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((obj) => obj.grade)

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((obj) => obj.sex)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
peopelName.filter((str) => {
  if (str.startsWith("J") || str.startsWith("P")){
    console.log(str)
  }
});

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let AandC = peopelName.filter((str) => str.startsWith("A") || str.startsWith("C"));
AandC.map((str) =>{
  console.log(str.length)
} )

// Log all the filtered male ('M') in persons array 

let male = persons.filter((obj) => {
  if(obj.sex == "M") {
    return (obj);
 }
} );
male.map((obj) => console.log(obj.name))

// Log all the filtered female ('F') in persons array
let female = persons.filter((obj) => {
  if(obj.sex == "F") {
    return(obj);
 }
})
female.map((obj) => console.log(obj.name))

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
female.filter((obj) => {
  if (obj.name.startsWith("C") ||
  obj.name.startsWith("J"))
  console.log(obj.name)
}
  )

// Log all the even numbers from peopleGrade array
peopleGrade.filter((num) => {
  if(num % 2 == 0){
    console.log(num)
  }
})

// Find the first name that starts with 'J' in persons array and log the object
persons.filter((obj) => {
  if(obj.name.startsWith("J")){
   console.log(obj)
  }
} );

// Find the first name that starts with 'P' in persons array and log the object
persons.filter((obj) => {
  if(obj.name.startsWith("P")){
   console.log(obj)
  }
} );

// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.filter((obj) =>{
  if (obj.name.startsWith("J") && obj.grade > 10 && obj.sex == "F"){
    console.log(obj.name)
  }
})

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((obj) => {
  if(obj.sex == "F") {
    return(obj);
 }
})

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((obj) => {
  if(obj.sex == "M") {
    return (obj) ;
 }
} );

// Find the sum of all grades and store in gradeTotal
let gradeTotal = (peopleGrade.reduce((acc,cv) => acc + cv,0))

// Find the average grade
let averageGrade = gradeTotal/peopleGrade.length
console.log(averageGrade)

// Find the average grade of male
let malegrade = male.map((obj) => obj.grade)
let malegradetotal = malegrade.reduce((acc,cv) => acc + cv,0)

let maleGradeAverage = malegradetotal/malegrade.length;
console.log(maleGradeAverage);

// Find the average grade of female
let femalegrade = female.map((obj) => obj.grade)
let femalegradetotal = femalegrade.reduce((acc,cv) => acc + cv,0)

let femaleGradeAverage = femalegradetotal/femalegrade.length;
console.log(femaleGradeAverage);

// Find the highest grade
let heighestgrade = peopleGrade.sort((a,b) => a-b).pop();
console.log(heighestgrade)

// Find the highest grade in male
let highestgrademale = malegrade.sort((a,b) => a-b).pop();
console.log(highestgrademale);

// Find the highest grade in female
let highestgradefemale = femalegrade.sort((a,b) => a-b).pop();
console.log(highestgradefemale);

// Find the highest grade for people whose name starts with 'J' or 'P'
let person_jP = persons.filter((obj) =>  (obj.name.startsWith("J") || obj.name.startsWith("P")));
let highGrade = 0;

for (let i of person_jP) {
  if (i.grade > highGrade) {
    highGrade = i.grade;
  }
}
console.log(highGrade);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
for (var i = 1; i < peopleGrade.length; i++)
    for (var j = 0; j < i; j++)
        if (peopleGrade[i] < peopleGrade[j]) {
          var x = peopleGrade[i];
          peopleGrade[i] = peopleGrade[j];
          peopleGrade[j] = x;
        }

console.log(peopleGrade)
// Yes it will change the index of peopleGrade because sort mutates the original Array.

// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a,b) => b-a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
for (var i = 1; i < peopleGrade.length; i++)
    for (var j = 0; j < i; j++)
        if (peopleGrade[i] > peopleGrade[j]) {
          var x = peopleGrade[i];
          peopleGrade[i] = peopleGrade[j];
          peopleGrade[j] = x;
        }

console.log(peopleGrade)

// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopelName.sort())

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let peopelName1 = [...peopelName];
console.log(peopelName1.sort())

