// const user = {
//     username : "muskan",
//     price : 999,


// welcomeMessage: function() {
//     console.log(`${this.username}, welcome to website`);
//     console.log(this);    
// }

// }

// // user.welcomeMessage();

// // user.username = "sam"; //context changed 
// // user.welcomeMessage();

// console.log(this); //op {} empty object this is pointing to empty 


// //when we run the above statement in browser it will show us window 
// //as window is the most global object present for the browser 





// // function chai () {
// //     let username = "muskan";
// //     console.log(this); //print so many values 
// //     console.log(this.username); //it will print undefined  
// // }
// // chai();


// //DIFFERENT METHODS TO DECALRE FUNCTIONS 

// // const chai = function () {
// //     let username = "muskan";
// //     console.log(this.username); //undefined 
// // }
//  //using arrow functions 


// const chai =  () => {
//     let username = "muskan";
//     console.log(this); //{} empty will appear instead of many values 
//     console.log(this.username); //undefined 
// }





// // chai();

// //++++++++++ARROW FUNCTIONS ++++++++++++++

// //syntax : () => {}


// // basic arrow function 

// // const addTwo = (num1,num2) => {
// //     return num1+num2;
// // }
// // console.log(addTwo(3,5));


// //IMPLICIT RETURN ARROW FUNCTION
// // const addTwo = (num1,num2) =>   num1+num2;
// // console.log(addTwo(3,5));

// //or 

// // const addTwo = (num1,num2) =>   (num1+num2);
// // console.log(addTwo(3,5));


// //returning an object 

// const addTwo = (num1,num2) =>  ( {username : "muskan"} );
// console.log(addTwo(3,5));



//---------------ARROW FUNCTION---------------
// and this keyword 

// this -> points to current context 

const user = {
    username : "user01",
    price : 999,
    
    welcomeMessgae : function() {
        console.log(`${this.username} ,welcome to website`); //this refers to current context 
        console.log(this); //prints the current context 
        
    }
}


// user.welcomeMessgae();

// user.username = "sam"; // values are changed as we have not hard coded the values 
// user.welcomeMessgae();


// console.log(this); // {} -> empty 
// this refers to empty object 



//-------Arrow function -----------------


// function one () {
//     let username = "one";
//     console.log(this);
//     //console.log(this.username); //undefined 
    
    
// }

// one();



// const one = function () {
//     let username = "one";
//     console.log(this.username); //undefined 
// }
// one();

// const one = () => {
//     let username = "one";
//     console.log(this.username); //undefined 
//     console.log(this); //{}
// }

// one();

//basic syntax of arrow function 
// (paramteres) => { return }


//basic arrow function 


// const addTwo  = (num1,num2) => {
//     return num1+num2;
// }

// console.log(addTwo(3,4)); //7 



// implicit return in arrow function 
// for this we don't need to add the paranthesis 
//used for one line statements and no need to write return as well 

// const addTwo = (num1, num2) => num1+num2;
// console.log(addTwo(5,4));

// if the text is rapped inside the curly brackets {} then you have to write "return" keyword 
//otherwise no need to write return you can also wrap the answr into () the round brackets 


// const addTwo = (num1,num2) => (num1+num2); //used in rect most of the times 
// console.log(addTwo(2,5));


//explicit return is : when you use "return keyword"  explicitly 



// returning an object 

const addTwo = (num1,num2) => ({username:"user1"}); //wrap the object in () paranthesis 
console.log(addTwo(2,5)); //undefined 


