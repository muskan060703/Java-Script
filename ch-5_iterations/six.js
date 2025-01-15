const coding = ["js","ruby","java","python","cpp"]

//storing the values that are coming from for each into a variable 
const values = coding.forEach(   (item) => {
    console.log(item);
    
}      ); //the value of values is undefined 
// nothing is returned by the forEach method 
console.log(values);
 


const val = coding.forEach( (item) => {
    console.log(item);
    return item;
    }) //again we got undefined 
console.log(val);


// from this we get to know that "foreach cannot return any value wither with return or not " 



// if we want to store the values  



const myNums = [1,2,3,4,5,6,7,8,9,10]

//*******************FILTER ********************************** */
//some more methods of array to access and store the values 
// for that instead of foreach we use filter method of array (to store the values)
//filter also takes callback 
//const newNums = myNums.filter((num) => num > 4 // one liner arrow funcion  // implicit return 
// it will return all the values that are greater than 4 
//)

//console.log(newNums);



const newNum2 = myNums.filter( (nums) => { // nums is an argument 
    nums > 4
}) // if the arrow function is not one liner and we write this code then nothing is stored in the newNums2 
// so in this type we need to do explicit return 
//values are stored into an array 
console.log(newNum2); //[]



const newNum3 = myNums.filter(  (nums) => { //nums is an argument 
    return nums > 4 ;
})  // filter() method does not return a boolean array, but instead 
// returns a new array containing the elements for which the provided callback function returns true.

console.log(newNum3);







// by using for each 
const newNum10 = []; // keeping this empty 
myNums.forEach((num)=>{
    if(num > 4) {
        newNum10.push(num);
    }
})
console.log(newNum10); // 5,6,7,8,9,10 

//using or with filter 



const books = [
    {title : 'book one', genre : 'fiction',publish : 1981, edition : 2004},
    {title : 'book two', genre : 'non-fiction',publish : 1992, edition : 2008},
    {title : 'book three', genre : 'history',publish : 1999, edition : 2007},
    {title : 'book four', genre : 'non-fiction',publish : 1989, edition : 2010},
    {title : 'book five', genre : 'science',publish : 2009, edition : 2014},
    {title : 'book six', genre : 'fiction',publish : 1987, edition : 2010},
    {title : 'book seven', genre : 'history',publish : 1986, edition : 1996},
    {title : 'book eight', genre : 'science',publish : 2011, edition : 1989},
];

let userBooks = books.filter((bk) => {
    return bk.genre === 'history'
});
console.log(userBooks);


userBooks = books.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre === "history";
})
console.log(userBooks);

