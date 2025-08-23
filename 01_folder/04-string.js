/*Strings are for storing text
Strings are written with quotes

Extracting String Characters:
There are 4 methods for extracting string characters:

1.The at(position) Method
2.The charAt(position) Method
3.The charCodeAt(position) Method
4.Using property access [] like in arrays


Extracting String Parts:
There are 3 methods for extracting a part of a string:

1.slice(start, end)
2.substring(start, end)
3.substr(start, length)


Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():

trim() to remove white spaces
split() convert string into array
includes check the word is present in string return true or false
indexOf() give the first occurance index number
replace() replace the word of first occurance
replaceAll() replace all word
*/
const  str1 = "Jone Doe";
console.log(str1.toUpperCase()); // all characters will be transformed to uppercase
console.log(str1.toLowerCase()); // all characters will be transformed to lowercase
console.log(str1.charAt(0)); // return the character at the specified position in our case 0;
console.log(str1.charCodeAt(1)); // return the unicode number of the character
console.log(str1.includes("Jone"));
console.log(str1.split(" ")); // convert the string into an array and take separator (e.g, comma, space, quotes etc)
console.log(str1.slice(0,4)); // return the string we desire in our case start from 0 and end 4 end is not included (Jone is the output)



// and many more methods are available according to use case








