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



//------------string----------------
const name1 = "user"
const count = 50 
console.log(name1+count +"vale");

//new way to write ssstring is `` using back ticks 
// with this we can inejct ny vairable within a string 

console.log(`helllo this is ${name1} and count is ${count}`); //-> this is known as string interpolation 

const gameName1 =  new String("pubg"); //we can also decare string using the objects 
console.log(gameName1);

//values are stored in the key-> value pairs 
// idx 0 -> some value 
//idx 1 -> some value and so on...

console.log(gameName1[0]);

//methods in string 

console.log(gameName1.length); 
console.log(gameName1.toUpperCase());
console.log(gameName1.charAt(2));

console.log(gameName1.indexOf('u'));

const newstring1 = gameName1.substring(0,2); //substring methods will ignore the negative value and will makeit positive value 
console.log(newstring1);

const s2 = gameName1.slice(-2,-1); //we can give negative values  then it will start from right to left instead of left to right 
console.log(s2);


// trim 

const s1 = "      username1            ";
console.log(s1);
console.log(s1.trim());

 

//replace 

const url1 = "https://username.com//username%20password "

//replace %20 to - 
console.log(url1.replace('%20','-'));


console.log(url1.includes('username')); //true 



const g1 = new String ('username-userid-password');
console.log(g1.split('-')); //converts the stsring to an array with saperator - 







