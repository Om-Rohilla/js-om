const coding = ["js", "ruby","java", "python"]

// coding.forEach ((val) => {
//     console.log(val)
// })

// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe)

// coding.forEach((val, index,array ) => {
//       console.log(val, index,array);
// })

const myCoding= [
    {
      languagename: "javascript",
      languagefile: "js"  
    },
    {
      languagename: "java",
      languagefile: "java"  
    },
    {
      languagename: "c++",
      languagefile: "cpp"  
    }
]

myCoding.forEach((item) => {
    console.log(item.languagename)
})