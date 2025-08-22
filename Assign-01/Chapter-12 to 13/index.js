document.writeln("<h1>Chapter 12 & 13 </h1>");

//Q1

var char = prompt("Enter a character (number or letter):");

if (char.length === 1) {
      var ascii = char.charCodeAt(0);

    if (ascii >= 48 && ascii <= 57) {
        document.writeln("<h3>Input is a Number</h3>");
      }
      else if (ascii >= 65 && ascii <= 90) {
        document.writeln("<h3>Input is an Uppercase Letter</h3>");
      }
      else if (ascii >= 97 && ascii <= 122) {
        document.writeln("<h3>Input is a Lowercase Letter</h3>");
      }
      else {
        document.writeln("<h3>Input is not a number or letter</h3>");
      }
} 
else {
      document.writeln("<h3>Please enter only ONE character</h3>");
};

// Q2

var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
      document.writeln("<h3>The larger number is: " + num1 + "</h3>");
} 
    else if (num2 > num1) {
      document.writeln("<h3>The larger number is: " + num2 + "</h3>");
} 
    else {
      document.writeln("<h3>Both numbers are equal: " + num1 + "</h3>");
};

// Q3

var num = +prompt("Enter a number:");

if (num > 0) {
      document.writeln("<h3>The number " + num + " is Positive.</h3>");
} 
    else if (num < 0) {
      document.writeln("<h3>The number " + num + " is Negative.</h3>");
} 
    else {
      document.writeln("<h3>The number is Zero.</h3>");
};


// Q4

var char = prompt("Enter a single character:");  
char = char.toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      document.writeln("<h3>True → '" + char + "' is a vowel.</h3>");
} else {
      document.writeln("<h3>False → '" + char + "' is not a vowel.</h3>");
};


// Q5

var correctPassword = "12345";
var userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
      document.writeln("<h3>Please enter your password</h3>");
} 
else if (userPassword === correctPassword) {
      document.writeln("<h3>Correct! The password you entered matches the original password</h3>");
} 
else {
      document.writeln("<h3>Incorrect password</h3>");
};


// Q6

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.writeln("<h3>" + greeting + "</h3>");


// Q7

var time = +prompt("Enter time in 24-hour format (e.g. 19:00 for 7PM):");

if (time >= 0 && time < 1200) {
    document.writeln("<h3>Good Morning</h3>");
} 
  else if (time >= 1200 && time < 1700) {
    document.writeln("<h3>Good Afternoon</h3>");
} 
  else if (time >= 1700 && time < 2100) {
    document.writeln("<h3>Good Evening</h3>");
} 
  else if (time >= 2100 && time <= 2359) {
    document.writeln("<h3>Good Night</h3>");
} 
  else {
    document.writeln("<h3>Invalid time format! Please enter between 0000 and 2359.</h3>");
};