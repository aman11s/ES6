// Covert code to ES6+ syntax

/* Que 1 

 var aloo = 1;
 if (aloo == 1) {
    var a = 2;
    console.log(a);
 }
 console.log(aloo); */

let aloo = 1;
if (aloo === 1) {
    let a = 2;
    console.log(a);
}
console.log(aloo)

/* Que 2

var multiply = function(x, y) {
  return x * y;
}; */

const multiply = (x, y) => x * y;
console.log(multiply(2, 3));