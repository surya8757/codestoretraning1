//different way to represent the string

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

//instance method
const string4 = new String("A String object");

//eval
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

//valueof use for evaluating the object string;
console.log(eval(s2.valueOf())); // returns the number 4


//method in string;
const iterator=string1[Symbol.iterator]();
let char=iterator.next();
while(char.done && char.value!=' ')
{
   console.log(char.value);
   char=iterator.next();
}


//charAt() method
console.log(string1.charAt(0));//A

//at method in string
console.log(string1.at(5));

"ABC".charCodeAt(0); // returns 65

"\ud83d\ude0d".codePointAt(1); // 56845

//concat take multiple input string;
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2))

const str3 = 'Cats are the best!';

console.log(str3.endsWith('best!'));

console.log(String.fromCharCode(189, 43, 190, 61));//it create unic number made of this code

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));//create the icon;

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
console.log(sentence.includes(word));//it return in true or false;

"Blue Whale".includes("blue"); // returns false beacause it is casesensetive;

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';


//matchAll
const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

//normalize method
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);

//padEnd
const str4 = 'Breaded Mushrooms';

console.log(str4.padEnd(25, '.'));

//padstart
const str5 = '5';

console.log(str5.padStart(2, '0'));
// Expected output: "05"

//raw method
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"

//repeat method
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

//replace
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

//replace all
console.log(p.replaceAll('dog', 'monkey'));

//search regular expression
const str6 = "hey JudE";
const re = /[A-Z]/;
console.log(str.search(re));

console.log(str6.slice(2, 3));
//split
const words = str.split(' ');
console.log(words[3]);

//startwith
console.log(str1.startsWith('Sat'));

const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);

//toString
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

//trim trimEnd trimStart
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

//valueOf to return primitive value of string
const stringObj1 = new String('foo');

console.log(stringObj1);
// Expected output: String { "foo" }

console.log(stringObj1.valueOf());
// Expected output: "foo"




