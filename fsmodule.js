//importing it the CJS way
const fs = require("fs")
// fs.readFile("file.txt","utf-8", (err,data)=>{
//         console.log(err,data)
// } )

// const a = fs.readFileSync("file.txt")
// console.log(a.toString())

// console.log("Finished reading file")
// const a = fs.writeFile("file.txt", "this is the content i wrote", ()=>{
//         console.log("content has been written")
// })
const a = fs.writeFileSync("file.txt", "this is the content i wrote", )
console.log(a)
console.log("yoooooooooooo")