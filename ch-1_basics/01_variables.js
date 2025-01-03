// const accountId=1233;
// let emailId="muskan@gmail.com"
// var accountPwd="12345"
// let accountState; //the value of this right now is undefined 
// accountCity="chd"

// // accountId=3; //not_allowed 
// emailId="abc@gmail.com"
// accountPwd="hello"
// accountCity="goa"
// console.log(accountId);

// //prefer not to use var 
// //because of issues in block scope and functional scope 

// console.table([emailId,accountId,accountPwd,accountCity,accountState]);




const accountId = 144553;  //the value cannot be changed 
//value is locked in const 

/* there are two ways to declare variables 
let , var  
var -> scope problem (block scope) */

let accountEmail = "muskandhaka0@gmail.com";
var accountPwd = "12345";
accountCity = "Chandigarh"; // we can declare a variable like this way 
let accountState ;


//accountId = 11111; //not allowed in js as we are changing the value of constant 

console.log(accountId);
console.log(accountEmail);
console.log(accountPwd);
console.log(accountCity);
accountEmail = "user2@gmail.com";
accountPwd = "22222";
accountCity = "mohali";

console.log(accountEmail);
console.log(accountPwd);
console.log(accountCity);


//table  method of console 
console.table([accountEmail, accountId, accountPwd, accountCity]);
console.log(accountState);




