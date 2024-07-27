// Immediately invoked function Expressions (IIFE)

//immediately invoking the function when it is made 
function chai () {
    console.log(`DB CONNECTED`);
}
chai(); //normal funciton 

//using IIFE
(function chai () { //this will not execute in these kind of situation the function do not know where needs to be ended so we use ; at the end 
    //named IIFE
    console.log(`DB CONNECTED`);
})(); //here ; is to end the function

// () //function definition () calling 
// (function definition)()
//we use IIFE because  of the pollution of the global  scope variables 

//we can also write it as an arrow function 

// ( () => { 
//     console.log(`DB CONNECTED`);
// })()

//passing arguments 
( (name) => { 
    console.log(`DB CONNECTED ${name}`);
})('Muskan') 



