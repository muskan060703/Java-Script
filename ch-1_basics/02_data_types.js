"use strict"; //treats all JS code as newer version of JS 
//new standards are followed 


//alert(3+3) we are using nodeJS not browser 
//code needs to be readable 

console.log(3+3); //code readability should be high 

//original documentation is at tc39.es/ecma 
//it provides standards 
//other documentation is mdn which is provided by firefox 

let name="muskan" //string data_type
let age=20 //number data_type 
let isLoggedIn =true //boolean 
let tem=null;


// PREMITIVE DATA-TYPES 

//number ->range -> 2 power 53 
//bigint 
//string " " or ''
//boolean -> true or false 
//null //it is a stand alone value in JS ->it is a representation of empty value 
//undefined ->when value is not assigned 
// symbol ->used in react mostly to find the unique components 

//OBJECT 


//typeof
console.log(typeof"muskan");
console.log(typeof age);

console.log(typeof null); //object 
console.log(typeof undefined); //undefined 

/* All primitive types, except null, can be tested by the typeof operator. 
typeof null returns "object", so one has to use === null to test for null. */


/* All primitive types, except null and undefined, 
have their corresponding object wrapper types, 
which provide useful methods for working with the primitive values.  */

console.dir(age); //with this you can get the value of the particular primitive type but for the functions this dir method works differently 

//The optional chaining ( ?. ) operator accesses an object's property or calls a function.

//accessing a property on null or undefined throws a TypeError exception, 
// which necessitates the introduction of the optional chaining operator.


// undefined indicates the absence of a value, while null indicates
//  the absence of an object (which could also make up an excuse for typeof null === "object"). 
// The language usually defaults to undefined when something is devoid of a value

//null is a keyword, but undefined is a normal identifier that happens to be a global property

/* number => 

    he Number type is a double-precision 64-bit binary format IEEE 754 value. 
    It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) and 21023 × (2 - 2-52) 
    (Number.MAX_VALUE) as well as negative floating-point numbers of the same magnitude, 
    but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to
     253 − 1 (Number.MAX_SAFE_INTEGER). 


    Double precision means the numbers takes twice the word-length to store. 
    On a 32-bit processor, the words are all 32 bits, so doubles are 64 bits.



    => FUNCTION WHICH IS USED TO CHECK THAT THE NUMBER GIVEN BY THE USER IS IN THE RANGE OR NOT  IS : 
    Number.isSafeInteger()

    checks for the integers only 

    The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.
    */

    console.log(Number.isSafeInteger(55)); // true 
    console.log(Number.isSafeInteger(3.1)); //false 

    /*values outside the range are automatically converted :

    +ve value > than Number.MAX_VALUE -> converted into +Infinity 
    -ve value < than -Number.MAX_VALUE -> converted into -Infinity 
    +ve value < than Number.MIN_VALUE -> converted into +0
    -ve value > than -Number.MAX_VALUE -> converted into -0

    */


    /* NaN (not a number)
    NaN ("Not a Number") is a special kind of number value that's typically encountered when the 
    result of an arithmetic operation cannot be expressed as a number. 
    It is also the only value in JavaScript that is not equal to itself.

*/





    console.log(isNaN(2));

    
    


 












