"use strict" // treat all js code as newer version

// alert("hello be aware");   we are using node js not browser


let Name = "Om rohilla";
let age = 18
let state;


//number {2 to the power 34}
//Bigint  { for large nnumber }
//string  {for any alphabetic charactor}
//boolen "true/ false"
//null "Standalone value"
//undefined =>
//symbol  => object

// object
/*
console.log(typeof Name);
console.log(typeof age);
console.log(typeof state);
console.log(typeof null);
*/ 

/*************************PRIMITIVE AND NON PRIMITIVE******
 primitive:- there are 7 type of primitive datatype: they are call by value
 1) string 
 2) number 
 3) null 
 4) boolean 
 5) undefined 
 6) symbol
 7) BigInt 
 
 non primitive:- ther are 3 type of datatype and they are refrence type
1) object 
2) array 
3) functions

*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Stack ( primitive ) , Heap (non -primitive) 
*/
let myName = "om rohilla"
let AnotherName  = myName
AnotherName = "indian"
// console.log(AnotherName);
// console.log(myName);

let user1 = {
    email: "om@gmail.com",
    upi: "user@ybl"
}

let user2 = user1;
user2.email= "my@gamil.com"

console.log(user1.email);
console.log(user2.email);