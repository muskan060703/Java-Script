//*********FUNTION*********** */
 // KEYWORD -> function

 function sayMyName () {
console.log("M");
console.log("U");
console.log("S");
console.log("K");
console.log("A");
console.log("N");
 }

 sayMyName(); //excuted 

//  function addTwoNumbers(number1, number2) {  //number1, number2 are parameters 
//     console.log(number1+number2);
//  }



 addTwoNumbers(); //NAN NOT A NUMBER 

 addTwoNumbers(3,"4") //34 treat them as a string

 addTwoNumbers(3,"a") //3a 3,a are arguments 
 addTwoNumbers(3,null) //3

 addTwoNumbers(3,5); // 8


 function addTwoNumbers(number1, number2) {  //number1, number2 are parameters 
    let res = number1+number2;
    return res;
 }

 const result = addTwoNumbers(10,2);
//  console.log("Result: ",result); // o/p will be undefined 

function loginUserMessage(username = "sam") { //default value
    return `${username} just logged in`
}
 console.log(loginUserMessage("muskan"));
console.log(loginUserMessage()); //undefined 




