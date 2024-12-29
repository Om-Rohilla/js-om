const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc , curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`)
//   return acc +curval
// }, 3)


// const mytotal = myNums.reduce((acc , curval) => {
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc +curval
// }, 5)
// console.log(mytotal);

// const mytotal = myNums.reduce((acc , curval) => acc +curval,0)
// console.log(mytotal);

const shoppingcart = [
    {
        itemname:"js course",
        price: 3999
    },
    {
        itemname:"ruby course",
        price: 4999
    },
    {
        itemname:"c++ course",
        price: 5999
    }
]

const list = shoppingcart.reduce((acc , item) =>acc+  item.price ,0)
console.log(list)