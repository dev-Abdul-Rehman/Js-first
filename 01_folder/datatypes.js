"use strict" // treat all JS code as newer version

// These are primitive data types (immuteable) means that there value cannot be changed when declared. 
const number = 12345;
let string = "Hi, Here is a textual data"
let boolean = true // or false
let undefined;
let empty = null;
let bigInteger = BigInt;
let uniqueNess = Symbol  

// This is non primitive data type are (muteable) means that there value can be changed when declare.
let obj = {} ;

// typeof is a operator which we identify which data type we use
console.table([number,string,boolean, undefined,empty,bigInteger,obj])
console.table([typeof number, typeof string,typeof boolean , typeof undefined, typeof empty, typeof bigInteger, typeof sym, typeof obj ])

/* 
Summary:
There are basically two data types in javascript primitive data types and non-primitive data types.
Primitive means immuteable that there value cannot be changed. These are
1. Numbers
2. Strings
3. Boolean
4. Bigint
5. Symbol
6. Undefined
7. Null
Non primitive means muteable that there value can be changed. These are
1. Objects
2. Arrays
3. Functions
*/