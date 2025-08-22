//Q1 :

var a = 10;
a = ++a;
a = a++;
a = --a;
a = a--;
document.writeln(`<h2>Q1 :</h2>
a = ++a;<br>
the value of a is:11<br><br>
a = a++;<br>
the value of a is:12<br><br>
a = --a;<br>
the value of a is:11<br><br>
a = a--;<br>
The value of a is: ${a}`);

//Q2 :

var a = 2;
var b = 1;
var result =
--a; 
--a - --b; 
--a - --b + ++b; 
--a - --b + ++b + b--; 
document.writeln(`<h2>Q2 :</h2> a is : 2 <br> b is : 1 <br> expression is :  --a - --b + ++b + b-- <br>Result is ${result}`);


//Q3 :

var userInput = prompt ("Enter User Name");
var userName = "Erum";
var userGreet = "Happy Coding..... !!!";

var message = userName + " " + userGreet;
alert("Hi !" + " " + message);

//Q4 
var userName = prompt("Enter your name:");

alert("Hello " + userName + "! Welcome to coding world...");

//Q5

var num = prompt("Enter a number for its table (default is 5):");
if (num === null || num === "") {
    num = 5;
} else {
    num = +num;
}
var result = "";
for (var i = 1; i <= 10; i++) {
  result += num + " x " + i + " = " + (num * i) + "<br>";
};
document.getElementById("table").innerHTML = result;

// Q6
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

        // Total marks per subject
var totalMarksPerSubject = 100;

        // Obtained marks
var marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
var marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
var marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

      // Calculations
var totalObtained = marks1 + marks2 + marks3;
var totalMarks = totalMarksPerSubject * 3;
var percentage = (totalObtained / totalMarks) * 100;

var table = "<table border='1' cellpadding='8'>" +
            "<tr>" +
                "<th>Subject</th>" +
                "<th>Total Marks</th>" +
                "<th>Obtained Marks</th>" +
            "</tr>" +
            "<tr>" +
                "<td>" + sub1 + "</td>" +
                "<td>" + totalMarksPerSubject + "</td>" +
                "<td>" + marks1 + "</td>" +
            "</tr>" +
                "<tr>" +
                "<td>" + sub2 + "</td>" +
                "<td>" + totalMarksPerSubject + "</td>" +
                "<td>" + marks2 + "</td>" +
            "</tr>" +
                "<tr>" +
                "<td>" + sub3 + "</td>" +
                "<td>" + totalMarksPerSubject + "</td>" +
                "<td>" + marks3 + "</td>" +
            "</tr>" +
            "<tr>" +
                "<th>Total</th>" +
                "<th>" + totalMarks + "</th>" +
                "<th>" + totalObtained + "</th>" +
            "</tr>" +
            "<tr>" +
                "<th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th>" +
            "</tr>" +
              "</table>";

document.getElementById("result").innerHTML = table;
