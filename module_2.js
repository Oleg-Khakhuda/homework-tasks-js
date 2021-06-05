// Tasks 1

function checkAge(age) {
    if (age >= 18) { // Change this line
      return "You are an adult";
    }
  
    return "You are a minor";
  }
  // checkAge(20);
  // checkAge(8);
  // checkAge(14);
  // checkAge(38);


// Tasks 2

  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line
  
    if (password === ADMIN_PASSWORD) {
       return "Welcome!";
    } 
    return "Access denied, wrong password!";
  
    // Change code above this line
  }
  // checkPassword("mangohackzor");
  // checkPassword("polyhax");
  // checkPassword("jqueryismyjam");


// Tasks 3

function checkStorage(available, ordered) {
    // Change code below this line
    
    if (ordered === 0) {
      return "Your order is empty!";
    } if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";
    } 
      return "The order is accepted, our manager will contact you";
    
    // Change code above this line
  }
  // checkStorage(100, 50);
  // checkStorage(100, 130);
  // checkStorage(70, 0);
  // checkStorage(200, 20);
  // checkStorage(200, 250);
  // checkStorage(150, 0);


// Tasks 4

// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"]


// Tasks 5

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];


// Tasks 6

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";


// Tasks 7

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length


// Tasks 8

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];


// Tasks 9

function getExtremeElements(array) {
  // Change code below this line
return [array[0], array[array.length - 1]]; 
  // Change code above this line
}
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"])


// Tasks 10

function splitMessage(message, delimeter) {
  
  // Change code below this line
let words = message.split(delimeter)
  // Change code above this line
  return words;
}
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_")


// Tasks 11

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
 let price = message.split(" ").length;
   return price * pricePerWord
  // Change code above this line
}
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20)


// Tasks 12

function makeStringFromArray(array, delimeter) {
  
  // Change code below this line

let string = (array.join(delimeter));

  // Change code above this line
  return string;
}
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_")


// Tasks 13

function slugify(title) {
  // Change code below this line

const slug = title.toLowerCase().split(" ").join("-")
return slug;
  // Change code above this line
}
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS")


// Tasks 14

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);


// Tasks 15

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line


// Tasks 16

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

newArray = firstArray.concat(secondArray);

if (newArray.length > maxLength) {
newArray = newArray.slice(0, maxLength)
};
return newArray;
  // Change code above this line
}
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)


// Tasks 17

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}


// Tasks 18

function calculateTotal(number) {
  // Change code below this line
 let total = 0;
 for (let i = 0; i <= number; i += 1 ) {
  total += i
 }
 return total
   // Change code above this line
 }
//  calculateTotal(1);
//  calculateTotal(3);
//  calculateTotal(7);
//  calculateTotal(18);
//  calculateTotal(24)


 // Tasks 19

 const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}


 // Tasks 20

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i += 1) {
total += order[i]
};
  // Change code above this line
  return total;
}
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


// Tasks 21

function findLongestWord(string) {
  // Change code below this line
  
 stringSplit = string.split(" ");
 longestWord = 0;
for (let i = 0; i < stringSplit.length; i += 1) {
  if (stringSplit[i].length > longestWord) {
    longestWord = stringSplit[i].length;
    word = stringSplit[i]
  }
}
return word;
  // Change code above this line
}
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");


// Tasks 22

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i += 1) { 
  numbers.push(i);
}
  // Change code above this line
  return numbers;
}
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);


// Tasks 23

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
 } 
//  filterArray([1, 2, 3, 4, 5], 3);
//  filterArray([1, 2, 3, 4, 5], 4);
//  filterArray([1, 2, 3, 4, 5], 5);
//  filterArray([12, 24, 8, 41, 76], 38);
//  filterArray([12, 24, 8, 41, 76], 20)


// Tasks 24

 function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}
// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple")


// Tasks 25

function getCommonElements(array1, array2) {
  // Change code below this line
  const uniqueElements = [];
for (const element of array1) {
 if (array2.includes(element)) {
      uniqueElements.push(element);
  }
}

return uniqueElements;
 // Change code above this line
}
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);


// Tasks 26

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (const orders of order) {
    total += orders;
  }
  

  // Change code above this line
   return total;
  
}
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([])


// Tasks 27

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

   for (const number of numbers) {

    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  
  return filteredNumbers;
  // Change code above this line
}
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20)


// Tasks 28

// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;


// Tasks 29

function getEvenNumbers(start, end) {
  // Change code below this line
const evenNumbers = [];
for (let i = start; i <= end; i += 1) {
     if (i % 2 === 0) {
       evenNumbers.push(i);
     }
}
return evenNumbers;
   // Change code above this line
 }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7)


// Tasks 30

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}


// Tasks 31

function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
  // Change code above this line
}


// Tasks 32

function includes(array, value) {
  // Change code below this line
for (let i = 0; i < array.length; i += 1) {
  if (array[i] === value) {
return true;
}
}
  return false;
  // Change code above this line
}
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi")