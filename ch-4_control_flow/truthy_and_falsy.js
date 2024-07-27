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

