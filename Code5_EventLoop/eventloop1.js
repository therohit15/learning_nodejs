const fs = require("fs");
const a = 100;
setImmediate(()=>console.log("setImmediate"));
fs.readFile("./file.txt","utf8",()=>{
    console.log("File reading CB");
});
setTimeout(() => {console.log("timer expired")}, 0);
function printA() {
    console.log("a="+a);
};
printA();;
console.log("Last Line of this file");

