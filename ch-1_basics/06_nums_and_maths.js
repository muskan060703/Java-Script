// //  const score = 400 
// // console.log(score);

// //  const balance = new Number(100)
// //  console.log(balance);

// // console.log(balance.toString());

// // console.log(balance.toString().length);
// // console.log(balance.toFixed(2)); //2.00 after decimal 2 fixed 2 digits will be shown 

// // const otherNumber = 1123.8966;

// // console.log(otherNumber.toPrecision(3)); //deciaml se pehle priority after deciaml it will round off the value

// // const hundreds = 1000000

// // console.log(hundreds.toLocaleString());
// // console.log(hundreds.toLocaleString('en-IN'));

// // //max value and min value 

// // Number.MAX_VALUE = 1000 
// // Number.MIN_SAFE_INTEGER = -1


// // ++++++++++++++++++++    MATHS ++++++++++++++++++++


// //by default comes with js 

// console.log(Math);
// //absolute value 
// console.log(Math.abs(-4));

// console.log(Math.round(4.3));
// console.log(Math.round(4.7));

// //floor and ceil

// console.log(Math.ceil(4.2));
// console.log(Math.floor(3.3));

// //min

// console.log(Math.min(2,3,4,5));
// //max
// console.log(Math.max(89,1,2,3));

// //random 
// //(value always between 0 and 1)
// console.log(Math.random());

// console.log((Math.random()*10) + 1);

// //min and max defination

// const min = 10 
// const max = 20 

// console.log(( Math.floor(Math.random() * (max + min + 1 ))) + min) ;


const score = 400
const balance = new Number(1000.9872483478734);
console.log(balance);   // number : 1000 
console.log(score); //400


console.log(typeof(balance.toString())); //string 
console.log(balance.toFixed(2)); // round off the decimal values of a number 

const otherNumber = 123.2966;
console.log(otherNumber.toPrecision(3)); //precise value by rounding off 0-5 -> prev 6-9->next 

const hundreds = 1000000;
console.log(hundreds.toLocaleString());// convert it into comms by default it is in the us format but you can also convert it into indian standard 

console.log(hundreds.toLocaleString('en-IN'));




// max value and min value 

const m = Number.MAX_VALUE;
console.log(m);
let n  = Number.MIN_VALUE;
console.log(m);
console.log(Number.isFinite);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);


//++++++++++++++MATHS+++++++++++++++++++++++++++

console.log(`MATHS`);

console.log(Math); //object 

console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(5.9));
console.log(Math.ceil(4.2));
console.log(Math.floor(5.9));
console.log(Math.sqrt(25));

console.log(Math.min(4,5,1,2));
console.log(Math.max(9,11,5,3));

console.log(Math.random()); // random values between 0 and 1 
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1 )) + min);











