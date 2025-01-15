// const coding = ["js","ruby","java","python","cpp"]
//             //ask for call back function
// coding.forEach( function (item) {
//     console.log(item);
// } )
// /*js
// ruby
// java
// python
// cpp */


// //we can also use arrow functions 

// coding.forEach((item) => {
//     console.log(item);

// })
// /*js
// ruby
// java
// python
// cpp */

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe); //five reference not execute
// /*js
// ruby
// java
// python
// cpp */ 

// coding.forEach((item,index,arr) => {
// console.log(item,index,arr);
// })
// /*js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] */

// const mycoding = [
//     {
//         languageName :"javascript",
//         langaugeFileName : "js"
//     },
//     {
//         languageName :"javat",
//         langaugeFileName : "java"
//     },
//     {
//         languageName :"python",
//         langaugeFileName : "py"
//     }
// ]

// mycoding.forEach((item) => {
//     console.log(item.langaugeFileName);
//     console.log(item.languageName);

// })
// /*js
// javascript
// java
// javat
// py
// python */



//for each loop 
const coding = ['js','ruby','java','python','c++']
//higher order functions 
//it is a call back function 
//call back functions do not have their own name 

coding.forEach
(     function (key)  // automatically takes the value from the array each time 
    {  
        console.log(key);
    }     
)



// you can also write arrow function 

coding.forEach(

    (key) => {
        console.log(key);
        
    }

)



function printMe(item) {
    console.log(item);
    
}
//passing a function into forEach 

coding.forEach(printMe);


//the function that is declared inside the forEach method of array contains more parameters as well 

coding.forEach(  (item,index,arr) => {console.log(item);
    console.log(index);
    console.log(arr);
    
 } )


 // array of objects 
 //for accessing that we commonly use forEach 



 //array of object 

 const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]


//useful 

myCoding.forEach( (item) => {
console.log(item.languageName);
console.log(item.languageFileName);
})



