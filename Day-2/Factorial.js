//JavaScript Program to Find the Factorial of a Number

let num = 5;

let fact = 1;

while (num > 0) {
  fact *= num;
  num--;
}

console.log("Factorial : " + fact);
