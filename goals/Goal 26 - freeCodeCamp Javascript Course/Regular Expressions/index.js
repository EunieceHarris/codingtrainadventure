// REGULAR EXPRESSIONS - JavaScript Algorithms and Data Structures
// I've accomplished the Regular Expressions Module from freeCodeCamp but I need to re-review it because I was lost towaards the end.
// Started: 18 March 2021

// Test Method

let s_verb_1 = 'Jag ska besöka mina foraldrar som bor i Virginia Beach.';
let check_verb_1 = /besöka/;
let result_1 = check_verb_1.test(s_verb_1);
//console.log(result_1);

// ignore case (lower or uppercase) => 'i'

let s_verb_2 = 'Det har är en mening med inte adjektiv.'
let check_verb_2 = /Mening/i;
let result_2 = check_verb_2.test(s_verb_2);
//console.log(result_2);

// to extract a string using match(). then it'll return it

let s_verb_3 = 'Mina forskor ar om Hilma af Klint';
let check_verb_3 = /Klint/i;
let result_3 = s_verb_3.match(check_verb_3);
//console.log(result_3);

// use find more than one string using 'g'

let s_verb_4 = 'paprikor gurkor druvor purjolökar druvor';
let check_verb_4 = /druvor/g;
let result_4 = s_verb_4.match(check_verb_4);
//console.log(result_4);

// to match any one character by using '.'

let s_verb_5 = 'bug rug mug tug';
let check_verb_5 = /.ug/g;
let result_5 = s_verb_5.match(check_verb_5);
//console.log(result_5);

// you can find particular characters using character classes => [...]

let s_verb_6 = 'vår vär var';
let check_verb_6 = /v[a]r/g;
let result_6 = s_verb_6.match(check_verb_6);
//console.log(result_6);

// match a range of letters

let s_verb_7 = 'Kan jag har en Nobelprisen, tack?';
let check_verb_7 = /[a-z]/gi;
let result_7 = s_verb_7.match(check_verb_7);
//console.log(result_7);

// match letters and numbers by using '^'
let s_verb_8 = '1. Det har är en roligt tid.';
let check_verb_8 = /[^aeiou0-9]/gi;
let result_8 = s_verb_8.match(check_verb_8);
//console.log(result_8);

// match characters that appear more than once by using '+'
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result_er = difficultSpelling.match(myRegex);
//console.log(result_er);

// Match Characters that Occur Zero or More Times by using '*'
let s_verb_10 = 'Aaaaaarg!';
let check_verb_10 = /a*/i;
let result_10 = s_verb_10.match(check_verb_10);
//console.log(result_10);

// Find characters and numbers the lazy way using '?'
let s_verb_11 = '<h1>Winter is coming</h1>';
let check_verb_11 = /<.[0-9]*?>/;
let result_11 = s_verb_11.match(check_verb_11);
//console.log(result_11);

// the caret is used to search for patterns at the beginning of strings => '^'
let s_verb_12 = "Cal and Ricky both like racing.";
let check_verb_12 = /^Cal/;
let result_12 = check_verb_12.test(s_verb_12);
//console.log(result_12);

// earch the end of strings using the dollar sign character $ at the end of the regex => '$'
let s_verb_13 = 'The last car on a train is the caboose';
let check_verb_13 = /caboose$/;
let result_13 = check_verb_13.test(s_verb_13);
//console.log(result_13);

// match all letters and numbers => \w
let s_verb_14 = 'The last car on a train is the caboose';
let check_verb_14 = /\w/g;
let result_14 = check_verb_14.test(s_verb_14);
//console.log(result_14);

// match everything but letters and numbers => \W
let s_verb_15 = "The five boxing wizards jump quickly.";
let check_verb_15 = /\W/g;
let result_15 = check_verb_15.test(s_verb_15);
//console.log(result_15);

// match all numbers => \d
let s_verb_16 = "2001: A Space Odyssey";
let check_verb_16 = /\d/g;
let result_16 = s_verb_16.match(check_verb_16);
//console.log(result_16);

// match all non numbers => \D
let s_verb_17 = "2001: A Space Odyssey";
let check_verb_17 = /\D/g;
let result_17 = s_verb_17.match(check_verb_17);
//console.log(result_17);

// restrict certain usernames 
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result_err = username.match(userCheck);
//console.log(result_err);

//^ - start of input
//[a-z] - first character is a letter
//[0-9]{2,0} - ends with two or more numbers
//| - or
//[a-z]+ - has one or more letters next
//\d* - and ends with zero or more numbers
//$ - end of input
//i - ignore case of input

// match whitespace => \s
let s_verb_18 = "Whitespace is important in separating words";
let check_verb_18 = /\s/g;
let result_18 = s_verb_18.match(check_verb_18);
//console.log(result_18);

// match non whitespace => \S ([^ \r\t\f\n\v])
let s_verb_19 = "Whitespace is important in separating words";
let check_verb_19 = /\S/g;
let result_19 = s_verb_19.match(check_verb_19);
//console.log(result_19);

// Specify Upper and Lower Number of Matches => {x,x}
let s_verb_20 = "Whitespace is important in separating words";
let check_verb_20 = /\S/g;
let result_20 = s_verb_20.match(check_verb_20);
//console.log(result_20);

// Check for all or None => '?'
let s_verb_21 = 'Favourite';
let check_verb_21 = /favou?rite/i;
let result_21 = check_verb_21.test(s_verb_21);
//console.log(result_21);

// Positive and Negative Lookahead => '?=..', '?!=...'
// Password checker example
let sampleOrd = '8pass99';
let ordChecker = /(?=\w{6})(?=\w*\d{2})/;
let results = ordChecker.test(sampleOrd);
console.log(results);

// Check For Mixed Grouping of Characters => '()'
let mystring = 'Eleanor Roosevelt';
let myRegex_2 = /(Eleanor|Franklin)\sRoosevelt/;
let result_22 = myRegex_2.test(mystring);
console.log(result_22);

let myString = "Eleanor Roosevelt";
let myRegex_3 = /(Eleanor|Franklin)\s.*Roosevelt/i; // Change this line
let result = myRegex_3.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

// Reuse Patterns Using Capture Groups => '(\x)'
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result_23 = reRegex.test(repeatNum);
console.log(result_23);

// Use Capture Groups to Search and ReplacePassed => '.replace([search for this], [replace with this])'
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = '$3 $2 $1'; // Change this line
let result = str.replace(fixRegex, replaceText);

// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

