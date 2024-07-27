const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

//to iterate objects we have for in loop 

for (const key in myObject) {
    console.log(key);
}
/*js
cpp
rb
swift */

for (const key in myObject) {
    console.log(myObject[key]);
}
 /*Javascript
C++
ruby
swift by apple */

for (const key in myObject) {
    console.log(`${key}  shortcut is for ${myObject[key]} `);
}

/*js  shortcut is for Javascript 
cpp  shortcut is for C++ 
rb  shortcut is for ruby 
swift  shortcut is for swift by apple  */


const programming = ["js","rb","py","java","cpp"]


for (const key in programming) {
  console.log(key);
}
/*
0
1
2
3
4 */

for (const key in programming) {
    console.log(programming[key]);
  }
  /*
js
rb
py
java
cpp */

