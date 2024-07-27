// 3 keywordds let var const 
var c = 300; //global scope  
if(true) {
let a = 10; //block scope 
const b = 20;
var c = 30;
}


// console.log(a); //error
// console.log(b); //error
console.log(c); //30 out of scope 

//curly braces are scopes { }

 //nested scope

 function one() {
    const username = "muskan" ;

    function two() {
    const website = "yt";
    console.log(username);
    }
    // console.log(website); //it will not run 
    two() ;
 }
//  one(); 

if(true) {
    const username = "muskan";
    if(username == "muskan") {
        const website = "yt";
        console.log(username+" " +website);
    }
    // console.log(website);
}
// console.log(username);



// ++++++++++++++++INTERESTING +++++++++++++++++++++

function addone(num) { //basic funciton 
    return num+1;
}

console.log(addone(5)); //if we use it before function declaration then it will run normally

const addTwo =function(num) { //we call this as expression
    return num+2;
}

console.log(addTwo(5)); //if we use it before function declaration then it will give error 
//this thing is known as hoisting in js 
//execution context 



