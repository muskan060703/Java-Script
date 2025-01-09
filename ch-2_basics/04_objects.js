// const tinderUSer = new Object() //on printing {} empty will printed

// tinderUSer.id = "123abc";
// tinderUSer.name = "sammy";
// tinderUSer.isLoggedIn = false;

// console.log(tinderUSer);

// const regularUser = {
//     email : "some@gmail.com",
//     fullname: {
//         userfullname : { //nested objects 
//             firstname : "muskan",
//             lastname : "dhaka"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// //combining the objects 

// const obj1 = {
//     1 : "a",
//     2 : "b"
// }

// const obj2 = {
//     3 : "a",
//     4 : "b"
// }

// const obj3 = {obj1,obj2} // this results to object inside an object it will not merge the objects 
// console.log(obj3);

// //instead we can use same objects and assign 


// //the following will copy the value of all the enumerable own properties from one or more source objects to a target object . returns the target object 

// const obj4 = Object.assign({},obj1,obj2); // we use {} as a first parameter as all the values will be put under this parameter this is optional parameter but you can use as it is a good practice
// //{} is important {} ->target , other are source 
// console.log(obj4);

// //other syntax that we are commonly going to use 
// // spread -> ...
// const obj5 = {...obj1,...obj2};
// console.log(obj5);

// //when the value is arrived from databases 
// //it will come as an array of objects

// //e.g..
// const users = [
//     {
//         id : 1,
//         email : "abc@gmail.com"
//     },
//     {
//         id : 2,
//         email : "two@gmail.com"
//     },
//     {
//         id : 3,
//         email : "three@gmail.com"
//     }
// ]

// console.log(users[1].email);

// console.log(tinderUSer);

// //to get all the keys 

// console.log(Object.keys(tinderUSer)); //the data type of output of this will be an array 

// console.log(Object.values(tinderUSer));

// console.log(Object.entries(tinderUSer)); //every key-value become array it is array inside an array 


// console.log(tinderUSer.hasOwnProperty('isLoggedIn')); //true
// console.log(tinderUSer.hasOwnProperty('isLogged')); //false

// //DESTRUCTURING OF OBJECTS
//  //EG. getting values from react and then destructure them

// const course = {
//     coursename : "js",
//     price : 999,
//     courseInstructor : "hitesh"
// }
// // {the value you want to extract }
// const {courseInstructor} = course ;

// console.log(courseInstructor);

// //we can also give names according to us
// const {courseInstructor : ins} = course;
// console.log(ins); //object destructured 


// //API USE JSON FOR DATA GIVEN BELOW IS STRUCTURE OF JSON
// // {
// //     "name" : "muskan",
// //     "coursename" : "js",
// //     "price" : "free"
// // }
// //in JSON usually keys are string and also their values are also strings 

// //sometimes the api uses array of objects 
// //random user me api famous api  to look for sample resource
// //json formater tool for understanding code 


//const tinderUser = new Object(); // singleton object 
const tinderUser = {} // non singleton object 
console.log(tinderUser); // {} // empty object 
console.log(tinderUser); // {}


//inserting the values in an object 
tinderUser.id = "12345";
tinderUser.name = "sanny";
tinderUser.isLoggedIn = false;


//console.log(tinderUser);


// using object inside an object 
const regularUser = {
    email : "username@gmail.com",
    fullname : { //object
        userfullname : { // object 
            firstname : "user1",
            lastname : "username"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //user1 


//optional chaining  (conditioning)


//combining objects 


const obj1 = {
    1 : "a",
    2 :"b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

//const obj3 = {obj1 , obj2 } // this will create a problem of object inside object it will not combine the obj1 and obj2 
//console.log(obj3);
 

// for combining two objects we use assign method of objects 

// Object.assign();

const obj3 = Object.assign(obj1,obj2); // here obj1 is the target and objt 2 is the source so the values in obj1 are also reflected 
console.log(obj3);
console.log(obj1); // all the values are copied into obj1 and changes are also reflected in obj1 

// there is one more syntax to concatenate two objects 

const obj4 = Object.assign({},obj1,obj2); // {} optional parameter {} empty object as a target where all the sources are combined 

console.log(obj4);



// by using spread method 
//mostly used 
const obj5 = {...obj1,...obj2};
console.log(obj5);



// when we access the data from the database 
// it comes in the format of array - of - objects 
// eg : 
const users = [
    {
        id : 1, 
        email : "username@gmail.com"
    },
    {
        id : 2,
        email : "username2@gmail.com"
    }
]



console.log(users[1].email);


 // accessing keys and values of an object 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // it will return the data in the form of an array  []
console.log(typeof (Object.keys(tinderUser))); // object 
console.log(Object.values(tinderUser));


// entries 
// in this every key - value pair of an object is converted into an array 

console.log(Object.entries(tinderUser));


// checking that the value in the object exists or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true 



const person = {
    name : "abc",
    greet : function() {
        console.log("hello : ",this.name);
        
    }
}

console.log(person.greet());


//destructuring of objects 

const course = {
    coursename : "c++",
    price : "1000",
    courseInstructor : "user"
}

//destructuring of values 

console.log(course.coursename);


const {courseInstructor} = course; // value of course insctuctor is extracted from the course 
console.log(courseInstructor); //user 
// or 
const {courseInstructor : ins} = course;
console.log(ins); // the value of courseInstructor is extracted in ins 


//destructuring in react 
// const navbar = ({comapny}) => {

// }

// navbar(comapny = "company")

//destructuring of array  (rarely used)

//API
// json -> object 
// in jsom keys are usuaally string and the values are also string 
// its structure is almost like an object 


// {
//     "name":"user1",
//     "coursename":"c++",
// }


