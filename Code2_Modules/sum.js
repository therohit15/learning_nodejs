console.log("Sum Module Executed");
//z="Hello World";
var x = "Hello World";
function calculateSum(a,b) {
    const sum = a+b;
    console.log(sum);
}
//console.log(module.exports);
module.exports = {
    calculateSum:calculateSum,
    x:x,
}; 
//module.exports.x=x;
//module.exports.calculateSum=calculateSum;
//console.log(module.exports);