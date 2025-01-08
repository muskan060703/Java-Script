let animal = `elephant is a wild animal`;
console.log(animal.at(2)); //e also accepts negative integers which count back from the last string character 
console.log(animal.charAt(1)); //returns the character at a specified index 
console.log(animal.charCodeAt(0));
console.log(animal.charCodeAt(2)); //returns the character code at the particular index 
console.log(animal.codePointAt(0));     // returns the utf 16 unicode for the particulat character 

console.log(animal.concat(` `,`is a wild animal ... ! `));
console.log(animal);

console.log(animal.endsWith(`t`)); //true 
console.log(animal.includes(`pha`)); //true 


console.log(animal.indexOf(`e`)); //0 //returns -1 if the character was not found 
console.log(animal.indexOf(`p`)); //3 
console.log(animal.isWellFormed());
console.log(animal.lastIndexOf(`e`)); // Returns the index within this string of the last occurrence of searchValue, or -1 if not found.
//returns 2 
console.log(animal.match(`el`)); //returns null if not found otherwise returns the starting index of the expression   
console.log(animal.normalize()); //returns the unicode normalization form 

console.log(animal.repeat(4)); // repeats the animal string 4 times 

console.log(animal.replace(`e`,`x`)); //xlephant 
console.log(animal);

console.log(animal.replaceAll(`e`,`x`)); //xlxphant 
console.log(animal);

console.log(animal.search`ele`); // returns index 0 ( starting index e-> 0 at 0 place )
console.log(animal.slice(0,4)); //elep value at the end index (4th here) is not included but the value at the starting index is included 
//slice supports positive and negative indexes 

//----------------SPLIT METHOD -------------------
// split method is used to convert a string into an array 

console.log(animal.split(' ')); 

console.log(animal);
console.log(animal.startsWith(`e`)); //true 

// str.substr(start, length);
console.log(animal.substr(2,5)); //ephan 
console.log(animal.substring(0,4)); // same working as slice method of javascript but does not support negative indexes 

//console.log(animal.substring(-1,-4)); // empty -> does not support negative indexes 

console.log(animal.slice(-6,5));
console.log(animal);
console.log(animal.toLocaleLowerCase());
console.log(animal.toLocaleUpperCase());
console.log(animal.toLowerCase());
console.log(animal.toUpperCase());
console.log(animal.toWellFormed());


// trim is used to trim the white spaces in the string from the start and end of the string 
console.log(animal.trim());
//trimEnd is used to trim the white spaces from the end of the string 
console.log(animal.trimEnd());
//trimStart is used to trim the white spaces from the start of the string 
console.log(animal.trimStart());

















