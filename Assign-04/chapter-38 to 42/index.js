document.writeln("<h1>Chapter 38 till 42 </h1>");

// Q1

function power(a, b) {
    var result = 1;
    for (var i = 1; i <= b; i++) {
      result *= a;
    }
    return result;
};

var base = +prompt("Enter the base (a):");
var exponent = +prompt("Enter the exponent (b):");
var powered = power(base, exponent);
  document.writeln(base + " raised to the power " + exponent + " is: " + powered);

// Q2

function isLeapYear(year) {
    // Leap year condition
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
};

var year = +prompt("Enter a year:");

  if (isLeapYear(year)) {
    document.writeln(year + " is a leap year.");
  } else {
    document.writeln(year + " is not a leap year.");
  };

// Q3

function calculateS(a, b, c) {
    return (a + b + c) / 2;
};

  // Function to calculate area using S
function calculateArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
};

var a = +prompt("Enter side a:");
var b = +prompt("Enter side b:");
var c = +prompt("Enter side c:");
var area = calculateArea(a, b, c);
  document.writeln("The area of the triangle is: " + area.toFixed(2));

// Q4

function averageMarks(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
};

  // Function to calculate percentage
function percentageMarks(m1, m2, m3, totalMarks) {
var sum = m1 + m2 + m3;
    return (sum / totalMarks) * 100;
};

function mainFunction() {
var m1 = +prompt("Enter marks for subject 1:");
var m2 = +prompt("Enter marks for subject 2:");
var m3 = +prompt("Enter marks for subject 3:");
var totalMarks = 300; // 100 marks per subject

var avg = averageMarks(m1, m2, m3);
var perc = percentageMarks(m1, m2, m3, totalMarks);

document.writeln("Average Marks: " + avg.toFixed(2) + "<br>");
document.writeln("Percentage: " + perc.toFixed(2) + "%");
};


mainFunction();

// Q5

function customIndexOf(str, char) {
for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
        return i;
    }
}
    return -1; // if character not found
};

var userString = prompt("Enter a string:");
var userChar = prompt("Enter a character:");

var index = customIndexOf(userString, userChar);

if (index !== -1) {
    document.writeln("The character '" + userChar + "' is found at index: " + index);
} else {
    document.writeln("The character '" + userChar + "' is not found in the string.");
};

// Q6

function removeVowels(sentence) {
    var result = "";
    var vowels = "aeiouAEIOU";

    for (var i = 0; i < sentence.length; i++) {
      if (vowels.indexOf(sentence[i]) === -1) {
        result += sentence[i];
      }
    }
    return result;
};

var userSentence = prompt("Enter a sentence (max 25 characters):");
var newSentence = removeVowels(userSentence);

  document.writeln("Original Sentence: " + userSentence + "<br>");
  document.writeln("After removing vowels: " + newSentence);

// Q7

function countConsecutiveVowels(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";

    for (var i = 0; i < text.length - 1; i++) {
      var first = text[i];
      var second = text[i + 1];

      switch (true) {
        case (vowels.indexOf(first) !== -1 && vowels.indexOf(second) !== -1):
          count++;
          break;
      }
    }
    return count;
};

var userText = prompt("Enter a sentence:");
var consecutiveCount = countConsecutiveVowels(userText);

  document.writeln("Sentence: " + userText + "<br>");
  document.writeln("Number of consecutive vowels: " + consecutiveCount);

// Q8

function toMeters(km) {
    return km * 1000;
};

  // Function to convert km to feet
function toFeet(km) {
    return km * 3280.84;
};

  // Function to convert km to inches
function toInches(km) {
    return km * 39370.1;
};

  // Function to convert km to centimeters
function toCentimeters(km) {
    return km * 100000;
};

var distanceKm = +prompt("Enter distance between two cities in kilometers:");

  document.writeln("Distance in Kilometers: " + distanceKm + " km<br>");
  document.writeln("Distance in Meters: " + toMeters(distanceKm) + " m<br>");
  document.writeln("Distance in Feet: " + toFeet(distanceKm).toFixed(2) + " ft<br>");
  document.writeln("Distance in Inches: " + toInches(distanceKm).toFixed(2) + " in<br>");
  document.writeln("Distance in Centimeters: " + toCentimeters(distanceKm) + " cm<br>");

// Q9

function calculateOvertimePay(hoursWorked) {
var overtimeRate = 12;
var overtimeHours = 0;

    if (hoursWorked > 40) {
      overtimeHours = hoursWorked - 40;
    }

    return overtimeHours * overtimeRate;
};

var hours = +prompt("Enter total hours worked by the employee:");
var overtimePay = calculateOvertimePay(hours);

  document.writeln("Total hours worked: " + hours + "<br>");
  document.writeln("Overtime pay: Rs. " + overtimePay.toFixed(2));

// Q10

function calculateNotes(amount) {
var hundreds = Math.floor(amount / 100);
    amount %= 100;

var fifties = Math.floor(amount / 50);
    amount %= 50;

var tens = Math.floor(amount / 10);
    amount %= 10;

    return {
      hundreds: hundreds,
      fifties: fifties,
      tens: tens,
      remaining: amount
    };
};

var amountToWithdraw = +prompt("Enter amount to withdraw (in multiples of 10):");
var notes = calculateNotes(amountToWithdraw);

  document.writeln("Amount to withdraw: Rs. " + amountToWithdraw + "<br>");
  document.writeln("100 notes: " + notes.hundreds + "<br>");
  document.writeln("50 notes: " + notes.fifties + "<br>");
  document.writeln("10 notes: " + notes.tens + "<br>");
if (notes.remaining > 0) {
    document.writeln("Remaining amount that cannot be given in available denominations: Rs. " + notes.remaining);
};

