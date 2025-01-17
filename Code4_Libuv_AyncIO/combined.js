const { log } = require("console");
const fs = require("fs");
const https = require("https");
console.log("Hello World");
var a = 1078698;
var b = 20986;
https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Fetched data successfully");
});
setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);
fs.readFileSync("./file.txt","utf-8");
console.log("this will execute only after the file is read");

fs.readFile("./file.txt","utf8",(err, data)=>{
    console.log("File data : ",data);
});
function multiplyFn(x,y) {
    const result = a*b;
    return result;
}
var c= multiplyFn(a,b);
console.log("Multiplication result : "+c);