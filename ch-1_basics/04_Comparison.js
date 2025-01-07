// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

//for efficiency the data types should be same 
//so that the output will be predictable 


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//the reason is thath an equality check == and comparisons 
// < > >= <= works differently
// comparisons convert bull to a number , treating as 0
// that's why (3) null>=0 is true and
// null > 0 is false 

//type conversion is done 
//same problem is with undefined 

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//strict check ===
//checks the value as well as the data-type 

console.log("2" === 2);




