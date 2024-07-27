const user = {
    username : "muskan",
    price : 999,


welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
    console.log(this);    
}

}

// user.welcomeMessage();

// user.username = "sam"; //context changed 
// user.welcomeMessage();

console.log(this); //op {} empty object this is pointing to empty 


//when we run the above statement in browser it will show us window 
//as window is the most global object present for the browser 





// function chai () {
//     let username = "muskan";
//     console.log(this); //print so many values 
//     console.log(this.username); //it will print undefined  
// }
// chai();


//DIFFERENT METHODS TO DECALRE FUNCTIONS 

// const chai = function () {
//     let username = "muskan";
//     console.log(this.username); //undefined 
// }
 //using arrow functions 


const chai =  () => {
    let username = "muskan";
    console.log(this); //{} empty will appear instead of many values 
    console.log(this.username); //undefined 
}





// chai();

//++++++++++ARROW FUNCTIONS ++++++++++++++

//syntax : () => {}


// basic arrow function 

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,5));


//IMPLICIT RETURN ARROW FUNCTION
// const addTwo = (num1,num2) =>   num1+num2;
// console.log(addTwo(3,5));

//or 

// const addTwo = (num1,num2) =>   (num1+num2);
// console.log(addTwo(3,5));


//returning an object 

const addTwo = (num1,num2) =>  ( {username : "muskan"} );
console.log(addTwo(3,5));



