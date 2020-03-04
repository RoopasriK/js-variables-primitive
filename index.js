// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*data types
->Primitive data types
  -string,boolean,number,symbol(refer developer mozilla)
->Reference data types
  -object(+arrays)
->Values
  -null(object type),undefined,NaN  */

//String Methods

let a='Hello ';
//returns length of the string
//output:6
console.log(a.length);  

let b='welcome home'
//joins two or more words
//output: hello welcome home  -- `{a} {b}`
console.log(a.concat(b));

//returns boolean value(t or f) if sentence ends with given word
console.log(b.endsWith('home'));

//returns boolean value if sentence includes that word
//output:true
console.log(b.includes('welcome'));
//output:false
console.log(b.includes('home',10));
 
//returns the index of letter
//output:2
console.log(b.indexOf('l')); 

//returns the last index of letter or word
//output:10
console.log(b.lastIndexOf('o'));

//returns a new string with a specified number of copies of the string it was called on
//output:hello hello hello
console.log(a.repeat(3));

//searches for string and replaces new value in specified position
//output:welcome office
console.log(b.replace('home','office'));

//searches a string and returns the position of the match
//output:8
console.log(b.search("home"));

//extracts part of string
//output:welcome
console.log(b.slice(0,8));

//split a string into an array of substrings, and returns the new array
//output:["welcome", "home"]
console.log(b.split(" "))

//returns boolean value if string is present or not
//output:false
console.log(b.startsWith("home"));

//extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters
//output:come
console.log(b.substr(3,4));

//extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
//output:com
console.log(b.substring(3,6));

//converts a string to lowercase letters.
//output:hello
console.log(a.toLowerCase());

//converts a string to uppercase letters.
//output:WELCOME HOME
console.log(b.toUpperCase());

//removes whitespace from both sides of a string
//output:hi
let d="    hi   "
console.log(d.trim())

//-------------------------------------------------

//Number Methods:

let num = 25.7659;
//converts a number into a string, keeping a specified number of decimals
console.log(num.toFixed());
//output:26
console.log(num.toFixed(2));
//output:25.77
console.log(num.toFixed(7));
//output:25.7659000

//converts a number into an exponential notation
console.log(num.toExponential());
//output:2.57659e+1
console.log(num.toExponential(3));

//A String, representing a number
console.log(num.toString());
//output:25.7659
console.log(num.toString(2));
//output:11001.110001000001001000000101101111000000000110100011
console.log(num.toString(8));
//output:31.6101100557000643
console.log(num.toString(16));
//output:19.c41205bc01a3

//----------------------------------------------------------

//Global Methods:

//console(info,warn,error,log,table)
//info-writes a message to the console(F12 shortcut key)
console.info('Hello World');
//output:Hello World

//warn-writes a warning to the console
console.warn('This is a warning');
//output: /_\ This is a warning

//error-writes an error message to the console
console.error('You made a mistake');
//output: x You made a mistake

//log-writes a message to the console
console.log('Welcome to JS');
//output:Welcome to JS

//table-writes a table in the console view
console.table(["apple","orange","grapes"]);
//Array(3)

//alert-displays an alert box with a specified message and an OK button
//alert("Please fill in the details");

//prompt-displays a dialog box that prompts the visitor for input
//prompt("Enter your email-id:","abc@gmail.com");

//confirm-displays a dialog box with a specified message, along with an OK and a Cancel button
//confirm("Proceed to transaction");

//Number()-converts the object argument to a number that represents the object's value
console.log(Number(true));
//output:1
console.log(Number(false));
//output:0
console.log(Number("567"));
//output:567
console.log(Number("60 12"));
//output:null

//isNaN()-determines whether a value is an illegal number (Not-a-Number)
console.log(isNaN(123));
//output:false
console.log(isNaN('9'));
//output:false
console.log(isNaN('NaN'));
//output:true

//parseFloat()-parses a string and returns a floating point number
console.log(parseFloat("35.00"));
//output:35
console.log(parseFloat("I am 20"));
//output:20

//parseInt()-parses a string and returns an integer
console.log(parseInt("050"));
//output:50
console.log(parseInt(34.89));
//output:34

//String()-converts the value of an object to a string
console.log(String(Boolean(1)));
//output:true
console.log(new Date());
//output:2020-03-04T10:16:21.936Z

//Boolean()-function to find out if an expression (or a variable) is true
console.log(Boolean(7<3));
//output:false
console.log(Boolean(5=='5'));
//output:true









