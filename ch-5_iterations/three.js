// for of loop 

//these are array specific loops

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


//Maps (something like array) 


//map itself is an object 

const map = new Map();
//it is a key value pair and learns the insertion order of the keys 

//no duplicacy 
//uniqueness 
map.set('IN',"India");
map.set('USA', "United States of America");
map.set('FR',"France");
map.set('IN',"India");

console.log(map);

for (const key of map) {
    console.log(key);
}
//o/p
/*[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ] */

for (const [key,value] of map) {
    console.log(key,"-",value);
}

/*IN - India
USA - United States of America
FR - France */

const myobject = {
    'game1':"NFS",
    'game2':"Spiderman"
}

// for (const [key,value] of myobject) {
//     console.log(key,"-",value);
// }
//here error will come that objects are not iterable using for-of
