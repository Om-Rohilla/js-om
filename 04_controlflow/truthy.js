const userEmail = ""

// if (userEmail){
//     console.log("Got user email"); 
// } else {
//     console.log("Dont have user email");
// }

// falsey value 
// false , 0 , -0 , BigInt, on ,"",null,undefined , NaN

// truthy values
// "0", 'fasle' , " ", {}, function(){}, 

// if (userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObject = {}

// if (Object.keys(emptyObject).length === 0){
//          console.log("Object is empty")
//        }

// nullish coalescing operatoe (??): numm,  undefined

let val1;
val1 = 5 ?? 10

// console.log(val1)

// terniary operator 

// Condition ? true : false

const icetea = 80 
icetea <=80 ? console.log("less than 80"): console.log("greater then 80")