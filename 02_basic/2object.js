// singleton 

//object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "om",
    "full name": "om rohila",
    [mySym]: "key1",        // symbol should be write in [] becouse if it write in "" its datatype get changed and if [] so datatype get symbol
    Age: 18,
    Location: "haryana" ,
    Email: "mymail@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["monday", "tuesday"]
}

// console.log(JsUser["full name"]);// only be acces in []
// console.log(JsUser[mySym])
// console.log(typeof mySym)

JsUser.Email = "newname@gmail.com"
// console.log(JsUser.Email);
// Object.freeze(JsUser) // everything get freeze
JsUser.Email= "nayanam@gmail.com"
// console.log(JsUser.Email);  // Email wont changeb becouse we have freeze the whole object no value gets changed

//console.log(JsUser);

JsUser.greeting = function() {
      // console.log("Hello JS user ")
}
//console.log(JsUser.greeting());

JsUser.greeting2 = function() {
 //   console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting2());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const TinderUser = new Object() 
 TinderUser.id  = "123abc"
 TinderUser.name = "pokemon"
 TinderUser.isLoggedIn = true

// console.log(TinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
               firstname: "om",
               lastname: "rohilla"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj4 = {5:"c" , 6:"d"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3  = {...obj1,...obj2,...obj4}
// console.log (obj3);

const users = [
    
{
    id: 1,
    email: "o@email.com"
},
{
    id: 2,
    email: "m@email.com"
},
{
    id: 3,
    email: "r@email.com"
},
{
    id: 4,
    email: "h@email.com"
}
]

users[1].email
// console.log(TinderUser);

// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));

//console.log(TinderUser.hasOwnProperty('isLogged'));

const course = {
    name: " js.hindi",
    price: "999",
    courseInstructor: "me"
}

const {courseInstructor: teacher} = course
console.log(teacher);

// {
//     name: "om rohilla",
//     coursename: "js in hindi",
//     price: 0
// }