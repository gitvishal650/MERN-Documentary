// const math = require("./math.js");
const hh = require("./assignment.js");
const vol = require("../volumes/volumes.js")
// console.log(math.add(2, 10));
// console.log(math.mul(2, 10));

console.log("Area of Right Angle Triangle :",hh.Rtriangle(2,5));
console.log("Area of Rectangle :",hh.rectangle(2,5));
console.log("Area of Circle :",hh.circle(5));

console.log(vol.volume_cone(3,6));
console.log(vol.volume_cube(2));
