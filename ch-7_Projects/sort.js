// var library = [ 
//     {
//         title:  'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];

// library.sort((a,b) => a.libraryID - b.libraryID)

// console.log(library);



const c = [89,23,77,45,44];
const f = c.map((temp)=>{
    return temp * 1.8 + 32;
})
console.log(c);
console.log(f);


const num = [2,3,4,5]
const sq = num.map((n)=> {
    return n*n;
})

console.log(sq);

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = users.map((obj) => {
    return obj.name;
})

console.log(names);




const even = num.map((n) => {
    return Boolean(n%2==0);
})

console.log(even);


/*
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
]; 
*/

const products = [
    {name : 'laptop', price : 1000},
    {name : 'phone', price : 500},
    {name : 'tablet', price : 300}
]

// Output: [{Laptop: $1000}, 'Phone: $500', 'Tablet: $300']
console.log(products.map((element)=> {
    // let obj = new Object();
    // let name = element.name;
    // obj[name] = element.price;

    //console.log("obj : ",obj[element.name]=element.price);
    //console.log(this);
    
    return {[element.name] : element.price};
    //return obj;
}))





// const arr = ['hello', 'world']
// const upper = arr.map((element) => {
//     return element.toLocaleUpperCase();
// })

// console.log(upper);


// const fruits = ['apple', 'banana', 'cherry']

// const len = fruits.map((fruit) => {
//     return fruit.length;
// })

// console.log(len);


