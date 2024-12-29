const user = {
    username: "om rohilla",
    price: 999,

    welcomeMessage : function(){
            // console.log(`${this.username} welcome to website `);
            // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//  console.log(this);
 
//   function two(){
//     let username = "om rohilla"
//     console.log(this.username);
//   }

//   two()

// const three =  () => {
//     let username = "om rohilla"
//         // console.log(this.username);
//         console.log(this);
// }

// three()

// const addTwo = (num1,num2) => {
//    return num1 + num2
// }


// const addTwo = (num1,num2) => num1 + num2  // implicit retun 
//  const addTwo = (num1,num2) => (num1 + num2)  
const addTwo = (num1,num2) => ({username: "om rohilla"})
    
 

 console.log(addTwo(3,4))

 const myArr = [2,5,3,6,8]
 myArr.forEach(()=> {})