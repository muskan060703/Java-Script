// const myObject = {
//     js : "Javascript",
//     cpp : "C++",
//     rb : "ruby",
//     swift : "swift by apple"
// }

// //to iterate objects we have for in loop 

// for (const key in myObject) {
//     console.log(key);
// }
// /*js
// cpp
// rb
// swift */

// for (const key in myObject) {
//     console.log(myObject[key]);
// }
//  /*Javascript
// C++
// ruby
// swift by apple */

// for (const key in myObject) {
//     console.log(`${key}  shortcut is for ${myObject[key]} `);
// }

// /*js  shortcut is for Javascript 
// cpp  shortcut is for C++ 
// rb  shortcut is for ruby 
// swift  shortcut is for swift by apple  */


// const programming = ["js","rb","py","java","cpp"]


// for (const key in programming) {
//   console.log(key);
// }
// /*
// 0
// 1
// 2
// 3
// 4 */

// for (const key in programming) {
//     console.log(programming[key]);
//   }
//   /*
// js
// rb
// py
// java
// cpp */




const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

//to iterate on the objects we use for in loop 


for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    console.log(`${key} for ${myObject[key]}`);
    
}


const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
    console.log(key); // 01 2 3 4 we will get the indexes 

    console.log(`index of ${programming[key]} is : ${key}`);
    
    
}

for (const element of programming) {
    console.log(element); //prints direct values 
}


//for_of 
/*
=>The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
=>does not work for objects

=>for (variable of iterable)
  statement

=> A for...of loop operates on the values sourced from an iterable one by one in sequential order.
 */



const elements = [1,2,3,4];
for (const ele of elements) {
    console.log(ele);  
}