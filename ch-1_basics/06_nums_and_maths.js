//  const score = 400 
// console.log(score);

//  const balance = new Number(100)
//  console.log(balance);

// console.log(balance.toString());

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //2.00 after decimal 2 fixed 2 digits will be shown 

// const otherNumber = 1123.8966;

// console.log(otherNumber.toPrecision(3)); //deciaml se pehle priority after deciaml it will round off the value

// const hundreds = 1000000

// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// //max value and min value 

// Number.MAX_VALUE = 1000 
// Number.MIN_SAFE_INTEGER = -1


// ++++++++++++++++++++    MATHS ++++++++++++++++++++


//by default comes with js 

console.log(Math);
//absolute value 
console.log(Math.abs(-4));

console.log(Math.round(4.3));
console.log(Math.round(4.7));

//floor and ceil

console.log(Math.ceil(4.2));
console.log(Math.floor(3.3));

//min

console.log(Math.min(2,3,4,5));
//max
console.log(Math.max(89,1,2,3));

//random 
//(value always between 0 and 1)
console.log(Math.random());

console.log((Math.random()*10) + 1);

//min and max defination

const min = 10 
const max = 20 

console.log(( Math.floor(Math.random() * (max + min + 1 ))) + min) ;


