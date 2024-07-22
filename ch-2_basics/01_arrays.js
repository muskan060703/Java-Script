//array

//arrays are always written in square brackets 

const myArr = [0,1,2,3,4,5]
//the datatype of each element may or may not be same in an array 

//javascript arrays are resizable and can contain mix of different data-types 

//js arrays are not associative 
//means that they cannot be accessed using arbitary strings as indexes 
//indexes start from 0 
//javascript arrays create a shallow copies if they are copied 
//shallow copy is a copy who shares the same reference 
//deep copies are those who do not share the same refernce in the memory 

console.log(myArr[0]);

const myHeros=["nagraj",'shaktiman'];

const myArr2=new Array(1,2,3,4);


//ARRAY METHODS 

// myArr.push(78);

// console.log(myArr);

// myArr.push(66);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

myArr.unshift(0);
//one more zero in the staring is added 
//unshift is used to insert an element in the start of an array all other elements will be shifted rightward

console.log(myArr);

myArr.shift();
//act as a pop it will pop the element from the front of an array 

console.log(myArr);

//the following methods will give the answer as true or false 

console.log(myArr.includes(8)); //false

// index will provide the index of the given element 

console.log(myArr.indexOf(9));      //-1 
console.log(myArr.indexOf(2));      //2 //zero based indexing


const newArr = myArr.join(); 
//it adds all the elements of an array into a string saperated by the specified saperator string 


console.log(myArr);

console.log(newArr);

console.log(typeof newArr);

//slice and splice 

console.log("A",myArr); 

const myn1 = myArr.slice(1,3);
//it returns the copy of the section of an array
//here 1 index is included and 3 is not included 

console.log(myn1);
console.log("B",myArr); 

const myn2 = myArr.splice(1,3);
//in splice the portion of that array will be removed and in slice the array portion will be copied 
//original array will be manipulated 
console.log(myn2);
console.log("C",myArr); 

