const lodash = require("lodash");
//Chunk array
let alpha = ['a','c','e','p','d','r'];
let beta = lodash.chunk(alpha,2);
console.log("The chunks of array : ",beta);
//Array element functions
let mainArray = [1,2,3,4,5,6];
let first = lodash.first(mainArray);
console.log("First element is :", first);
let last = lodash.last(mainArray);
console.log("First element is :", last);
//concating 2 arrays
let newArray = lodash.concat(alpha,mainArray);
console.log("Concantenated array 1 and 2 :", newArray);
//reversing array
let revArray = lodash.reverse(mainArray);
console.log("The reversed array is :", revArray);