
//using map callback function 
myNumbers = [1,2,3,4,5,6,7,8,9,10]
//map automatically returns the values if we do not open the scope  
const newNumbers = myNumbers.map((num) => {
return num+10; //returns undefined if we do not write 'return' for explicit return 
}); 

console.log(myNumbers);
console.log(newNumbers);


//doing the same thing but with forEach 
const newNum2 = [];
myNumbers.forEach( (num) => {
    newNum2.push(num+10);
});
console.log(newNum2);



//CHAINING 
//using different methods directly 


//const newNums = myNumbers.map().map().map().filter()....


const newNums = myNumbers
.map((num) => num * 10 )
.map((num) => num+1)
.filter((num)=> num >= 40);

console.log(newNums); //41 51 62 71 81 91 101 

