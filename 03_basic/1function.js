function sayMyName(){
    console.log("om");
    console.log("rohilla");
}

// sayMyName()

// function addTwoNumber(number1, number2){ // number1 and number 2 are parameters (when we create function defination)
//     // console.log(number1 + number2);
// }
//  addTwoNumber(3 , 5) // output = 8  // (3,5 is arguments )
//  addTwoNumber("3" , 5)  // 35 javascript use her own logic

// const result = addTwoNumber(3,5) // output = 8 we can store it in variable 

// console.log("Result:",result) // undefined is value in result


// another methods to write correct function
function addTwoNumber(number1, number2){
  let result = number1 + number2
  return result
}

         const result = addTwoNumber(3,5)
        //  console.log("Result:",result);

// function logoinUserMsg (username){
//     if(username === undefined){
//     console.log("Please enter a username");
//     } else{
//     return`${username} just logged In`
//     } 
// }
//     console.log(logoinUserMsg("om"));

function calculateCardPrice(val1,val2, ...num1){   // ...is spread method add all cardprice in array 
   return num1
}
// console.log(calculateCardPrice(200 , 400 , 500, 400 , 500, 400 , 500));

const user = {
    username: "om rohilla",
    salary: 1099999,
    age: 18
}

function handleObject(anyobject) {
    // console.log(`username is ${anyobject.username} and the salary is ${anyobject.salary}`)
    
}
handleObject(user)

handleObject({
    username: "sam",
    salary: 555
})

const myNewArr = [ 200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr))