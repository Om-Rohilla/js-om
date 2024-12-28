const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["om", "my", "new"]

const myArr2 = new Array(1,2,3,4)

//console.log(myArr2[1]);

//array method 

//myArr.push(6,7,8,9) // push  new letter/number in array
//myArr.pop()   //removed last letter/number in array 

//myArr.unshift(9) //add any no in () in the array 
// myArr.shift(1) // remove the first letter of your array 

// console.log(myArr); 
//console.log(myArr.includes(9)); //tell the letter/number is include in your array ot not 
//console.log(myArr.indexOf(4)); // tell the index of your  letter/number

const newArr = myArr.join() //type is changed = string

//console.log(myArr);
//console.log(newArr);

// slice or splice 

//console.log("A" , myArr);

const myn1 = myArr.slice(1, 3)
//console.log(myn1);
//console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
//console.log("C", myArr);
//console.log(myn2); 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

const marvel_heros = ["thor", "ironman", "spiderman"]
const in_heros = [ "bheem", "kalia", "raju"]

//marvel_heros.push(in_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

// const allHero = marvel_heros.concat(in_heros)
// console.log(allHero);            // merge all the hero in on array 

//const allHero = [...marvel_heros, ...in_heros]
//console.log(allHero);

// const another_array = [1, 2, 3, [4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// console.log(Array.isArray("om rohilla")); // tell it is array or not 
// console.log(Array.from("om rohilla")); // convert everything in array 
// console.log(Array.from({name: "om rohilla"}));

let score1 = 100
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1,score2,score3));