let myDate = new Date ()

// console.log(typeof myDate); //OBJECT

//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleTimeString());

// IF YOU WANT TO CREATE A NEW DATE OR A SPECIFIC DATE SO 

//let  myCreatedDate = new Date(2001, 0, 1,) // dates has declared 
// let  myCreatedDate = new Date(2001, 0, 1, 5, 30, 59) // time is aslo declare along with dates
//let  myCreatedDate = new Date("2001-01-1") //acc to yy-mm-dd acc to FOREIGN
let  myCreatedDate = new Date("1-01-2001") // acc to dd-mm-yy acc to INDIA

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);//output = 1735400372019 millisecond value
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1 ); // you get month specificly acc to your current situation

let formattedString = `${newDate.getDay()} and the time is ${newDate.toLocaleTimeString()}`;
// console.log(formattedString);