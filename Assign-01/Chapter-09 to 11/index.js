document.writeln("<h1>Chapter 9 till 11 </h1>");

// Q1

var city = prompt("Enter your city name:");

if (city !== null) {
      if (city.toLowerCase() === "karachi") {
        document.getElementById("message").innerHTML = "Welcome to city of lights";
      } else {
        document.getElementById("message").innerHTML = "Welcome to " + city;
      }
} else {
      document.getElementById("message").innerHTML = "No city entered!";
};

// Q2
var gender = prompt("Enter your gender (male/female):");

if (gender !== null) {
      if (gender.toLowerCase() === "male") {
        document.getElementById("message").innerHTML = "Good Morning Sir ";
      } else if (gender.toLowerCase() === "female") {
        document.getElementById("message").innerHTML = "Good Morning Maam ";
      } else {
        document.getElementById("message").innerHTML = "Good Morning!";
      }
} else {
      document.getElementById("message").innerHTML = "No input provided!";
};

    // Q3

var color = prompt("Enter signal color (Red / Yellow / Green):");

if (color !== null) {
      color = color.toLowerCase();

      if (color === "red") {
        document.getElementById("message").innerHTML = "Must Stop ";
      } else if (color === "yellow") {
        document.getElementById("message").innerHTML = "Ready to move ";
      } else if (color === "green") {
        document.getElementById("message").innerHTML = "Move now ";
      } else {
        document.getElementById("message").innerHTML = "Invalid color entered!";
      }
} else {
      document.getElementById("message").innerHTML = "No color entered!";
};   
    
// Q4

var fuel = prompt("Enter remaining fuel in car (in litres):");

if (fuel !== null) {
      fuel = parseFloat(fuel); // convert string to number

      if (fuel < 0.25) {
        document.getElementById("message").innerHTML = "Please refill the fuel in your car ";
      } else {
        document.getElementById("message").innerHTML = "You have enough fuel  (" + fuel + " litres)";
      }
} else {
      document.getElementById("message").innerHTML = "No input provided!";
};

    // Q5

 var a = 4; 
if (++a === 5){ 
  alert("given condition for variable a is true"); 
};

var b = 82; 
if (b++ === 83){ 
  alert("given condition for variable b is true"); 
};

var c = 12; 
if (c++ === 13){ alert("condition 1 is true"); }  
if (c === 13){ alert("condition 2 is true"); }    
if (++c < 14){ alert("condition 3 is true"); }    
if (c === 14){ alert("condition 4 is true"); }    

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
  alert("The cost equals"); 
};

if (true){ alert("True"); }   
if (false){ alert("False"); } 


if("car" < "cat"){ 
  alert("car is smaller than cat"); 
};

// Q6

var sub1 = +prompt("Enter marks obtained in Subject 1 (out of 100):");
var sub2 = +prompt("Enter marks obtained in Subject 2 (out of 100):");
var sub3 = +prompt("Enter marks obtained in Subject 3 (out of 100):");

var totalMarks = +prompt("Enter Total Marks:");

    //Calculate obtained marks and percentage
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
} else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
} else if (percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
} else {
      grade = "Fail";
      remarks = "Sorry";
};

var output = "<h3>Result Summary</h3>";
    output += "<p><b>Total Marks:</b> " + totalMarks + "</p>";
    output += "<p><b>Marks Obtained:</b> " + obtainedMarks + "</p>";
    output += "<p><b>Percentage:</b> " + percentage.toFixed(2) + "%</p>";
    output += "<p><b>Grade:</b> " + grade + "</p>";
    output += "<p><b>Remarks:</b> " + remarks + "</p>";

document.getElementById("result").innerHTML = output;

// Q7

var secretNumber = 7;

    // User input
var guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secretNumber) {
      document.writeln("<h3> Bingo! Correct answer</h3>");
} else if (guess + 1 === secretNumber) {
      document.writeln("<h3>Close enough to the correct answer</h3>");
} else {
      document.writeln("<h3>Wrong guess, try again!</h3>");
};

// Q8

var num = +prompt("Enter a number:");

    // Check divisibility by 3
if (num % 3 === 0) {
      document.writeln("<h3>correct " + num + " is divisible by 3</h3>");
} else {
      document.writeln("<h3>wrong " + num + " is NOT divisible by 3</h3>");
};

// Q9

var num = +prompt("Enter a number:");

    // Check even or odd
if (num % 2 === 0) {
      document.writeln("<h3>correct " + num + " is an EVEN number</h3>");
} else {
      document.writeln("<h3>oops " + num + " is an ODD number</h3>");
};


// Q10

var temp = +prompt("Enter the temperature:");

    // Check temperature conditions
if (temp > 40) {
      document.writeln("<h3>It is too hot outside.</h3>");
} 
else if (temp > 30) {
      document.writeln("<h3>The Weather today is Normal.</h3>");
 } 
 else if (temp > 20) {
      document.writeln("<h3>Today's Weather is cool.</h3>");
} 
 else if (temp > 10) {
      document.writeln("<h3>OMG! Today's weather is so Cool.</h3>");
} 
 else {
      document.writeln("<h3>It's very cold outside.</h3>");
};

// Q11

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var op = prompt("Enter operation (+, -, *, /, %):");

    // Perform calculation using if statements
if (op === "+") {
      document.writeln("<h3>Result: " + (num1 + num2) + "</h3>");
} else if (op === "-") {
      document.writeln("<h3>Result: " + (num1 - num2) + "</h3>");
} else if (op === "*") {
      document.writeln("<h3>Result: " + (num1 * num2) + "</h3>");
} else if (op === "/") {
      if (num2 !== 0) {
        document.writeln("<h3>Result: " + (num1 / num2) + "</h3>");
      } else {
        document.writeln("<h3>Division by zero is not allowed!</h3>");
      }
}
else if (op === "%") {
      document.writeln("<h3>Result: " + (num1 % num2) + "</h3>");
}
else {
      document.writeln("<h3>Invalid operation entered!</h3>");
};



   
