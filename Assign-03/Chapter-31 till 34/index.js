document.writeln("<h1>Chapter 31 till 34 (output) </h1>");

// Q1

var currentDateTime = new Date();
document.writeln(`<h2>Q1 :</h2> Current Date & Time: ${currentDateTime}`);

//Q2

var months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];

var currentDate = new Date();
var currentMonthIndex = currentDate.getMonth();
var currentMonth = months[currentMonthIndex];

alert("Current Month: " + currentMonth);

//Q3

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDate = new Date();
var dayIndex = currentDate.getDay();
var currentDay = days[dayIndex];

alert("Today is: " + currentDay);

//Q4

var currentDate = new Date();
var dayIndex = currentDate.getDay();

  if (dayIndex === 0 || dayIndex === 6) {
    document.writeln("<h2>Q4 : </h2> It's Fun day");
  } else {
    document.writeln("<h2>Q4 :</h2> It's a working day");
  };

//Q5

var currentDate = new Date();
var dayOfMonth = currentDate.getDate();

  if (dayOfMonth < 16) {
    alert("First fifteen days of the month");
  } else {
    alert("Last days of the month");
  };

//Q6

var currentDate = new Date();
var msSince1970 = currentDate.getTime();
msSince1970 = msSince1970 / (1000 * 60);

document.writeln("<h2>Q6 :</h2> Minutes since midnight, Jan. 1, 1970: " + msSince1970);

//Q7

var currentDate = new Date();
var hours = currentDate.getHours();

  if (hours < 12) {
    alert("Its AM");
  } else {
    alert("Its PM");
  };

//Q8

var laterDate = new Date("December 31, 2020");

document.writeln("<h2>Q8 : </h2> Later Date: " + laterDate);

//Q9

var ramadanDate = new Date("June 18, 2015");
var today = new Date();
var diff = today.getTime() - ramadanDate.getTime();
var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));

alert(daysPassed + " days have passed since 1st Ramadan, 2015");

//Q10

var referenceDate = new Date();
var start2015 = new Date("January 1, 2015");
var diff = referenceDate.getTime() - start2015.getTime();
var secondsElapsed = Math.floor(diff / 1000);

document.writeln ("<h2>Q10 :</h2> On reference date: " + referenceDate + "<br>" , secondsElapsed + " seconds had passed since beginning of 2015.");
  

//Q11

var currentDate = new Date();
document.writeln ("<h2>Q11 :</h2> Current Date & Time: " + currentDate + "<br>");

  // Extract hours
  var currentHours = currentDate.getHours();
  document.writeln ("Current Hour: " + currentHours + "<br>");
  // Reset date object an hour ahead
  currentDate.setHours(currentHours + 1);
  // Display updated date
  document.writeln ("Updated Date & Time (+1 hour): " + currentDate);

//Q12

var currentDate = new Date();
  alert("Current Date: " + currentDate);

  // Reset to 100 years back
  currentDate.setFullYear(currentDate.getFullYear() - 100);
  // Show updated date
  alert("Date 100 Years Back: " + currentDate);

//Q13

var age = +prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

document.writeln("<h2>Q13 :</h2> Your age is: " + age + "<br>", "Your birth year is: " + birthYear);

//Q14

var customerName = "Erum Naz";   
  var currentMonth = new Date().toLocaleString("default", { month: "long" });
  var numberOfUnits = 350;
  var chargesPerUnit = 15;

  var lateSurcharge = 500;

  // Calculations
  var netAmount = numberOfUnits * chargesPerUnit; 
  var grossAmount = netAmount + lateSurcharge;

  // Rounding to 2 decimal places
  netAmount = netAmount.toFixed(2);
  grossAmount = grossAmount.toFixed(2);

  // Display in Browser
  document.writeln("<h2>Q14 : K-Electric Bill</h2>");
  document.writeln("Customer Name: <b>" + customerName + "</b><br>");
  document.writeln("Month: <b>" + currentMonth + "</b><br>");
  document.writeln("Number of Units: <b>" + numberOfUnits + "</b><br>");
  document.writeln("Charges per Unit: <b>" + chargesPerUnit + "</b><br><br>");

  document.writeln("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
  document.writeln("Late Payment Surcharge: <b>" + lateSurcharge + "</b><br>");
  document.writeln("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b>");

