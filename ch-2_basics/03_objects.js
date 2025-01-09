// /* we have two methods to declare an object 
// 1. literal 
// 2. constructor 
// */

// //singleton :- only made when an object is made like a constructor only but not literal 

// //object consists of key-value pair 

// //object literal 
//  // constructor method -> Object.create

//  const mySym = Symbol("Key1");

// const JsUser = {   
//     name : "Muskan", //by default the key name is a string 
//     "full name": "Muskan Dhaka",  //there is no chance to access this value throught . (dot)
//     [mySym] : "mykey1", //[] use square brackets to declare a symbol in an object 
//     age : 21,
//     location : "Chandigarh",
//     email : "muskan123@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday","Saturday"]
// }; 

// //Accessing objects 

// console.log(JsUser.email); 
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

// JsUser.email = "muskan22@gmail.com";
// //to lock the values 

// //freeze method 

// // Object.freeze(JsUser);
//  //now we are not able to make changes 

//  JsUser.email = "helloworld12@gmail.com";

//  console.log(JsUser);


//  //adding functions in an object 

//  JsUser.greeting = function() {
//     console.log("hello js user");
//  }
 
//  console.log(JsUser.greeting); //function is not executed only the reference has came 

//  console.log(JsUser.greeting()); //output will be hello js user

//  JsUser.greeting2 = function() {
//     console.log(`hello js user,${this["full name"]}`); //`` for string interpolation
//  }

//  console.log(JsUser.greeting2()); 


 
// objects literals 
// we have 2 ways to declare an object 
// 1. literals
//2. constructors 
// -> singleton -> when an object is created with the help of object it creates singleton object 


//declaring symbol 
const mySym = Symbol("key1");

// -. singleton object is created : -> using :-> Object.create
const JsUser = {
   name : "muskan", // by default system process the name as "name" it will treat it as a string 
   "full name " : "muskan dhaka",
   [mySym] : "my key 1 ", // to use symbol is the key we should declare it in [] square brackets 
   age : 21,
   location : "mohali",
   email: "muskandhaka@gmail.com",
   isLoggedIn : false,
   lastLoginDays : ["monday","saturday"]
}
//ojects have key value pairs 



//ways to access JS object properties 
console.log(JsUser.name);

console.log(JsUser["email"]);

console.log(JsUser["full name "]);
console.log(typeof JsUser[mySym]); // syntax to access the symbol in objects 

JsUser.email = "username.com"; // changing the value in an object 
//Object.freeze(JsUser);  // lock the object after this the user was not able to make changes in the object 



// functions in javascript 

JsUser.greeting = function()
{
   console.log("hello js user");
   
}

console.log(JsUser.greeting); // we will get the reference of a function 
console.log(JsUser.greeting());



JsUser.greeting2 = function() {
   console.log(`hello js user : ${this.name}`);
}

console.log(JsUser.greeting2());

