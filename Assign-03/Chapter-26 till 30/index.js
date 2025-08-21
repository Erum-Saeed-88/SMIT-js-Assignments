document.writeln("<h1>Chapter 26 till 30 (output) </h1>");


var num = 3.45214;
document.writeln (`<h2>Q1 : </h2> Number : ${num} <br> Round of value : ${Math.round(num)} <br> Floor value : ${Math.floor(num)} <br> Ceil value : ${Math.ceil(num)} <br><br><br>`);

// Q2
var negativeNum = -2.673 ;
document.writeln (`<h2>Q2 : </h2> Number : ${negativeNum} <br> Round of value : ${Math.round(negativeNum)} <br> Floor value : ${Math.floor(negativeNum)} <br> Ceil value : ${Math.ceil(negativeNum)} <br><br><br>`);

// Q3
var num = +prompt("Enter any number:");
var absoluteValue = Math.abs(num);

document.writeln(`<h2>Q3 :</h2> The absolute value of ${num}  is  ${absoluteValue}`);


// Q4
var dice = Math.floor(Math.random() * 6) + 1;
document.writeln(` <h2> Q4 :</h2> Random dice value: ${dice}`);

// Q5
var toss = Math.floor(Math.random() * 2);  
  if (toss === 0) {
    document.writeln ("<h2>Q5 : </h2> Random coin value: Head <br>");
  } else {
    document.writeln("<h2>Q5 : </h2> Random coin value: Tail");
  };

//Q6
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.writeln (`<h2>Q6 :</h2> Random number between 1 and 100 is: ${randomNumber}`);


//Q7
var userInput = prompt("Enter your weight (50, 50kgs, 50.2kgs, 50.2kilograms):");
var weight = parseFloat(userInput);
document.writeln (`<h2> Q7 :</h2> The weight is ${weight} kilograms.`);


//Q8
var userInput = +prompt("Enter a number betweer 1 to 10 :");
var secretNum = Math.floor(Math.random()*10)+1;

if (userInput === secretNum) {
    alert("Congratulations ! you guess a correct number...");
}else {
    alert("Oops ! Try Again..")
};
