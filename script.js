/*
Module Assignment 2
*/

// Question 1: Initializing an array with strings
var petArray = ["cat,", "cow", "dog"];

// Question 2: Outputting the value of Q1
console.log(petArray[1]);

// Question 3: Pushing a new value to the variable
petArray.push("sheep");

// Question 4: Outputting petArray with the length method
console.log(petArray.length);

// Question 5: Creating an object with properties
var catObject = {
  name: "Tiger",
  colour: "Orange",
  age: 7
};

// Question 6: Console logging the third value of catObject
console.log(catObject.age);

// Question 7: Creating an array from object values
var catArray = [{
  name: "Tiger",
  colour: "Orange",
  age: 7
}];

// Question 8: Creating a loop with catArray values
for (var index = 0; index < catArray.length; index++) {
  console.log(catArray[index].name);
  console.log(catArray[index].colour);
  console.log(catArray[index].age);
};

// Question 9: Creating a function
function logToConsole (infoToLog) {
  console.log(infoToLog);
}

// Question 10: Creating a value for the function
var valueObject = "car";
logToConsole(valueObject);
