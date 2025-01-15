//require("./xyz.js");
//const {x, calculateSum}=require("./sum.js");
//import {x, calculateSum} from "./sum.js";
//const {calculateSum} = require("./calc/sum");
//const {calculateMultiply} = require("./calc/multiply");
const {calculateSum,calculateMultiply} = require("./calc/index")
const data = require("./data.json");
var name = "Rohit";
var a = 10;
var b = 20;
//console.log(name);
//console.log(a+b);
//console.log(global===globalThis);
//console.log(x);
calculateSum(a,b);
calculateMultiply(a,b);
console.log(data);
console.log(JSON.stringify(data));


