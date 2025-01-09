// //*********FUNTION*********** */
//  // KEYWORD -> function

//  function sayMyName () {
// console.log("M");
// console.log("U");
// console.log("S");
// console.log("K");
// console.log("A");
// console.log("N");
//  }

//  sayMyName(); //excuted 

// //  function addTwoNumbers(number1, number2) {  //number1, number2 are parameters 
// //     console.log(number1+number2);
// //  }



//  addTwoNumbers(); //NAN NOT A NUMBER 

//  addTwoNumbers(3,"4") //34 treat them as a string

//  addTwoNumbers(3,"a") //3a 3,a are arguments 
//  addTwoNumbers(3,null) //3

//  addTwoNumbers(3,5); // 8


//  function addTwoNumbers(number1, number2) {  //number1, number2 are parameters 
//     let res = number1+number2;
//     return res;
//  }

//  const result = addTwoNumbers(10,2);
// //  console.log("Result: ",result); // o/p will be undefined 

// function loginUserMessage(username = "sam") { //default value
//     return `${username} just logged in`
// }
//  console.log(loginUserMessage("muskan"));
// console.log(loginUserMessage()); //undefined 



// //when we dont know how many arguments are to be passed
// // eg.  shopping cart 


// function calculatePrice(...num1) { //puts all the values in an array
//     return num1;
// }

// console.log(calculatePrice(299,500,699)); 

// //for this we have rest operator ...

// function cal(val1, val2,...num1) {
//     return num1;
// }

// console.log(cal(200,400,500,2000)); //o/p will be [500,2000]

// //passing objects to the function
// const user = {
//     username : "muskan",
//     price : 199
// }

// function handleObjects(anyobject) {
//     console.log(`username is : ${anyobject.username} and price is ${anyobject.price}`);

// }

// handleObjects(user);

// handleObjects(
//     {
//         username:"Sam",
//         price:399
//     }
// )

// //passing arrays to the functions 

// const newArray = [200,400,100,600]

// function returnSecondValue(getarray) {
//     return getarray[1];
// }

// console.log(returnSecondValue(newArray));

// console.log(returnSecondValue([200,300,500,900]));


//functions 


function myname () {  //definition of a function 
    console.log("user");
    
}

myname(); //function reference myname, function execution myname()

function add(number1, number2) {  //parameters 
    console.log(number1+number2);
    return number1+number2;
    
}

// add(3,3); //arguments 
// add("3",4);
// add(4,"3");
// add(4,"a");
// add(null,null); //0
// add(null,undefined); //NaN
// add(undefined,undefined); //NaN 


const res = add(3,6);
console.log(res);




function loginUserMessage(username )
{
    if(typeof(username) === undefined ) {
        return ` enter username`;
    }
    return `${username} just logged in ....!!!!`;
}

let result2 = loginUserMessage("user1");
console.log(result2);


//shopping cart 
//rest and spread operator ->
//rest means that the item you are getting are free -> ...

function calculateCartPrice(...num1) {
    return num1;
}


console.log(calculateCartPrice(200,400,500));

//rest operator  converts the stream of numbers into an array 


//passing object to a functionn

const user = {
    name : "user01",
    price : 199
}

function handleObj(anyobj) {
console.log(` username is : ${anyobj.name} and price is ${anyobj.price}`);

}

handleObj(user)
handleObj({
    name :"sam",
    price : 399
})

const mynewArray = [200,400,600]

function handleArray ( array) {
console.log(array[1]);

}

handleArray(mynewArray);
