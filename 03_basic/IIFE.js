// function one(){
//     console.log(`DB conneected`)
// }
// one()

(function one(){
    // named IIFE
    console.log(`DB conected`)
})();

//()() //1st () function defination and 2nd () function execution

( (name)=> {
    //unnamed iffe
    console.log(`hello ${name}`)
})("om rohilla");

( (name1)=> {
    //unnamed iffe
    console.log(`hello ${name1}`)
})("om-rohilla")

// while writing 2iffein one code so use ; in the closiing of 1st iife and then write 2nd iife 

