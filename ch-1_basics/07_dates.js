//from 1 jan 1970 and stored in mili sec 

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleString());

console.log(myDate.toTimeString());
console.log(myDate.toDateString());

console.log(typeof(myDate));

let myCreatedDate = new Date(2023,0, 23); //month start from 0 to 11 

console.log((myCreatedDate.toDateString()));

let myD = new Date(2023,0,23,5,3);
console.log(myD.toLocaleString());

let birthday = new Date("2023-01-14"); //month starts from 01 here in this syntax
console.log(birthday.toLocaleDateString());

let day = new Date("01-14-2023"); //mm-dd-yy
console.log(day.toLocaleDateString());

//time stamps in dates 

let myTimeStamp = Date.now()

console.log(myTimeStamp); //time in ms from 1 jan 1970

console.log(day.getTime()); //to get the value in ms 

//convert to second 
//divide by 1000 and use floor function to avoid decimals 

console.log(Math.floor(Date.now()/1000));


//other methods 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);

//useful method 

newDate.toLocaleDateString('default',{ weekday :"long"})