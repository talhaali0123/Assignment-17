// Chapter 21-25 PDF

// 1

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName + "!");

// 2.

var mobileModel = prompt("Enter your favorite mobile phone model:");
alert("Length of your input: " + mobileModel.length);

// 3.

var word = "Pakistani";
var index = word.indexOf("n");
alert("Index of 'n': " + index);


// 4.

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
alert("Last index of 'l': " + lastIndex);


// 5.

var word = "Pakistani";
var character = word.charAt(3);
alert("Character at 3rd index: " + character);


// 6.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello " + fullName + "!");


// 7.

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
alert("Updated city name: " + newCity);


// 8.

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
alert(newMessage);


// 9.

var str = "472";
var num = Number(str);
alert("Value: " + num + ", Type: " + typeof num);


// 10.

var userInput = prompt("Enter a string:");
var upperCaseInput = userInput.toUpperCase();
alert("Uppercase: " + upperCaseInput);


// 11.

var userInput = prompt("Enter a string:");
var titleCase = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
alert("Title Case: " + titleCase);


// 12.

var num = 35.36;
var str = num.toString().replace(".", "");
alert("Result: " + str);


// 13.

var username = prompt("Enter a username:");
if (/[!@.,]/.test(username)) {
    alert("Please enter a valid username without special symbols [@, ., , , !]");
} else {
    alert("Valid username");
}


// 14.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter an item to search:").toLowerCase();
if (A.includes(searchItem)) {
    alert(searchItem + " is available.");
} else {
    alert(searchItem + " is not available.");
}



// 15.

var password = prompt("Enter a password:");
if (/^[a-zA-Z][a-zA-Z0-9]{5,}$/.test(password)) {
    alert("Valid password");
} else {
    alert("Password must contain alphabets and numbers, should not start with a number, and must be at least 6 characters long.");
}


// 16.

var university = "University of Karachi";
var array = university.split(" ");
array.forEach(element => alert(element));


// 17.

var userInput = prompt("Enter a string:");
var lastChar = userInput.charAt(userInput.length - 1);
alert("Last character: " + lastChar);


// 18.

var str = "The quick brown fox jumps over the lazy dog";
var count = (str.toLowerCase().match(/the/g) || []).length;
alert("Occurrences of 'the': " + count);


// Chapter 21 (Changing Case)

// 1.

var allLower = userInput.toLowerCase();


// 2.

x = x.toLowerCase();


// 3.

y = y.toUpperCase();


// 4.

var lowerStr = someString.toLowerCase();


// 5.

var lowerElement = array[0].toLowerCase();


// 6.

alert(cityName.toUpperCase());


// 7.

var cityName = "kaRacHi";
var capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


// Chapter 22-25 (Strings)

// 1.

var sameWords = "captain";
var sliced = sameWords.slice(1, 3);


// 2.

var str = "captain";
var length = str.length;


// 3.

var animal = "elephant";
var seg = animal.slice(2, 6);


// 4.

var str = "example";
var length = str.length;
var sliced = str.slice(1, length - 3);


// 5.

var str = "example";
var length = str.length;
var sliced = str.slice(1, length - 3);


// 6.

var text = "To be or not to be.";
var indx = text.indexOf("be");
// indx = 3


// 7.

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
// indx = 16


// 8. 

var text = "Where did the dog go?";
var indx = text.lastIndexOf("go");


// 9.

if (indexNum !== -1) {
    // code here
}


// 10. 

var str = "abcde";
var char = str.charAt(2);
// char = "c"


// 11.

var text = "abcdefghij";
var cha = text.charAt(9);


// 12.

var str = "example";
var x = str.charAt(str.length - 1);


// 13.

var input = "example";
var cha = input.charAt(4);


// Chapter 26-30 pdf

// 1.

var number = parseFloat(prompt("Enter a positive integer:"));
document.write("Number: " + number + "<br>");
document.write("Round off value: " + Math.round(number) + "<br>");
document.write("Floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number) + "<br>");


// 2.

var number = parseFloat(prompt("Enter a negative floating point number:"));
document.write("Number: " + number + "<br>");
document.write("Round off value: " + Math.round(number) + "<br>");
document.write("Floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number) + "<br>");


// 3.

var number = parseFloat(prompt("Enter a number:"));
var absValue = Math.abs(number);
document.write("The absolute value of " + number + " is " + absValue + "<br>");


// 4.

var dice = Math.floor(Math.random() * 6) + 1;
document.write("The value of the dice roll is: " + dice + "<br>");

// 5.

var toss = Math.random() < 0.5 ? "Heads" : "Tails";
document.write("The coin toss result is: " + toss + "<br>");


// 6.

var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber + "<br>");

// 7.

var weight = prompt("Enter your weight:");
var parsedWeight = parseFloat(weight);
document.write("Your weight is: " + parsedWeight + " kilograms<br>");


// 8.

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the right number: " + secretNumber + "<br>");
} else {
    document.write("Try again! The secret number was: " + secretNumber + "<br>");
}


// Chapter 26 (Rounding Numbers)

// 1.

var origNum = 4.7;
var roundNum = Math.round(origNum);


// 2.

