document.writeln("<h1>Chapter 35 till 38 </h1>");

// Q1

function showDateTime() {
    var now = new Date();   // Current date & time
    document.writeln("<h3>Current Date & Time:</h3>");
    document.writeln(now);
  }

  // Function call
  showDateTime();

  // Q2

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.writeln("Hello " + fullName + "! Welcome to JavaScript.<br>");
  }

  // Function call
  var fName = prompt("Enter your First Name:");
  var lName = prompt("Enter your Last Name:");
  greetUser(fName, lName);


// Q3

function addNumbers(num1, num2) {
    return num1 + num2;
  }

  // User input
  var number1 = +prompt("Enter the first number:");
  var number2 = +prompt("Enter the second number:");

  // Function call & display result
  var sum = addNumbers(number1, number2);
  document.writeln("The sum of " + number1 + " and " + number2 + " is: " + sum);


// Q4

function calculator(num1, num2, operator) {
    var result;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else if (operator === "%") {
      result = num1 % num2;
    } else {
      result = "Invalid operator";
    }
    return result;
  }

  // User inputs
  var n1 = +prompt("Enter first number:");
  var n2 = +prompt("Enter second number:");
  var op = prompt("Enter operator (+, -, *, /, %):");

  // Function call
  var output = calculator(n1, n2, op);
  document.writeln("Result of " + n1 + " " + op + " " + n2 + " = " + output);


// Q5

function square(num) {
    return num * num;
  }

  var number = +prompt("Enter a number to find its square:");
  var result = square(number);

  document.writeln("The square of " + number + " is: " + result);


// Q6

function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  var number = +prompt("Enter a number to find its factorial:");
  var fact = factorial(number);

  document.writeln("The factorial of " + number + " is: " + fact);


// Q7

function displayCounting(start, end) {
    document.writeln("<h3>Counting from " + start + " to " + end + ":</h3>");
    for (var i = start; i <= end; i++) {
      document.writeln(i + " ");
    }
  }

  var startNum = +prompt("Enter the start number:");
  var endNum = +prompt("Enter the end number:");

displayCounting(startNum, endNum);


// Q8

function calculateHypotenuse(base, perpendicular) {
    
    // Inner function to calculate square
    function calculateSquare(x) {
      return x * x;
    }

    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
  }

  var base = +prompt("Enter the base of the triangle:");
  var perpendicular = +prompt("Enter the perpendicular of the triangle:");

  var hyp = calculateHypotenuse(base, perpendicular);

  document.writeln("The hypotenuse of the triangle is: " + hyp.toFixed(2));


// Q9

function calculateArea(width, height) {
    return width * height;
  }

  // i. Arguments as values
  var area1 = calculateArea(5, 10);
  document.writeln("Area of rectangle (arguments as values): " + area1 + "<br>");

  // ii. Arguments as variables
  var w = 7;
  var h = 12;
  var area2 = calculateArea(w, h);
  document.writeln("Area of rectangle (arguments as variables): " + area2);


// Q10

function isPalindrome(str) {
    // Convert string to lowercase and remove spaces
    str = str.toLowerCase().replace(/\s+/g, '');
    // Reverse the string
    var reversed = str.split('').reverse().join('');
    // Compare
    return str === reversed;
  }

  var userInput = prompt("Enter a word or phrase to check if it's a palindrome:");

  if (isPalindrome(userInput)) {
    document.writeln("'" + userInput + "' is a palindrome.");
  } else {
    document.writeln("'" + userInput + "' is not a palindrome.");
  };


// Q11

function toTitleCase(str) {
    var words = str.split(" "); // split string into words
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" "); // join words back into a string
  }

  var userInput = prompt("Enter a string:");
  var titleCased = toTitleCase(userInput);

  document.writeln("Original String: " + userInput + "<br>");
  document.writeln("Title Case: " + titleCased);


// Q12

function findLongestWord(str) {
    var words = str.split(" "); // split string into words
    var longest = words[0];

    for (var i = 1; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }

  var userInput = prompt("Enter a string:");
  var longestWord = findLongestWord(userInput);

  document.writeln("Original String: " + userInput + "<br>");
  document.writeln("Longest Word: " + longestWord);


// Q13

function countLetter(str, letter) {
    var count = 0;
    // Convert both to same case for case-insensitive count (optional)
    str = str.toLowerCase();
    letter = letter.toLowerCase();

    for (var i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }
    return count;
  }

  var userString = prompt("Enter a string:");
  var userLetter = prompt("Enter a letter to count its occurrences:");

  var occurrences = countLetter(userString, userLetter);

  document.writeln("String: " + userString + "<br>");
  document.writeln("Letter '" + userLetter + "' occurs " + occurrences + " time(s) in the string.");


// Q14

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.writeln("The circumference is: " + circumference.toFixed(2) + "<br>");
  }

  // Function to calculate area
  function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.writeln("The area is: " + area.toFixed(2) + "<br>");
  }

  var radius = +prompt("Enter the radius of the circle:");

  calcCircumference(radius);
  calcArea(radius);