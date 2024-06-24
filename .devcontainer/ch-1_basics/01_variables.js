const accountId=1233;
let emailId="muskan@gmail.com"
var accountPwd="12345"
let accountState; //the value of this right now is undefined 
accountCity="chd"

// accountId=3; //not_allowed 
emailId="abc@gmail.com"
accountPwd="hello"
accountCity="goa"
console.log(accountId);

//prefer not to use var 
//because of issues in block scope and functional scope 

console.table([emailId,accountId,accountPwd,accountCity,accountState]);