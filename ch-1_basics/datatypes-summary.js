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


//***********MEMORY*********************

//WE HAVE TWO TYPES OF MEMORY 
//STACK (PREMITIVE) -copy
//HEAP  (NON-PREMITIVE) - reference 

let myname="muskan"

let another_name=myname
another_name="dhaka";
console.log(myname);
console.log(another_name);

let user = {
    email:"muskan",
    upi:"abc"
}

let usertwo=user

usertwo.email = "xyz"
console.log(user.email);
console.log(usertwo.email);




//Primitive datatypes or call by value 

//7 types 
//string number boolean null undefined symbol (to make the value unique) bigInt  


//non primitive datatypes or reference type 

// arrays, objects, functions 


//js is dynamically typed language 

const id1 = Symbol('123');

const id2 = Symbol('123')

console.log(id1 == id2); //false 
//the value is same but the ids are unique in nature 


const bigInt = 654613546315461453654675467n;
//to make anumber bigInt we represtnt     n     in last 




const hero = ["A","B","c"]; //array []

const myobj = 
{
    name :"muskan",
    age : 21,

}



const myfunction = function() {
console.log("hello");

} //object function 


//typef function is used to get datatype 

console.log(typeof myfunction);
console.log(typeof myobj);
console.log(typeof hero); 



