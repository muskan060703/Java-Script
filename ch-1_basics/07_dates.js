// //from 1 jan 1970 and stored in mili sec 
// /*
// JavaScript Date objects represent a single moment in time in a platform-independent format. 
// Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970 
// */
// // dates are usually calculated in milliseconds 

// let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());

// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023,0, 23); //month start from 0 to 11 

// console.log((myCreatedDate.toDateString()));

// let myD = new Date(2023,0,23,5,3);
// console.log(myD.toLocaleString());

// let birthday = new Date("2023-01-14"); //month starts from 01 here in this syntax
// console.log(birthday.toLocaleDateString());

// let day = new Date("01-14-2023"); //mm-dd-yy
// console.log(day.toLocaleDateString());

// //time stamps in dates 

// let myTimeStamp = Date.now()

// console.log(myTimeStamp); //time in ms from 1 jan 1970

// console.log(day.getTime()); //to get the value in ms 

// //convert to second 
// //divide by 1000 and use floor function to avoid decimals 

// console.log(Math.floor(Date.now()/1000));


// //other methods 

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1);

// //useful method 

// newDate.toLocaleDateString('default',{ weekday :"long"})



let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());

console.log(myDate.toLocaleDateString());
console.log(typeof(myDate)); //object 


let myCreatedDate = new Date(2025,0,23); //month start from 0 
console.log(myCreatedDate); // 23-01-2025 will be the date 
console.log(myCreatedDate.toDateString());


let dated = new Date("2025-01-08"); // count here start from 1 yy/mm/dd
let d1 = new Date("01-14-2023"); // mm/dd/yy
console.log(dated.toDateString());
console.log(d1.toDateString()); // converting the date into readable form 

let myTimeStamp = Date.now(); // we will get the current time from 1970 to now in milliseconds 
console.log(myTimeStamp);
console.log(myTimeStamp - d1.getTime());
console.log(Math.floor(Date.now()/1000)); // converting the time that we get in millisecond into seconds by dividing it with 1000

let newDate = new Date();
console.log(newDate);

let d3 = Date.parse('04 Dec 1995 00:12:00 GMT'); // return's date's timestamp 
console.log(d3);
console.log(new Date(utcDate));






