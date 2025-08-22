document.writeln("<h1>Chapter 17 till 20 </h1>");

// Q1

var multiArray = [[], [], []];
  document.writeln("Empty Multidimensional Array: " + multiArray);

// Q2

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];

  document.writeln(matrix[0][0] + " " + matrix[0][1] + " " + matrix[0][2] + " " + matrix[0][3] + "<br>");
  document.writeln(matrix[1][0] + " " + matrix[1][1] + " " + matrix[1][2] + " " + matrix[1][3] + "<br>");
  document.writeln(matrix[2][0] + " " + matrix[2][1] + " " + matrix[2][2] + " " + matrix[2][3] + "<br>");


  // Q3

for (var i = 1; i <= 10; i++) {
    document.writeln(i + "<br>");
};

// Q4

var tableNumber = +prompt("Enter a number for multiplication table:");
var tableLength = +prompt("Enter the length of the table:");

document.writeln("<h3>Multiplication Table of " + tableNumber + "</h3>");
for (var i = 1; i <= tableLength; i++) {
    document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
};

// Q5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.writeln("<h3>Fruits List</h3>");

for (var i = 0; i < fruits.length; i++) {
    document.writeln("Element at index " + i + " is " + fruits[i] + "<br>");
};

// Q6

document.writeln("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
    document.writeln(i + (i < 15 ? ", " : ""));
}
document.writeln("<h3>Reverse Counting:</h3>");
  for (var i = 10; i >= 1; i--) {
    document.writeln(i + (i > 1 ? ", " : ""));
}

document.writeln("<h3>Even:</h3>");
  for (var i = 0; i <= 20; i += 2) {
    document.writeln(i + (i < 20 ? ", " : ""));
}

document.writeln("<h3>Odd:</h3>");
  for (var i = 1; i < 20; i += 2) {
    document.writeln(i + (i < 19 ? ", " : ""));
}

document.writeln("<h3>Series:</h3>");
  for (var i = 2; i <= 20; i += 2) {
    document.writeln(i + "k" + (i < 20 ? ", " : ""));
};

// Q7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery! What do you want to order?");

  search = search.toLowerCase();
  if (A.indexOf(search) !== -1) {
    alert(search + " is available at index " + A.indexOf(search) + " in our bakery.");
  } else {
    alert("We are sorry. " + search + " is not available in our bakery.");
  };


// Q8

var A = [24, 53, 78, 91, 12];
var largest = Math.max(...A);

document.writeln("Array items: " + A + "<br>");
document.writeln("The largest number is: " + largest);

// Q9

var A = [24, 53, 78, 91, 12];
var smallest = Math.min(...A);

document.writeln("Array items: " + A + "<br>");
document.writeln("The smallest number is: " + smallest);

// Q10

document.writeln("<h3>Multiples of 5 (1 to 100)</h3>");

for (var i = 5; i <= 100; i += 5) {
document.writeln(i + " ");
};