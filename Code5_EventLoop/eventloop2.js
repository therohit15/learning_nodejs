const fs = require("fs");
const a = 100;
setImmediate(()=>console.log("setImmediate"));
Promise.resolve(()=>console.log("Promise"));
fs.readFile("./file.txt","utf8",()=>{
    console.log("File reading CB");
});
setTimeout(() => {console.log("timer expired")}, 0);
process.nextTick(()=>console.log("process.nextTick"));
function printA() {
    console.log("a="+a);
};
printA();;
console.log("Last Line of this file");