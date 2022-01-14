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

/* Que 3

var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece" */

const customer = { name: 'Bhaalo' };
const card = {
    amount: 20,
    product: 'Aaalo',
    unitprice: 50
};

const message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per price`;

console.log(message);

/* Que 4 

var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2]; */

const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
[CEO, , Mentor] = Neog;
console.log(CEO, Mentor);

/* Que 5

var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname); */

const arr = ["MA", "TA", "PA", "CA"];
[firstName, surname] = arr;
console.log(firstName, surname);