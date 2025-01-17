const fs = require("fs");
const https = require("https");
console.log("Hello World");
https.get("https;//api.fbi.com",(res)=>{
    console.log("secret data:"+res.secret);
});
fs.readFile("./gossip.txt","utf8",(data)=>{
    console.log("File data",data);
});
setTimeout(() => {
    console.log("Wait for 5 seconds");
}, 5000);