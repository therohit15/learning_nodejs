const fs  = require("fs");
setImmediate(()=>console.log("setImmediate"));
setTimeout(() => console.log("Timer Expired"), 0);
Promise.resolve(()=>console.log('Promise'));
fs.readFile("./file.txt","utf8",()=>{
    setTimeout(() => console.log("2nd Timer"), 0);
    process.nextTick(()=>console.log("2nd nextTick"));
    setImmediate(()=>console.log("2nd Immediate"));
    console.log("File reading CB");
});
process.nextTick(()=>console.log("nextTick"));
console.log("Last Line of the File");
