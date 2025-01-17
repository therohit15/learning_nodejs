const crypto = require("node:crypto") //or just crypto
console.log("Hello World");
var a = 1078698;
var b = 20986;
//Sync func
crypto.pbkdf2Sync("password","salt",500000,50,"sha512");
console.log("First key is generated");
//Async func
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("Key is generated : ",JSON.stringify(key));
});
function multiplyFn(x,y) {
    const result = a*b;
    return result;
}
var c = multiplyFn(a,b);
console.log("Multiplication result is : ",c);
