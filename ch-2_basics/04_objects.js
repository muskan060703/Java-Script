const tinderUSer = new Object() //on printing {} empty will printed

tinderUSer.id = "123abc";
tinderUSer.name = "sammy";
tinderUSer.isLoggedIn = false;

console.log(tinderUSer);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : { //nested objects 
            firstname : "muskan",
            lastname : "dhaka"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//combining the objects 

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = {obj1,obj2} // this results to object inside an object it will not merge the objects 
console.log(obj3);

//instead we can use same objects and assign 


//the following will copy the value of all the enumerable own properties from one or more source objects to a target object . returns the target object 

const obj4 = Object.assign({},obj1,obj2); // we use {} as a first parameter as all the values will be put under this parameter this is optional parameter but you can use as it is a good practice
//{} is important {} ->target , other are source 
console.log(obj4);

//other syntax that we are commonly going to use 
// spread -> ...
const obj5 = {...obj1,...obj2};
console.log(obj5);

//when the value is arrived from databases 
//it will come as an array of objects

//e.g..
const users = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "two@gmail.com"
    },
    {
        id : 3,
        email : "three@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUSer);

//to get all the keys 

console.log(Object.keys(tinderUSer)); //the data type of output of this will be an array 

console.log(Object.values(tinderUSer));

console.log(Object.entries(tinderUSer)); //every key-value become array it is array inside an array 


console.log(tinderUSer.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUSer.hasOwnProperty('isLogged')); //false

//DESTRUCTURING OF OBJECTS
 //EG. getting values from react and then destructure them

const course = {
    coursename : "js",
    price : 999,
    courseInstructor : "hitesh"
}
// {the value you want to extract }
const {courseInstructor} = course ;

console.log(courseInstructor);

//we can also give names according to us
const {courseInstructor : ins} = course;
console.log(ins); //object destructured 


//API USE JSON FOR DATA GIVEN BELOW IS STRUCTURE OF JSON
// {
//     "name" : "muskan",
//     "coursename" : "js",
//     "price" : "free"
// }
//in JSON usually keys are string and also their values are also strings 

//sometimes the api uses array of objects 
//random user me api famous api  to look for sample resource
//json formater tool for understanding code 
