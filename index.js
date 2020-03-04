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