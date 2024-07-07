const name = "muskan"
const repoCnt = 5

// console.log(name + repoCnt + "value");

//instead of + we use `` back ticks we can use string inter polation 

console.log(`hello my name is ${name} and my repo cnt is ${repoCnt}`);

//declaring the string 

const gameName = new String('muskan-dhaka')

//string is an object it is a key value pairs 

//we have different methods in string 

console.log(gameName[0]);
console.log(gameName.__proto__); //returns the prototype of the variabe {} ->object 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4); //0-3 //cannot give negative values here 
console.log(newString);

const anotherString = gameName.slice(0,5); //can also give negative values here 
console.log(anotherString);

//trim and replace 
//trim works on white spaces and on new line characters only 
const newStringOne = "    muskan     ";
console.log(newStringOne);
console.log(newStringOne.trim());
//trim js on mdn 

//replace 

const url = "https://muskan.com/muskan%20dhaka"

console.log(url);



console.log(url.replace('%20','-')); //replace %20 with - 

console.log(url.includes('muskan'));
console.log(url.includes('abc'));


//convert to array based on something 

console.log(gameName.split('-'));



