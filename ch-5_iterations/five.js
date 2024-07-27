const coding = ["js","ruby","java","python","cpp"]
            //ask for call back function
coding.forEach( function (item) {
    console.log(item);
} )
/*js
ruby
java
python
cpp */


//we can also use arrow functions 

coding.forEach((item) => {
    console.log(item);

})
/*js
ruby
java
python
cpp */

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe); //five reference not execute
/*js
ruby
java
python
cpp */ 

coding.forEach((item,index,arr) => {
console.log(item,index,arr);
})
/*js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] */

const mycoding = [
    {
        languageName :"javascript",
        langaugeFileName : "js"
    },
    {
        languageName :"javat",
        langaugeFileName : "java"
    },
    {
        languageName :"python",
        langaugeFileName : "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.langaugeFileName);
    console.log(item.languageName);

})
/*js
javascript
java
javat
py
python */