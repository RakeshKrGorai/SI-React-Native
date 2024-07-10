/*JavaScript Program to function as Calculator
‘+’ : sum
‘-’  : subtract
‘x’  : multiplication
‘/’   : division
‘%’ : display remainder
*/

var num1 = 20;
var num2 = 10;

function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

var addition = sum(num1, num2);
console.log("Addition of " + num1 + " & " + num2 + " is " + addition);

var subtraction = subtract(num1, num2);
console.log("Difference of " + num1 + " & " + num2 + " is " + subtraction);

var product = multiplication(num1, num2);
console.log("Product of " + num1 + " & " + num2 + " is " + product);

var quotient = division(num1, num2);
console.log("Division of " + num1 + " with " + num2 + " is " + quotient);

var remainder = mod(num1, num2);
console.log("Modulus of " + num1 + " & " + num2 + " is " + remainder);