var origNum = 4.3;
var roundNum = Math.ceil(origNum);


// 3.

var origNum = 4.8;
var roundNum = Math.floor(origNum);


// 4.

var origNum = 4.5;
var roundNum = Math.round(origNum);


// 5.

var num = 0.5;
var roundNum = Math.floor(num);


// Chapter 27 (Random Numbers)

// 1.

var randomNum = Math.floor(Math.random() * 50) + 1;

// 2.

var randomNum = Math.random();

// 3.

var dice = Math.floor(Math.random() * 6) + 1;

// 4.

var toss = Math.random() < 0.5 ? 'Heads' : 'Tails';

// Chapter 28 & 29 (Converting Strings).

// 1.

var str = "123";
var intNum = parseInt(str);

// 2.

function convertToInt(str) {
    return parseInt(str);
  }
  
  var intNum = convertToInt("123");

// 3.

var str = "3.14";
var floatNum = parseFloat(str);

// 4.

var str = "123";
if (!isNaN(str)) {
  var num = parseInt(str);
}

// 5.

var num = 42;
var str = num.toString();

// 6. 

function convertToString(num) {
    return num.toString();
  }
  
  var str = convertToString(42);

// 7.

var str = "3.14";
var intNum = parseInt(str);

// Chapter 30 (Controlling the Length of Decimals).

// 1.

var num = 3.141592;
var newNum = num.toFixed(4).toString();

// 2.

var num = 3.14159;
num = parseFloat(num.toFixed(2));


// 3.

if (num.toFixed(2).length > 4) {}

// 4.

var num = 3.1415926535;
alert(num.toFixed(2).toString());

// Chapter 31-34 

// 1.

var currentDate = new Date();
document.write(currentDate);

// 2.

var currentDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert(months[currentDate.getMonth()]);

// 3.

var currentDate = new Date();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert(days[currentDate.getDay()]);

// 4.
var currentDate = new Date();
var day = currentDate.getDay();
if (day === 0 || day === 6) {
  alert("It’s Fun day");
}

// 5.

var date = new Date().getDate();
if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}


// 6.

var minutesSince1970 = Math.floor(new Date().getTime() / (1000 * 60));
console.log(minutesSince1970);


// 7.

var hours = new Date().getHours();
alert(hours < 12 ? "It's AM" : "It's PM");


// 8.

let laterDate = new Date("December 31, 2020");
console.log(laterDate);

// 9.

var ramadanStart = new Date("June 18, 2015");
var today = new Date();
var daysPassed = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan, 2015");


// 10.

var referenceDate = new Date("January 1, 2015");
var today = new Date();
var secondsPassed = Math.floor((today - referenceDate) / 1000);
console.log(secondsPassed);

// 11.

var now = new Date();
now.setHours(now.getHours() + 1);
console.log(now);


// 12.

var now = new Date();
now.setFullYear(now.getFullYear() - 100);
alert(now);

// 13.

var age = prompt("Enter your age");
var birthYear = new Date().getFullYear() - age;
alert("Your birth year is " + birthYear);


// 14.

var customerName = "Customer ABC";
var month = "October";
var numberOfUnits = 250;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;
var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

document.write(`Customer Name: ${customerName}<br>`);
document.write(`Current Month: ${month}<br>`);
document.write(`Number of Units: ${numberOfUnits}<br>`);
document.write(`Charges per Unit: ${chargesPerUnit}<br>`);
document.write(`Net Amount Payable (within Due Date): ${netAmount.toFixed(2)}<br>`);
document.write(`Late Payment Surcharge: ${latePaymentSurcharge}<br>`);
document.write(`Gross Amount Payable (after Due Date): ${grossAmount.toFixed(2)}`);


// Chapter 35-38

// 1.

function displayDateTime() {
    var currentDate = new Date();
    document.write(currentDate);
}
displayDateTime();


// 2.

function greetUser(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}
greetUser("John", "Doe");


// 3.

function addNumbers(num1, num2) {
    return num1 + num2;
}
var sum = addNumbers(5, 10);
alert(sum);


// 4.

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return "Invalid Operator";
    }
}
var result = calculator(10, 5, '+');
alert(result);


// 5.

function square(num) {
    return num * num;
}
alert(square(4));

// 6.

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
alert(factorial(5));


// 7.

function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
displayCounting(1, 10);

// 8.

function calculateHypotenuse(base, perpendicular) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(base) + square(perpendicular));
}
alert(calculateHypotenuse(3, 4));

// 9.

function calculateArea(width, height) {
    return width * height;
}
alert(calculateArea(5, 10));


// 10.

function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}
alert(isPalindrome("madam"));

// 11.

function capitalizeWords(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}
alert(capitalizeWords("the quick brown fox"));


// 12.

function findLongestWord(str) {
    var words = str.split(" ");
    var longest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
alert(findLongestWord("Web Development Tutorial"));


// 13.

function countOccurrences(str, letter) {
    var count = 0;
    for (var char of str) {
        if (char === letter) count++;
    }
    return count;
}
alert(countOccurrences("JSResourceS.com", "o"));


// 14.

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    alert("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    alert("The area is " + area);
}

calcCircumference(10);
calcArea(10);


























