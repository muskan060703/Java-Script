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

//variables are passed by value and objects are passed by reference 



function func (myObj) {
    myObj.make="toyota";
}

const obj1 = {
    make : "honda"
}

console.log(obj1);
func(obj1);
console.log(obj1);



//changes made in myarr will be reflected as it is passed by reference 
function arr(myarr1) {
    myarr1[0] = 40;
}

let myarr = [2,3];

console.log(myarr);
arr(myarr);
console.log(myarr);


// using functional expressions 

//these are anonymous funcitons means they do not have any name but they are stored in some variables 
const f1 = function(number) {
    return number*number;
}


let ans = f1(5);
console.log(ans);
console.log(typeof(f1)); //function 

//function with name in a vairable 

const f2 = function fact(num) {
    return num*num;
}

console.log(f2(5));



//the innermost scope takes the highest precedence, while the outermost scope takes the lowest
// This is the scope chain. The first on the chain is the innermost scope, and the last is the outermost scope.



//closures : =>
    // avaScript allows for the nesting of functions 
    // and grants the inner function full access to all the variables and functions defined inside the outer function 



    const pet = function(name) {
        const n = function() {
            return name;
        }
        return n;
    }

    const mypet = pet("dog"); // it is a function reference it returned a function n then to call n we have to write mypet()
    console.log(mypet());
    

    //.argument property of function 
    // => The arguments of a function are maintained in an array-like object.

    function sum() {
        let s = 0;
        for(let i = 0; i < arguments.length; i++)
        {
            s+=arguments[i];
        }
        return s;
    }

    console.log(sum(1,2));
    console.log(sum(1,2,4,5));
    console.log(sum(87,4,5,6,7,8,9,109));
    
    
    //converting the arguments into real array to use all the array properties 
    function conversion() {
        const a  = Array.prototype.slice(arguments);
        console.log(a);
    }
    conversion(2,3,4,5)