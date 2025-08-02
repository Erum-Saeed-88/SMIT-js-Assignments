// Q1.	Declare a variable called age & assign to it your age. Show your age in an alert box. 
var age = 37;

alert("i am " + age + " years old");

//Q2.	Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
var visitCount = 13;
    visitCount++;     // Increment count

    // Display on webpage
document.writeln("You have visited this site " + visitCount + " times." ,"<br /> <br />");
    

      //Q3.	Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
var myBirthYear = 1988;
document.writeln('My Birth Year is ' + myBirthYear , "<br>","DataType of my decleared variable is Number.", "<br> <br>");

/*Q4.	A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
a. Visitor’s name 
b.	Product title 
c.	Quantity i.e. how many products a visitor wants to order 
Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */

var visitorName = "Anam";
var product = "Shampoo";
var quantity = 3;
document.writeln(visitorName + ' had ordered ' + quantity +' '+ product + ' on Imtiaz Store.');