//we have some values that are always true and some 
//values that are always false they are known as 
//truthy or falsy values 


const userEmail = "m@gmail.com"



if(userEmail) { 
    console.log("got user email");
}
else {
    console.log("not found ");
}

//falsey values -> false, 0, -0, BigInt, "null string", null, undefined, NaN(not a number)

//truthy values except these eg. : -> "0"(0 in string), 'false'," ", [//empty-array], {//empty object}, function() {//empty funtion } 


//checking for array is empty or not 
let user = []
if(user.length == 0) {
    console.log("array is empty");
}

//checking for object is empty of not 

const myobj = {}
if(Object.keys(myobj).length == 0) {
console.log("object is empty");
}

//some other on console 
// false == 0 ->true
//fasle == "" ->true
//0 == "" ->true


//NULLISH COALSCING OPERATOR (??) : totally based on null , undefined 

let val1;
val1 = 5 ?? 10

console.log(val1); //5
console.log(val1); //5

//we use ?? because sometimes when we call from database 
// we dont get response directly 
//instead
//we get 2 values 
//so there are chances of getting null or undefined values
//so code structure can find difficulty 
//so for these type of cases ?? is made


val1 = null ?? 10 
console.log(val1); //10


val1 = null ?? undefined
console.log(val1); //undefined 


val1 = undefined ?? 10 
console.log(val1); //10

val1 = null ?? 10 ?? 15 //first value will be assigned 
console.log(val1); //10


// null COALSCING OPERATOR and ternary operator they both are different 

//ternary operator 
//smaller if else 
// syntax :
//condition ? true : false ;

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80") : console.log("greater than 80");







