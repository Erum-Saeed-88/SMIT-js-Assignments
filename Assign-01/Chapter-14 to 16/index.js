document.writeln("<h1>Chapter 14 till 16 </h1>");

// Q1

var studentNames = [];

  document.writeln("<h3>Empty Array Created for Student Names: " + studentNames + "</h3>");

// Q2

var studentNames = new Array();

document.writeln("<h3>Empty Array (Object Notation) Created for Student Names: " + studentNames + "</h3>");


// Q3

var stringsArray = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  document.writeln("<h3>Strings Array: " + stringsArray + "</h3>");

// Q4

var numbersArray = [10, 20, 30, 40, 50];

document.writeln("<h3>Numbers Array: " + numbersArray + "</h3>");

// Q5

var booleanArray = [true, false, true, false];

document.writeln("<h3>Boolean Array: " + booleanArray + "</h3>");

// Q6

var mixedArray = ["Ali", 25, true, 3.14, "Hello"];

document.writeln("<h3>Mixed Array: " + mixedArray + "</h3>");

// Q7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.writeln("<h2>Qualifications in Pakistan:</h2>");
document.writeln("<ol>");   // ordered list
for (var i = 0; i < qualifications.length; i++) {
    document.writeln("<li>" + qualifications[i] + "</li>");
}
  document.writeln("</ol>");


// Q8

var students = ["Ali", "Sara", "Ahmed"];
var scores = [400, 350, 480];
var totalMarks = 500;

document.writeln("<h2>Students Scores & Percentages</h2>");

for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.writeln(
      "Score of " + students[i] + " is " + scores[i] + 
      ". Percentage: " + percentage.toFixed(2) + "%<br>"
    );
};


// Q9

var colors = ["Red", "Green", "Blue", "Yellow"];
document.writeln("<h3>Initial Array: " + colors + "</h3>");

  // Add color to the beginning
var beginColor = prompt("Which color do you want to add to the beginning?");
colors.unshift(beginColor);
document.writeln("<h3>After adding color at the beginning: " + colors + "</h3>");

  // Add color to the end
var endColor = prompt("Which color do you want to add to the end?");
colors.push(endColor);
document.writeln("<h3>After adding color at the end: " + colors + "</h3>");

  // Add two more colors to the beginning
colors.unshift("Purple", "Orange");
document.writeln("<h3>After adding two colors at the beginning: " + colors + "</h3>");

  // Delete the first color
colors.shift();
document.writeln("<h3>After deleting the first color: " + colors + "</h3>");

  // Delete the last color
colors.pop();
document.writeln("<h3>After deleting the last color: " + colors + "</h3>");

  // Add color at user-defined index
var indexAdd = +prompt("At which index do you want to add a color?");
var colorName = prompt("Enter the color name:");
colors.splice(indexAdd, 0, colorName);
document.writeln("<h3>After adding color at index " + indexAdd + ": " + colors + "</h3>");

  // Delete color from user-defined index
var indexDel = +prompt("At which index do you want to delete color(s)?");
var countDel = +prompt("How many colors do you want to delete?");
colors.splice(indexDel, countDel);
document.writeln("<h3>After deleting " + countDel + " color(s) from index " + indexDel + ": " + colors + "</h3>");


// Q10

var scores = [320, 230, 480, 120];
  
document.writeln("<h3>Scores of Students: " + scores + "</h3>");
  
scores.sort(function(a, b) {
    return a - b;   // Ascending order
});

document.writeln("<h3>Ordered Scores of Students: " + scores + "</h3>");

// Q11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.writeln("<h3>Cities list: " + cities + "</h3>");

var selectedCities = cities.slice(1, 4); // copies Lahore, Islamabad, Quetta

document.writeln("<h3>Selected cities list: " + selectedCities + "</h3>");


// Q13

var fifoQueue = [];

  // Store values one by one
fifoQueue.push("Keyboard");
fifoQueue.push("Mouse");
fifoQueue.push("Printer");
fifoQueue.push("Monitor");

document.writeln("<h3>Devices in Queue: " + fifoQueue + "</h3>");
document.writeln("<h3>Out : " + fifoQueue.shift() + "</h3>");
document.writeln("<h3>Out : " + fifoQueue.shift() + "</h3>");
document.writeln("<h3>Out : " + fifoQueue.shift() + "</h3>");
document.writeln("<h3>Out : " + fifoQueue.shift() + "</h3>");

// Q14

var lifoStack = [];

lifoStack.push("Keyboard");
lifoStack.push("Mouse");
lifoStack.push("Printer");
lifoStack.push("Monitor");

document.writeln("<h3>Devices in Stack: " + lifoStack + "</h3>");
document.writeln("<h3>Out : " + lifoStack.pop() + "</h3>");
document.writeln("<h3>Out : " + lifoStack.pop() + "</h3>");
document.writeln("<h3>Out : " + lifoStack.pop() + "</h3>");
document.writeln("<h3>Out : " + lifoStack.pop() + "</h3>");

// Q15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.writeln("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.writeln("<option>" + phoneManufacturers[i] + "</option>");
}
document.writeln("</select>");