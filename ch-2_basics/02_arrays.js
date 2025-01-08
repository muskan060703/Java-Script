// const marvel_heros = ["thor","iron-man","spiderman"]
// const dc_heros = ["superman","flash","batman"]

// // marvel_heros.push(dc_heros);

// //arrays are not merged here 
// //insted it will become array inside an array 

// // console.log(marvel_heros);
// // console.log(marvel_heros[3]);
// // console.log(marvel_heros[3][1]);

// //CONCAT METHOD 
// //concat combines two arrays and returns a new array that's why we need a new variable to store it 
// //new array is created 

// // const all_heros = marvel_heros.concat(dc_heros);

// // console.log(all_heros);

// // +++++++++++++SPREAD METHOD ++++++++++++++++++++++
// //there is another method insted of using concat we have SPREAD METHOD 

// //it will spread the data 
// //make the every element of each array as individual identity
// //we can add as many as array we want here 
// const all_heros = [...marvel_heros, ...dc_heros]

// console.log(all_heros);

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// //FLAT : returns a new array with all sub array elements concatenated into it recursively
// //up to the specific depth. 
// //flat take the depth as a parameter 
// const real_another_array   = anotherArray.flat(Infinity);

// console.log(real_another_array);


// console.log(Array.isArray("Muskan"));
// //converting into array 
// console.log(Array.from("Muskan"));


// console.log(Array.from({name:"Muskan"})); //it will return empty array 
// //it directly cannot convert objects into array 
// //it will ask for what type of array we want 
// // a key array or a value array 

// //the above is interesting case 


// let score1 = 100
// let score2 = 200
// let score3 = 300


// console.log(Array.of(score1,score2,score3)); //of returns a new array from a set of elements 




//array 

const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"]
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3]);
 

//marvel_heros.concat(dc_heros);
//console.log(marvel_heros);


//const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

//spread 

const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);


const number = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = number.flat(Infinity); // flats the number up to infinity depth 
// it will spread out the values that are coming from another array 
console.log(number);
console.log(real_another_array);


// creating an array from other types 
console.log(Array.from("username"));


console.log(Array.from({name : "username"})); // return an empty array 
// we need to specify that by using which value you should make an array 

let score1 = 100;
let score2 = 200;
let score3 = 300 ;



// of -> returns a new element from the set of elements 


console.log(Array.of(score1,score2,score3));


