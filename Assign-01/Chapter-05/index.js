//Q1.	Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var num1 = 5;
var num2 = 3;
var add = num1 + num2;

document.writeln(`Sum of ${num1} and ${num2} is 8 <br> <br>`);

//Q2.	Repeat task1 for subtraction, multiplication, division & modulus. 

var sub = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.writeln(`Sum of ${num1} minus ${num2} is 2 <br> Sum of ${num1} multiply by ${num2} is 15 <br> Sum of ${num1} divided by ${num2} is 1.6 <br> Sum of ${num1} modulus ${num2} is 2 <br> <br> <br>`);

//Q3.	Do the following using JS Mathematic Expressions 
/*a.	Declare a variable. 
b.	Show the value of variable in your browser like “Value after variable declaration is: ??”. 
c.	Initialize the variable with some number. 
d.	Show the value of variable in your browser like “Initial value: 5”. 
e.	Increment the variable. 
f.	Show the value of variable in your browser like “Value after increment is: 6”. 
g.	Add 7 to the variable. 
h.	Show the value of variable in your browser like “Value after addition is: 13”. 
i.	Decrement the variable. 
j.	Show the value of variable in your browser like “Value after decrement is: 12”. 
k.	Show the remainder after dividing the variable’s value by 3.  
l.	Output : “The remainder is : 0”. */

var num;
num = 5;
++num;
num + 7;
+ num--;
var remainder = num % 3;

//console.log(remainder)
document.writeln(`value after decleration is: 0 <br> initial value is ${num} <br> value after incriment is ${++num} <br> value after addition is ${num + 7} <br> value after decriment is ${(num--) + 6} <br> The reminder is ${12 % 3} <br> <br> <br>`);

//Q4.	Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 

var ticketPrice = 600;
var tickets = 5;
var totalTicketCost = ticketPrice * tickets;

document.writeln(`Total cost to buy ${tickets} tickets is ${totalTicketCost}PKR. <BR> <BR>`);

//Q5.	Write a script to display multiplication table of any number in your browser. E.g 

var num = 5;

document.writeln(`5 x 1<=  <br> <br>`)

/*Q6.	The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
a.	Store a Celsius temperature into a variable. 
b.	Convert it to Fahrenheit & output “NNoC is NNoF”. 
c.	Now store a Fahrenheit temperature into a variable. 
d.	Convert it to Celsius & output “NNoF is NNoC”. */

/*Q7.	Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
a.	Price of item 1 
b.	Price of item 2 
c.	Ordered quantity of item 1 
d.	Ordered Quantity of item 2 
e.	Shipping charges 
Compute the total cost & show the receipt in your browser. */

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var ShippingCharges = 100;

document.writeln(`<h2>Shopping Cart</h2> <br> price of item 1 is ${priceItem1} <br> Quantity of item 1 is ${quantityItem1} <br> price of item 2 is ${priceItem2} <br> Quantity of item 2 is ${quantityItem2} <br> shipping charges ${ShippingCharges} <br> <br> Total cost of shopping cart is ${(priceItem1 * quantityItem1)+(priceItem2 * quantityItem2)+(ShippingCharges)} <br> <br> <br>`);

//Q8.	Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

var totalMarks = 980;
var obtainedMarks = 804;

document.writeln(`<h2>Marks Sheet</h2> <br> Total marks is: ${totalMarks} <br> Obtained marks is: ${obtainedMarks} <br> Percentage is: ${(obtainedMarks / totalMarks)* 100} % <br> <br>`);

/*Q9.	Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) */

var totalDoller = 10;
var totalRiyal = 25;
var price1Doller = 104.80;
var price1Riyal = 28;

document.writeln(`<h2>Currency In PKR</h2> <br><br> Total currency in PKR: ${(price1Doller * totalDoller)+(price1Riyal * totalRiyal)} <br> <br>`);

/*Q10.	Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 
b.	Multiply by 10 
c.	Divide the result by 2 
Perform all calculations in a single expression */

var num = 5;
var total = num + 5 * 10 / 2;

document.writeln(` The calculation of this expression is: ${total}`);

/*Q11.	The Age Calculator: Forgot how old someone is? 
Calculate it! 
a.	Store the current year in a variable. 
b.	Store their birth year in a variable. 
c.	Calculate their 2 possible ages based on the stored values. 
Output them to the screen like so: “They are either NN or NN years old”. */

var birthYear = 1992;
var currentYear = 2016;

document.writeln(`<h2>Age Calculator</h2> <br><br> current year: 2016 <br> Birth year: 1992 <br> your age : ${currentYear - birthYear} <br><br>`);

/*Q12.	The Geometrizer: Calculate properties of a circle. 
a.	Store a radius into a variable. 
b.	Calculate the circumference based on the radius, and output “The circumference is NN”. 
(Hint : Circumference of a circle = 2 π r , π = 3.142) 
Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */

