// # PREMETIVE (CALL BY VALUE)

// 7 types: String Number Boolean NULL undefined 
//Symbol (to make the value unique ) BigInt (scientific values )

// javascript is dynamically typed  language 

const score = 100 
const scoreValue = 10.3

const isLoggedIn = false

const outsideTemp = null 

let userEmail ; //undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 23445678934567345673456783456789n;

console.log(typeof bigNumber);


// # NON PREMITIVE (CALL BY REFERENCE )

//Array Objects Functions 

const heros = ["shaktiman", "naagraj", "dogs"];

//objects are under curly brackets {}
//we can give them name or not that is our choice 
//they are stored in key-value pair

 let myObj= {
    name:"muskan",
    age: 20,
}

const myfun  = function () {
console.log("hello-world");
}

console.log(typeof myfun);


/* 
-------------------------------
| type of val |    result     |
-------------------------------
| Undefined   |   "undefined" |
| Null        |   "Object"    |
| Boolean     |   "boolean"   |
| Number      |   "number"    |
| String      |   |string"    |
|Object       |   "object"    |
| object-func |   "Function"  |
|tion         |               |
-------------------------------


*/

