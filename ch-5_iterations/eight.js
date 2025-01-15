//reduce in js 


 /* 

 const initialValue = 0;
 const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 
  initialValue,
);

// currentValue -> current value of an array 
// accumulator is an empty value 
//initialvalue for the first time go to the accumulator 
after that the accumulator + currentValue value coming from this fo to -> accumulator 
// 

*/


const myNums = [1,2,3];
//using simple function 
const myTotal = myNums.reduce(function(acc,currval) {
    console.log(`accumulator : ${acc} and current value : ${currval}`);
return acc+currval;
},0);// 0 is the initial value of the accumulator , that is given after the function definition 
console.log(myTotal); // 6 



//writing reduce using arrow function 

const myTotal01 = myNums.reduce((acc,currVal)=>acc+currVal,0);
console.log(myTotal01);



const shoppingCart = [
    {
        itemName : "js Course",
        price: 2999
    },
    {
        itemName : "python Course",
        price : 999
    },
    {
        itemName : "mobile dev Course",
        price : 5999
    },
    {
        itemName : "data science Course",
        price : 12999
    }
]


//add the prices of the shopping cart 


const cartBill = shoppingCart.reduce((acc,course)=>
    {
        console.log(`${course.itemName} : ${course.price}`);
        
        return acc+course.price;
    },0);


console.log(cartBill);
