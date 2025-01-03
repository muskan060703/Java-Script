// let score = "33abc"

// console.log(typeof(score));

// let valinNum = Number(score)
// console.log(typeof valinNum)
// console.log(valinNum) //gives NaN it is also a special type 

// let s = null
// let num = Number(s)
// console.log(num); //0
// console.log(typeof num ); 

// let s = undefined 
// let num = Number(s)
// console.log(num);   //NaN
// console.log(typeof num );



// Notes
/* 
"33"=>33
"33abc"=NaN (Not a Number)
true=>1
false=>0
*/


// let is_logged_in = 1

// let bool_login = Boolean(is_logged_in)

// console.log(typeof bool_login);
// console.log(bool_login);

// let is_logged_in = ""

// let bool_login = Boolean(is_logged_in)

// console.log(typeof bool_login);
// console.log(bool_login);

// let is_logged_in = "muskan"

// let bool_login = Boolean(is_logged_in)

// console.log(typeof bool_login);
// console.log(bool_login);


// 1->true
//0->false
//""->false
//"abc"->true

// let sumnum=22
// let str=String(sumnum)
// console.log(str);
// console.log(typeof str);

// *****************OPERATIONS***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " muskan"
let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCnt = 100
gameCnt++;
console.log(gameCnt);

//prefix and postfix value incrementation 
//prefix and postfix js mdn (link)

/*If used postfix, with operator after operand (for example, x++),
 the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), 
the increment operator increments and returns the value after incrementing. */












//=======================REVIEW AGAIN==============================================================================================



let score = "33abc" ;
console.log(typeof(score)); //output of this is "number" which is in lower case 
//or
console.log(typeof score); //number is in lowe case 
//taking one more variable 
let score2 = "33";
console.log( typeof score2); //output is string here
let valueInNumber = Number(score); //most of the datatypes have capital starting N in Number (it will convert the value in score into 
// number and store it in valueInNumber )
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN :=> not a number 

//----------in case of null -> Number(null)

let score3 = null;
console.log(score3); //null
console.log(typeof(score3)); //object 
let valueInScore3 = Number(score3);
console.log(valueInScore3); //0 


//----------------in case of undefined -> Number(undefined)

let score4 = undefined;
console.log(score4); //undefined 
console.log(typeof(score4)); //undefined 
let valueInScore4 = Number(score4);
console.log(valueInScore4); //NaN 



//-----in case of boolean true/ false -> Number(true/false)


let score5 = true;
console.log(score5); //true
console.log(typeof(score5)); //boolean
let valueInScore5 = Number(score5); 
console.log(valueInScore5); //1

//-----------in case of string -> Number(string)

let score6 = "abc"
console.log(score6); //abc
console.log(typeof(score6)); //string
let valueInScore6 = Number(score6);
console.log(valueInScore6); //NaN 



 
//------------converting a number into a boolean 
// ------------ 1 -> true and 0 -> false  and in case of empty stirng "" -> false 



let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true 

//-------------in case of empty string "" -> false

let stringLog = "";
let boolStringLogged = Boolean(stringLog);
console.log(boolStringLogged); //false 


//-------------in case of some value in a string -> true 
let stringLogVal = "abc";
let boolLogVal = Boolean(stringLogVal);
console.log(boolLogVal); //true 


//--------------------conversion into string-----------------------------

let number01 = 33;
let stringNum1 = String(number01);
console.log(stringNum1); //33
console.log(typeof(stringNum1)); //string 



//most of the time browsers gives us the values into string 


/* 
Numbers and the '+' operator
In expressions involving numeric and string values with the + operator, 
JavaScript converts numeric values to strings. For example, consider the following statements:


x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"



With all other operators, JavaScript does not convert numeric values to strings. For example:


"37" - 7; // 30
"37" * 7; // 259
*/
















