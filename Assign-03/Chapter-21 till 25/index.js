document.writeln ("<h1>Chapter 21 till 25 (output)</h1>")

// Q1 :

var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName + " " + lastName;

alert("Hi! " + fullName + " welcome to coding world !");

// Q2 :

var mobileModel = prompt("Enter your Favourite Mobile Model:");
var lengthOfString = mobileModel.length;
  document.writeln (`<h2>Q2 :</h2> My favourite Mobile model is : ${mobileModel} <br> length of string is : ${lengthOfString}`);

// Q3 :

var string = "Pakistani";
 document.writeln (`<h2>Q3 :</h2> Value of String is : ${string}  <br>  index of n is: ${string.indexOf("n")}`);


// Q4 :

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.writeln (`<h2>Q4 :</h2> String : ${word} <br> Last Index of string 'l' is : ${lastIndex}  <br><br> `);

//Q5 :

var word = "Pakistani";
var charAtIndex3 = word.charAt(3);

document.writeln (`<h2>Q5 :</h2> String: ${word} <br> Character at 3rd index: ${charAtIndex3}`);

//Q6 :

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);

document.writeln(`<h2>Q6 :</h2> Happy coding ${fullName} !`)

//Q7 :

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.writeln (`<h2>Q7 :</h2> City: ${city} <br>  After Replacement : ${newCity}`);

//Q8 :

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");

document.writeln (`<h2>Q8 :</h2> Message: ${message} <br> After replacement: ${newMessage}`);

//Q9 :

var str = "472";
var num = Number(str);

document.writeln (`<h2>Q9 :</h2> Value: ${str} <br> Type: ${typeof str} <br> Value : ${num} <br> Type : ${typeof num}`);

//Q10 :

/*var userInput = prompt("Enter any text:");
var upperCaseText = userInput.toUpperCase();

document.writeln (`<h2>Q10 :</h2>User Input: ${userInput} <br> Upper Case : ${upperCaseText}`);

//Q11 :

var userInput = prompt("Enter any text:");
var lowerCaseText = userInput.toLowerCase();
var words = lowerCaseText.split(" ");
var titleCaseText = "";

  // Loop through words and capitalize first letter
  for (var i = 0; i < words.length; i++) {
    var firstChar = words[i].charAt(0).toUpperCase();
    var restChars = words[i].slice(1);
    titleCaseText += firstChar + restChars + " ";
  };

document.writeln (`<h2>Q11 :</h2>User Input: ${userInput} <br>  Tittle Case : ${titleCaseText}`);

//Q12 :

var num = 35.36;
var str = num.toString();
var result = str.replace(".", "");

document.writeln (`<h2>Q12 :</h2>Number: ${num} <br>  Result : ${result}`);

//Q13 :

var username = prompt("Enter your username:");
var isValid = true;

  for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);

    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
      isValid = false;
      break;
    }
  };

    if (isValid) {
      alert("Welcome, " + username + "!");
    } else {
      alert("Please enter a valid username (no @ . , ! allowed).");
    };


// Q14 :

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var bakery = prompt("Welcome to STAR Bakery! What do you want to order?");
var searchItem = bakery.toLowerCase();

  if (A.indexOf(searchItem) !== -1) {
      alert(bakery + " is available at index " + A.indexOf(searchItem) + " in our bakery.");
  } else {
      alert("We are sorry. " + bakery + " is not available in our bakery.");
  };



// Q15 :

var password = +prompt("Enter your password:");
var firstChar = password.charCodeAt(0);
 if (firstChar >= 48 && firstChar <= 57) {
  return false;
};

// Q16 :

var university = "University of Karachi";
var arrOfString = university.split();
  for (var i = 0; i < arrOfString.length; i++) {
        document.writeln(`<h2>Q16 :</h2> ${arrOfString[i]} <br>`);
  };


// Q17 : 

var userInput = prompt("Enter any text:");
var lastChar = userInput.charAt(userInput.length - 1);
document.writeln (`<h2>Q17 :</h2>User Input: ${userInput} <br> Last Character: ${lastChar}`);

// Q18 :

var text = "The quick brown fox jumps over the lazy dog.";
var lowerText = text.toLowerCase();
 var words = lowerText.split(" ");

  // Count occurrences of "the"
  var count = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i] === "the") {
          count++;
      }
    }
  document.writeln (`<h2>Q18 :</h2> Text: ${text} <br> There are ${count}  occurrence(s) of word the. <br><br>`);*/
