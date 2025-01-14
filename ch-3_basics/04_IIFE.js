// // Immediately invoked function Expressions (IIFE)

// //immediately invoking the function when it is made 
// function chai () {
//     console.log(`DB CONNECTED`);
// }
// chai(); //normal funciton 

// //using IIFE
// (function chai () { //this will not execute in these kind of situation the function do not know where needs to be ended so we use ; at the end 
//     //named IIFE
//     console.log(`DB CONNECTED`);
// })(); //here ; is to end the function

// // () //function definition () calling 
// // (function definition)()
// //we use IIFE because  of the pollution of the global  scope variables 

// //we can also write it as an arrow function 

// // ( () => { 
// //     console.log(`DB CONNECTED`);
// // })()

// //passing arguments 
// ( (name) => { 
//     console.log(`DB CONNECTED ${name}`);
// })('Muskan') 


//IIFE 
// immediately invloed function expressions (IIFE)


function one () {
    console.log("db connected");  
}
one();



// definening a function within a block -> () 
(
    function two() {        //we can say that this is a named iffe 
        console.log("db connected");
    }
) (); //call // ; explicitly written to end the code 



// ; is written to stop the context 
// (function definition) (execution call)


//sometimes problem rises because of pollution from the global scope , to remove the variables and everything that is declared in the global 
// scope we use IIFE 

//writing it in the form of arrow function 



(   (name) => {
    console.log(`DB connected ${name}`);        //simple iffe 
    
}   )('user'); //passing an argumnet 



//It is also known as a self-executing anonymous function.


